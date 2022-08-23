import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { Bars } from "react-loader-spinner";
import EmptyTableData from "../../components/Table/EmptyTableData";

//redux
import { connect } from "react-redux";
import {
  setCurrentSection,
  getAllExpenses,
  deleteExpense,
} from "../../redux/actions";
//utils
import { formatAmount, formatInvoiceIssueDate } from "../../utils/helper";

import { MdDelete } from "react-icons/md";
import createNotification from "../../utils/Notification";
import DeleteModal from "../../components/Modal/DeleteModal";

const ExpenseListView = ({
  setCurrentSection,
  openExpenseModal,
  getAllExpenses,
  deleteExpense,
  expenses,
  loading,
  deleteExpenseLoading,
  deleteExpenseMessage,
  deleteExpenseError,
}) => {
  const [expenseID, setExpenseID] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //functions
  const openDeleteModal = (id) => {
    setShowDeleteModal(true);
    setExpenseID(id);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setExpenseID(0);
  }

  const handleDeleteExpense = () => {
    deleteExpense(expenseID)
  }
  const cols = React.useMemo(
    () => [
      {
        Header: "Vendor Name",
        accessor: "vendor",
        cellClass: "pt-4 list-client-item-finance ",
        Cell: (props) => {
          return <>{props?.value?.name}</>;
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
            <button
              className="d-flex"
              onClick={() => {
                openDeleteModal(props.value);
              }}
            >
              <div className="list-client-delete-finance px-3 py-1">
                <MdDelete size="14px" className="pt-0" />
                <span className="pt-2 mb-0 text-underline">Delete</span>
              </div>
            </button>
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

  useEffect(() => {
    if (!deleteExpenseLoading && deleteExpenseMessage?.length > 0) {
      createNotification("success", deleteExpenseMessage);
      closeDeleteModal();
    } else if (!deleteExpenseLoading && deleteExpenseError?.length > 0) {
      createNotification("error", deleteExpenseError);
    }
  }, [deleteExpenseLoading, deleteExpenseError, deleteExpenseMessage]);
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
          pagePosition="left"
        />
      ) : (
        <EmptyTableData
          subHeaderText="Start tracking your expenses"
          buttonText="Create New Expense"
          onClick={openExpenseModal}
        />
      )}

      <DeleteModal
        openModal={showDeleteModal}
        setOpenModal={setShowDeleteModal}
        deleteAction={handleDeleteExpense}
        deleteloading={deleteExpenseLoading}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state?.expense?.expenses,
    loading: state?.expense?.loading?.getExpense,
    deleteExpenseLoading: state?.expense?.loading?.deleteExpense,
    deleteExpenseMessage: state?.expense?.message?.deleteExpense,
    deleteExpenseError: state?.expense?.error?.deleteExpense,
  };
};

export default connect(mapStateToProps, {
  setCurrentSection,
  getAllExpenses,
  deleteExpense,
})(ExpenseListView);
