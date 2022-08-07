import React, { useState } from "react";
import Table from "../../components/Table";
import { connect } from "react-redux";
import { setCurrentSection } from "../../redux/actions";
import { Bars } from "react-loader-spinner";
import noInvoice from "../../assets/img/no-invoice.svg";
import {
  formatInvoiceIssueDate,
  formatAmount,
  paymentStatus,
} from "../../utils/helper";
//Navigation
import { useNavigate } from "react-router-dom";
//Components
import TableDropdown from "../../components/Dropdown/TableDropdown";
import InvoiceDetails from "./InvoiceDetails";

const ClientListView = ({ setCurrentSection, invoices, loading, openInvoiceModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState({});

  const navigate = useNavigate();

  const toggleInvoicePreview = (record) => {
    if (showModal) {
      setInvoiceDetails(record);
    } else {
      setInvoiceDetails(record);
    }
    setShowModal(!showModal);
  };

  const openFullInvoicePage = (record) => {
    const invoiceData = record?.row?.original;
    navigate(`/invoices-&-financials/invoice/${invoiceData?.id}`, {
      state: invoiceData,
    });
  };
  const cols = React.useMemo(
    () => [
      {
        Header: "Invoice Name",
        accessor: "description",
        cellClass: "pt-4 list-client-item-finance ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Date",
        accessor: "issued_on",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{formatInvoiceIssueDate(props.value)}</>,
      },
      {
        Header: "Inv No",
        accessor: "id",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>#{props.value}</>,
      },
      {
        Header: "Client Name",
        accessor: "client",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{props.value.fullname}</>,
      },
      {
        Header: "Amount",
        accessor: "total",
        cellClass: "pt-4 list-client-item-finance ",
        Cell: (props) => (
          <>
            <span className="pt-2 mb-0 text-underline">
              {formatAmount(props.value)}
            </span>
          </>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        cellClass: "pt-3  list-client-item-finance ",
        Cell: (props) => <>{paymentStatus(props.value)}</>,
      },
      {
        Header: "Action",
        accessor: "img",
        cellClass: "",
        Cell: (props) => (
          <TableDropdown
            toggleInvoicePreview={() => toggleInvoicePreview(props)}
            openFullInvoicePage={() => openFullInvoicePage(props)}
          />
        ),
      },
    ],
    // eslint-disable-next-line
    []
  );
  return (
    <div className="mb-0 mt-2 overflow-auto">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "6rem" }}
        >
          <Bars height="100" width="100" color="#2062F4" />
        </div>
      ) : invoices?.length ? (
        <Table
          columns={cols}
          data={invoices}
          divided
          defaultPageSize={6}
          pagePosition="center"
        />
      ) : (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ marginTop: "4.6rem" }}
        >
          <img src={noInvoice} alt="empty invoice icon" width={140} />
          <span className="text-center my-4">
            Invoice your first client and get paid instantly
          </span>
          <button
            className="btn btn-primary send px-5 py-2"
            onClick={openInvoiceModal}
          >
            Create a new invoice
          </button>
        </div>
      )}
      <InvoiceDetails
        toggleInvoicePreview={toggleInvoicePreview}
        showModal={showModal}
        details={invoiceDetails?.row?.original}
      />
    </div>
  );
};

export default connect(null, { setCurrentSection })(ClientListView);
