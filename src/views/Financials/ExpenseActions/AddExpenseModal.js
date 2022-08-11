import React, { useState } from "react";
import { Input, Row, Col } from "reactstrap";
import XCancel from "../../../assets/img/x-cancel.svg";

const AddExpenseModal = ({ closeExpenseModal }) => {
  const [formData, setFormData] = useState({});
  const [recurring, setRecurring] = useState(false);
  const [attachment, setAttachment] = useState(false);

  //handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...FormData, [name]: value });
  };

  const handleRecurringCheck = () => {
    setRecurring(!recurring);
  };
  const handleAttachmentCheck = () => {
    setAttachment(!attachment);
  };
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
        <Row className="mt-2 px-4" style={{ overflowY: "scroll" }}>
          <Col xl="12">
            <label className="text-left w-100 mt-2">Select Vendor</label>
            <Input
              className="off-canvas-menu__input py-3 px-3"
              name="vendor"
              type="select"
              id="client"
              onChange={handleInputChange}
            >
              <option value="">Select Vendor</option>
              <option value="1">Faithia Balogun</option>
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
              <option value="">Select Category</option>
              <option value="1">Category 1</option>
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
          {recurring && (
            <Col xl="12">
              <label className="text-left w-100 mt-2">Attachment</label>
              <Input type="file" className="off-canvas-menu__input py-3 px-3" />
            </Col>
          )}

          {attachment && (
            <Col xl="12">
              <label className="text-left w-100 mt-2">Recurring</label>
              <Input type="select" className="off-canvas-menu__input py-3 px-3">
                <option>Select Schedule</option>
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
        <div className="position-absolute bottom-0 w-100">
          <hr />
          <div className="d-flex justify-content-end mt-2 w-100 mb-4 ">
            <button className="py-3 px-4 send" style={{ marginRight: "18px" }}>
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
