import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { Bars } from "react-loader-spinner";
import EmptyTableData from "../../components/Table/EmptyTableData";

//Navigation
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  //functions
  const openDeleteModal = (id) => {
    setShowDeleteModal(true);
    setExpenseID(id);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setExpenseID(0);
  };

  const handleDeleteExpense = () => {
    deleteExpense(expenseID);
  };

  const openFullExpensePage = (record) => {
    console.log("record",record)
    navigate(`/invoices-&-financials/expense/${record?.id}`, {
      state: record,
    });
  };
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
        cellClass: "",
        Cell: (props) => (
          <>
            <button
              className="d-flex justify-content-center align-items-center list-client-delete-finance "
              onClick={() => {
                openDeleteModal(props.value);
              }}
            >
              <MdDelete size="14px" />
              <span className="text-underline" style={{ marginLeft: "0.2rem" }}>
                Delete
              </span>
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
          rowOnClick={openFullExpensePage}
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
