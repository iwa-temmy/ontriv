import React from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

const DuplicateInvoiceModal = ({
  showDuplicateInvoiceModal,
  setShowDuplicateInvoiceModal,
}) => {
  return (
    <Modal
      modalState={showDuplicateInvoiceModal}
      setModalState={setShowDuplicateInvoiceModal}
    >
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Duplicate Invoice</h3>
        </div>
        <form className="business-form mt-4">
          <div className="w-50">
            <label className="text-left w-100">Invoice number</label>
            <Input type="text" name="invoice_number" />
          </div>
          <div>
            <label className="text-left w-100">Select Client</label>
            <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
              <option value="">Select option</option>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
          <div>
            <label className="text-left w-100">Due Date</label>
            <Input type="date" name="due_date" />
          </div>
          <div className="pt-2 pb-3">
            <button className="px-5">Make a copy</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DuplicateInvoiceModal;
