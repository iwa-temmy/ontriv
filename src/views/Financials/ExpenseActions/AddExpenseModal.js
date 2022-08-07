import React from "react";
import { Input, Row, Col } from "reactstrap";
import Select from "react-select";
import XCancel from "../../../assets/img/x-cancel.svg";
import SelectUserImg from "../../../assets/img/select-user-example-img.png";

const AddExpenseModal = ({ closeExpenseModal }) => {
  const options = [
    {
      value: "chocolate",
      label: (
        <div>
          <img
            src={SelectUserImg}
            height="30px"
            width="30px"
            className="me-3"
            alt=""
          />
          USER 1{" "}
        </div>
      ),
    },
    {
      value: "strawberry",
      label: (
        <div>
          <img
            src={SelectUserImg}
            height="30px"
            width="30px"
            className="me-3"
            alt=""
          />
          USER 2{" "}
        </div>
      ),
    },
    {
      value: "vanilla",
      label: (
        <div>
          <img
            src={SelectUserImg}
            height="30px"
            width="30px"
            className="me-3"
            alt=""
          />
          USER 3{" "}
        </div>
      ),
    },
  ];
  return (
    <div className="off-canvas-menu">
      <div className="off-canvas-menu__content px-5 py-2">
        <div className="d-inline-flex w-100">
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

        <label className="text-left w-100">Select Vendor</label>
        <Select name="name" value="strawberry" options={options} />
        <label className="text-left w-100 mt-4">Select Category</label>
        <Select name="name" value="strawberry" options={options} />
        <Row className="mt-4">
          <Col xl="6">
            <label className="text-left w-100">Date</label>
            <Input
              type="date"
              placeholder="14/04/2021"
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
          <Col xl="6">
            <label className="text-left w-100">Amount</label>
            <Input
              type="number"
              placeholder="$300"
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
        </Row>
        <label className="text-left w-100 mt-4">Select Category</label>
        <select name="" className="off-canvas-menu__input px-4 py-2" id="">
          <option value="">Monthly</option>
        </select>
        <div>
          <label className="text-left w-100 mt-4">Remarks</label>
          <textarea className="w-100 rounded-3 mt-2 canvas-textarea"></textarea>
        </div>
        <div className="mt-4 d-inline-flex">
          <input type="checkbox" className="my-auto" />
          <h6 className="fs-6 my-auto ms-2 fw-light">
            Attach file to expense record (.docx, .pdf, .jped)
          </h6>
        </div>
        <div className="mt-2 mb-5 d-inline-flex">
          <input type="checkbox" className="my-auto" />
          <h6 className="fs-6 my-auto ms-2 fw-light">
            This is a recurring expense (monthly)
          </h6>
        </div>
        <div className="d-inline-flex mt-2 w-100 mb-4">
          <div className="py-3 ms-3 ms-auto px-4 send align-items-center ">
            <h6 className="mb-0">Add Expense</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
