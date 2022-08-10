import React from "react";
import { Input, Row, Col } from "reactstrap";
import XCancel from "../../../assets/img/x-cancel.svg";

const AddExpenseModal = ({ closeExpenseModal }) => {
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
        <Row className="mt-2 px-4">
          <Col xl="12">
            <label className="text-left w-100 mt-2">Select Vendor</label>
            <Input
              className="off-canvas-menu__input py-3 px-3"
              type="select"
              name="client"
              id="client"
            >
              <option value="">Select Client</option>
            </Input>
          </Col>
          <Col xl="12">
            <label className="text-left w-100 mt-2">Select Category</label>
            <Input
              className="off-canvas-menu__input py-3 px-3"
              type="select"
              name="client"
              id="client"
            >
              <option value="">Select Category</option>
            </Input>
          </Col>
          <Col xl="6">
            <label className="text-left w-100 mt-2">Date</label>
            <Input
              type="date"
              placeholder="14/04/2021"
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
          <Col xl="6">
            <label className="text-left w-100 mt-2">Amount</label>
            <Input
              type="number"
              placeholder="$300"
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
          <Col xl="12">
            <label className="text-left w-100 mt-2">Remarks</label>
            <textarea
              className="w-100 rounded-3 mt-2 canvas-textarea"
              rows="3"
            ></textarea>
          </Col>
          <Col xl="12">
            <div className="my-2  d-inline-flex">
              <input type="checkbox" className="my-auto" />
              <h6 className="fs-6 my-auto ms-2 fw-light">
                Attach file to expense record (.docx, .pdf, .jped)
              </h6>
            </div>
          </Col>
          <Col xl="12">
            <div className="my-2 d-inline-flex">
              <input type="checkbox" className="my-auto" />
              <h6 className="fs-6 my-auto ms-2 fw-light">
                This is a recurring expense (monthly)
              </h6>
            </div>
          </Col>
        </Row>
        <div className="position-absolute bottom-0 w-100">
          <hr />
          <div className="d-flex justify-content-end mt-2 w-100 mb-4 ">
            <button className="py-3 px-4 send" style={{marginRight: "18px"}}>Add Expense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
