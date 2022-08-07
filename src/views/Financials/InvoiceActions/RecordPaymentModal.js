import React from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

const RecordPaymentModal = ({ showRecordPayment, setShowRecordPayment }) => {
  return (
    <Modal modalState={showRecordPayment} setModalState={setShowRecordPayment}>
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Record Payment</h3>
        </div>
        <form className="business-form mt-4">
          <label className="text-left w-100">Payment Date</label>
          <Input type="date"  name="payment_date"/>
          <label className="text-left w-100">Payment Method</label>
          <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
            <option value="">Select option</option>
            <option value="">Stripe</option>
          </select>
          <label className="text-left w-100">Amount Paid</label>
          <input className="bank-select w-100 px-3 py-3 mb-2" />
          <div className="pt-2 pb-3">
            <button className="px-5">Record Payment</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RecordPaymentModal;
