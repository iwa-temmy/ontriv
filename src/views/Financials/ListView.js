import React from "react";
import Table from "../../components/Table";
import lightGreen from "../../assets/img/finance-light-green-circle.svg";
import { connect } from "react-redux";
import { setCurrentSection } from "../../redux/actions";
import { Bars } from "react-loader-spinner";
import {formatInvoiceIssueDate, formatAmount, paymentStatus} from "../../utils/helper"

import InvoiceDetails from "./InvoiceDetails";


const ClientListView = ({ setCurrentSection, invoices, loading }) => {
  const cols = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "img",
        cellClass: "",
        Cell: (props) => <InvoiceDetails details={props} />,
      },
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
            <span className="pt-2 mb-0 text-underline">{formatAmount(props.value)}</span>
          </>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        cellClass: "pt-3  list-client-item-finance ",
        Cell: (props) => (
          // <div className="list-client-tag-paid text-center">
          <>
            {paymentStatus(props.value)}
          </>
          // </div>
        ),
      },
    ],
    // eslint-disable-next-line
    []
  );
  return (
    <div className="mb-0 mt-2 overflow-auto">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{marginTop: "6rem"}}>
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
        <div className="d-flex justify-content-center align-items-center" style={{marginTop: "6rem"}}>
          <span className="text-center">No Invoices available</span>
        </div>
      )}
    </div>
  );
};

export default connect(null, { setCurrentSection })(ClientListView);
