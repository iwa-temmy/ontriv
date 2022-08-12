import React, { useState } from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

const RecordPaymentModal = ({ showRecordPayment, setShowRecordPayment }) => {
  const [formData, setFormData] = useState({});

  //handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Modal modalState={showRecordPayment} setModalState={setShowRecordPayment}>
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Record Payment</h3>
        </div>
        <form className="business-form mt-4" onSubmit={handleSubmit}>
          <label className="text-left w-100">Payment Date</label>
          <Input
            type="date"
            name="payment_date"
            onChange={handleInputChange}
            required
          />
          <label className="text-left w-100">Payment Method</label>
          <Input
            type="select"
            name="payment_method"
            className="bank-select w-100 px-3 py-3 mb-2"
            onChange={handleInputChange}
            required
          >
            <option value="">Select option</option>
            <option>Bank Transfer</option>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Others</option>
          </Input>
          <label className="text-left w-100">Amount Paid</label>
          <Input
            className="bank-select w-100 px-3 py-3 mb-2"
            name="amount"
            onChange={handleInputChange}
            required
          />
          <div className="pt-2 pb-3">
            <button type="submit" className="px-5">
              Record Payment
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RecordPaymentModal;
