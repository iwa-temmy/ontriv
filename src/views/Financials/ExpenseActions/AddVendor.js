import React from "react";
import { Input, Row, Col } from "reactstrap";
import XCancel from "../../../assets/img/x-cancel.svg";

const AddVendor = ({ setShowVendor }) => {
  return (
    <div className="off-canvas-menu">
      <div className="off-canvas-menu__content py-2">
        <div className="d-inline-flex w-100">
          <div className="add-client-text text-center">
            <h5>Add new vendor</h5>
          </div>
          <img
            onClick={() => setShowVendor(false)}
            className="ms-auto"
            src={XCancel}
            alt=""
          />
        </div>
        <Row className="px-4">
          <Col sm="12" md="12" lg="12" xl="12">
            <label className="text-left w-100">Vendor Name</label>
            <Input
              type="text"
              placeholder=""
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
          <Col sm="12" md="12" lg="12" xl="12">
            <label className="text-left w-100">Email Address</label>
            <Input
              type="email"
              placeholder=""
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
          <Col>
            <label className="text-left w-100 mt-4">Phone Number</label>
            <Input
              type="tel"
              placeholder=""
              className="off-canvas-menu__input py-3 px-3"
            />
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

export default AddVendor;
