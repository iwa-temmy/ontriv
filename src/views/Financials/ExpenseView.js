import React, { useEffect } from "react";
import Table from "../../components/Table";
import { Bars } from "react-loader-spinner";
import EmptyTableData from "../../components/Table/EmptyTableData";

//redux
import { connect } from "react-redux";
import { setCurrentSection, getAllExpenses } from "../../redux/actions";
//utils
import { formatAmount, formatInvoiceIssueDate } from "../../utils/helper";

import { MdDelete } from "react-icons/md";

const ExpenseListView = ({
  setCurrentSection,
  getAllExpenses,
  expenses,
  loading,
}) => {
  const cols = React.useMemo(
    () => [
      {
        Header: "Vendor Name",
        accessor: "vendor",
        cellClass: "pt-4 list-client-item-finance ",
        Cell: (props) => {
          return (<>{props?.value?.name}</>)
        },
      },
      {
        Header: "Category",
        accessor: "category",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Amount",
        accessor: "amount",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{formatAmount(props.value)}</>,
      },
      {
        Header: "Date",
        accessor: "date",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{formatInvoiceIssueDate(props.value)}</>,
      },
      {
        Header: "Action",
        accessor: "id",
        cellClass: "pt-4 list-client-item",
        Cell: (props) => (
          <>
            <div className="d-flex">
              <div className="list-client-delete-finance px-3 py-1">
                <MdDelete
                  size="14px"
                  className="pt-0"
                  onClick={() => {
                    console.log(props.value);
                  }}
                />
                <span className="pt-2 mb-0 text-underline">Delete</span>
              </div>
            </div>
          </>
        ),
      },
    ],
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    getAllExpenses();
  }, [getAllExpenses]);
  return (
    <div className="mb-0 mt-2 overflow-auto">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "6rem" }}
        >
          <Bars height="100" width="100" color="#2062F4" />
        </div>
      ) : expenses?.length > 0 ? (
        <Table
          columns={cols}
          data={expenses}
          divided
          defaultPageSize={6}
          pagePosition="center"
        />
      ) : (
        <EmptyTableData
          subHeaderText="Start tracking your expenses"
          buttonText="Create New Expense"
          // onClick={openInvoiceModal}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state?.expense?.expenses,
    loading: state?.expense?.getExpensesLoading,
  };
};

export default connect(mapStateToProps, { setCurrentSection, getAllExpenses })(
  ExpenseListView
);
