import React, { useState } from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";
// import ButtonLoader from "../../../components/Loaders/ButtonLoader";

const SendInvoiceModal = ({
  showSendInvoiceModal,
  setshowSendInvoiceModal,
}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Modal
      modalState={showSendInvoiceModal}
      setModalState={setshowSendInvoiceModal}
    >
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Send Invoice</h3>
        </div>
        <form className="business-form mt-4" onSubmit={handleSubmit}>
          <div className="w-100">
            <label className="text-left w-100 py-2 px-3">Email Address</label>
            <Input
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="email address"
            />
          </div>
          <div className="pt-2 pb-3">
            <button type="submit" className="px-5">
              Send
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SendInvoiceModal;
