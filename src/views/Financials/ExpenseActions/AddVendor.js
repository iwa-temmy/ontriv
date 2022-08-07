import React from "react";
import { Input } from "reactstrap";
import XCancel from "../../../assets/img/x-cancel.svg";

const AddVendor = ({setShowVendor}) => {
  return (
    <div className="off-canvas-menu">
      <div className="off-canvas-menu__content px-5 py-2">
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

        <label className="text-left w-100">Vendor Name</label>
        <Input
          type="text"
          placeholder=""
          className="off-canvas-menu__input py-3 px-3"
        />
        <label className="text-left w-100">Email Address</label>
        <Input
          type="email"
          placeholder=""
          className="off-canvas-menu__input py-3 px-3"
        />
        <label className="text-left w-100 mt-4">Phone Number</label>
        <Input
          type="tel"
          placeholder=""
          className="off-canvas-menu__input py-3 px-3"
        />
        <div>
          <label className="text-left w-100 mt-4">Address</label>
          <textarea
            rows="4"
            className="w-100 rounded-3 mt-2 canvas-textarea"
          ></textarea>
        </div>
        <div className="d-inline-flex mt-4 w-100 ">
          <button className="py-3 ms-3 ms-auto px-4 send align-items-center ">
            Add Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVendor;
