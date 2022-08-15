import React, { useState, useEffect } from "react";
import { Input, Row, Col } from "reactstrap";
import XCancel from "../../../assets/img/x-cancel.svg";
import ButtonLoader from "../../../components/Loaders/ButtonLoader";

//redux
import { connect } from "react-redux";
import { getAllVendors, createNewExpense } from "../../../redux/actions";
import createNotification from "../../../utils/Notification";

const AddExpenseModal = ({
  closeExpenseModal,
  getAllVendors,
  vendors,
  createNewExpense,
  createExpenseLoading,
  message,
  createExpenseError,
}) => {
  const [formData, setFormData] = useState({});
  const [recurring, setRecurring] = useState(false);
  const [attachment, setAttachment] = useState(false);

  //handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleRecurringCheck = () => {
    setRecurring(!recurring);
  };
  const handleAttachmentCheck = () => {
    setAttachment(!attachment);
  };
  const handleAttachmentChange = (e) => {
    const imageName = e.target.files[0];
    console.log(imageName);
    setFormData({ ...formData, file: imageName });
  };

  //handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const formdata = new FormData();
    formdata.append("vendor", formData.vendor);
    formdata.append("category", formData.category);
    formdata.append("amount", formData.amount);
    formdata.append("remarks", formData.remarks);
    formdata.append("date", formData.date);
    formdata.append("recurring", recurring);
    if (attachment) {
      formdata.append("file", formData?.file);
    }
    createNewExpense(formdata);
  };
  const categories = [
    {
      name: "Accomodation",
      value: "Accomodation",
    },
    {
      name: "Advertising & promotion",
      value: "Advertising & promotion",
    },
    {
      name: "Bank charges",
      value: "Bank charges",
    },
    {
      name: "Electricity",
      value: "Electricity",
    },
    {
      name: "Employee Advance",
      value: "Employee Advance",
    },
    {
      name: "Entertainment",
      value: "Entertainment",
    },
    {
      name: "Equity & Common stock",
      value: "Equity & Common stock",
    },
    {
      name: "Food & Drinks",
      value: "Food & Drinks",
    },
    {
      name: "General expenses",
      value: "General expenses",
    },
    {
      name: "Insurance",
      value: "Insurance",
    },
    {
      name: "Inventory",
      value: "Inventory",
    },
    {
      name: "Legal Fees",
      value: "Legal Fees",
    },
    {
      name: "Loan",
      value: "Loan",
    },
    {
      name: "Maintenance",
      value: "Maintenance",
    },
    {
      name: "Office equipment",
      value: "Office Equipment",
    },
    {
      name: "Office Supply",
      value: "Office Supply",
    },
    {
      name: "Outsourcing",
      value: "Outsourcing",
    },
    {
      name: "Payroll benefits",
      value: "Payroll benefits",
    },
    {
      name: "Printing",
      value: "Printing",
    },
    {
      name: "Professional Services",
      value: "Professional Services",
    },
    {
      name: "Processing fees",
      value: "Processing fees",
    },
    {
      name: "Research & development",
      value: "Research & development",
    },
    {
      name: "Software",
      value: "Software",
    },
    {
      name: "Telephone & Internet",
      value: "Telephone & Internet",
    },
    {
      name: "Transportation",
      value: "Transportation",
    },
    {
      name: "Utilities",
      value: "Utilities",
    },
    {
      name: "Others",
      value: "Others",
    },
  ];

  useEffect(() => {
    getAllVendors();
  }, [getAllVendors]);

  useEffect(() => {
    if (!createExpenseLoading && message?.length > 0) {
      createNotification("success", message);
      closeExpenseModal();
    } else if (!createExpenseLoading && createExpenseError?.length > 0) {
      createNotification("error", createExpenseError);
    }
  }, [createExpenseError, createExpenseLoading, message, closeExpenseModal]);
  return (
    <div className="off-canvas-menu">
      <div className="off-canvas-menu__content py-2 ">
        <div className="d-inline-flex w-100 my-3 px-4">
          <div className="add-client-text text-center">
            <h5>Add new expense</h5>
          </div>
          <img
            onClick={closeExpenseModal}
            className="ms-auto"
            src={XCancel}
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit}>
          <Row
            className="mt-2 px-4"
            style={{ height: "65vh", overflowY: "scroll" }}
          >
            <Col xl="12">
              <label className="text-left w-100 mt-2">Select Vendor</label>
              <Input
                className="off-canvas-menu__input py-3 px-3"
                name="vendor"
                type="select"
                id="client"
                onChange={handleInputChange}
              >
                <option defaultValue="">Select Vendor</option>
                {vendors?.map((vendor) => {
                  return (
                    <option value={vendor?.id} key={vendor?.id}>
                      {vendor?.name}
                    </option>
                  );
                })}
              </Input>
            </Col>
            <Col xl="12">
              <label className="text-left w-100 mt-2">Select Category</label>
              <Input
                className="off-canvas-menu__input py-3 px-3"
                type="select"
                name="category"
                id="category"
                onChange={handleInputChange}
              >
                <option defaultValue="">Select Category</option>
                {categories.map((category) => {
                  return (
                    <option value={category.value} key={category.name}>
                      {category.name}
                    </option>
                  );
                })}
              </Input>
            </Col>
            <Col xl="6">
              <label className="text-left w-100 mt-2">Date</label>
              <Input
                name="date"
                type="date"
                onChange={handleInputChange}
                placeholder="14/04/2021"
                className="off-canvas-menu__input py-3 px-3"
              />
            </Col>
            <Col xl="6">
              <label className="text-left w-100 mt-2">Amount</label>
              <Input
                name="amount"
                type="number"
                placeholder="$300"
                onChange={handleInputChange}
                className="off-canvas-menu__input py-3 px-3"
              />
            </Col>
            <Col xl="12">
              <label className="text-left w-100 mt-2">Remarks</label>
              <Input
                name="remarks"
                type="textarea"
                onChange={handleInputChange}
                className="w-100 rounded-3 mt-2 canvas-textarea"
                rows="3"
              />
            </Col>
            {attachment && (
              <Col xl="12">
                <label className="text-left w-100 mt-2">Attachment</label>
                <Input
                  type="file"
                  className="off-canvas-menu__input py-3 px-3"
                  name="file"
                  onChange={handleAttachmentChange}
                />
              </Col>
            )}

            {recurring && (
              <Col xl="12">
                <label className="text-left w-100 mt-2">Recurring</label>
                <Input
                  type="select"
                  className="off-canvas-menu__input py-3 px-3"
                >
                  <option>Select Schedule</option>
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                  <option value="Weekly">Weekly</option>
                </Input>
              </Col>
            )}

            <Col xl="12">
              <div className="my-2  d-inline-flex">
                <input
                  type="checkbox"
                  name="attachment"
                  checked={attachment}
                  onChange={handleAttachmentCheck}
                  className="my-auto"
                />
                <h6 className="fs-6 my-auto ms-2 fw-light">
                  Attach file to expense record (.docx, .pdf, .jped)
                </h6>
              </div>
            </Col>
            <Col xl="12">
              <div className="my-2 d-inline-flex">
                <input
                  type="checkbox"
                  className="my-auto"
                  name="recurring"
                  checked={recurring}
                  onChange={handleRecurringCheck}
                />
                <h6 className="fs-6 my-auto ms-2 fw-light">
                  This is a recurring expense (monthly)
                </h6>
              </div>
            </Col>
          </Row>
          <div className="position-absolute bottom-0 w-100 mt-4">
            <hr />
            <div className="d-flex justify-content-end mt-2 w-100 mb-4 ">
              <button
                type="submit"
                className="py-3 px-4 send"
                style={{ marginRight: "18px" }}
              >
                {createExpenseLoading ? <ButtonLoader /> : "Add Expense"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vendors: state?.vendors?.vendors,
    createExpenseLoading: state?.expense?.createExpenseLoading,
    message: state?.expense?.message,
    createExpenseError: state?.expense?.createExpenseError,
  };
};
export default connect(mapStateToProps, { getAllVendors, createNewExpense })(
  AddExpenseModal
);
