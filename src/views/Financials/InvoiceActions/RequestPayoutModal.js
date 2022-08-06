import React, { useState } from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

const RequestPayoutModal = ({ showRequestPayout, setShowRequestPayout }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <Modal modalState={showRequestPayout} setModalState={setShowRequestPayout}>
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Request Payout</h3>
        </div>
        <form className="business-form mt-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="text-left w-100">Amount</label>
            <Input type="text" name="amount" onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-left w-100">Bank Name</label>
            <select
              name="bank_name"
              className="bank-select w-100 px-3 py-3 mb-2"
              onChange={handleInputChange}
            >
              <option value="">Select bank</option>
              <option value="zenith bank">Zenith</option>
            </select>
          </div>
          <div>
            <label className="text-left w-100">Account Number</label>
            <Input
              name="account_number"
              onChange={handleInputChange}
              className="bank-select w-100 px-3 py-3 mb-2"
            />
          </div>
          <div>
            <label className="text-left w-100">Account Name</label>
            <Input
              name="account_name"
              onChange={handleInputChange}
              className="bank-select w-100 px-3 py-3 mb-2"
            />
          </div>

          <div className="pt-2 pb-3">
            <button className="px-5" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RequestPayoutModal;
