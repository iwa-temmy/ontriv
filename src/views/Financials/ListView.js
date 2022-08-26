import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { Bars } from "react-loader-spinner";
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
import EmptyTableData from "../../components/Table/EmptyTableData";
//redux
import { connect } from "react-redux";
import { setCurrentSection, deleteInvoice } from "../../redux/actions";
import DeleteModal from "../../components/Modal/DeleteModal";
import createNotification from "../../utils/Notification";

const ClientListView = ({
  setCurrentSection,
  invoices,
  loading,
  openInvoiceModal,
  deleteInvoice,
  deleteloading,
  deleteError,
  deleteMessage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [invoiceID, setInvoiceID] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  const toggleInvoicePreview = (record) => {
    if (showModal) {
      setInvoiceDetails(record);
    } else {
      setInvoiceDetails(record);
    }
    setShowModal(!showModal);
  };
  const openDeleteModal = (record) => {
    const invoiceData = record?.row?.original;
    setShowDeleteModal(true);
    setInvoiceID(invoiceData?.id);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setInvoiceID(0);
  };
  const openFullInvoicePage = (record) => {
    const invoiceData = record?.row?.original;
    navigate(`/invoices-&-financials/invoice/${invoiceData?.id}`, {
      state: invoiceData,
    });
  };
  const handleDelete = () => {
    deleteInvoice(invoiceID);
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
            openDeleteModal={() => openDeleteModal(props)}
          />
        ),
      },
    ],
    // eslint-disable-next-line
    []
  );
  useEffect(() => {
    if (!deleteloading && deleteMessage?.length > 0) {
      createNotification("success", deleteMessage);
      closeDeleteModal();
    } else if (!deleteloading && deleteError?.length > 0) {
      createNotification("error", deleteError);
    }
  }, [deleteError, deleteMessage, deleteloading]);
  return (
    <div className="mb-0 mt-1" style={{ overflowX: "scroll" }}>
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
          pagePosition="left"
        />
      ) : (
        <EmptyTableData
          subHeaderText="Invoice your first client and get paid instantly"
          buttonText="Create a new invoice"
          onClick={openInvoiceModal}
        />
      )}
      <InvoiceDetails
        toggleInvoicePreview={toggleInvoicePreview}
        showModal={showModal}
        details={invoiceDetails?.row?.original}
      />
      <DeleteModal
        openModal={showDeleteModal}
        setOpenModal={setShowDeleteModal}
        deleteAction={handleDelete}
        deleteloading={deleteloading}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deleteloading: state?.invoice?.loading?.deleteInvoice,
    deleteMessage: state?.invoice?.message?.deleteInvoice,
    deleteError: state?.invoice?.error?.deleteInvoice,
  };
};
export default connect(mapStateToProps, { setCurrentSection, deleteInvoice })(
  ClientListView
);
