import React, { useState } from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

//redux
import { connect } from "react-redux";

const DuplicateInvoiceModal = ({
  showDuplicateInvoiceModal,
  setShowDuplicateInvoiceModal,
  clients,
}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
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
            <Input
              type="text"
              name="old_invoice_number"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-left w-100">Select Client</label>
            <Input
              type="select"
              name="new_client"
              className="bank-select w-100 px-3 py-3 mb-2"
              onChange={handleInputChange}
            >
              <option value="">Select option</option>
              {clients?.map((client) => {
                  return (
                    <option key={client?.id} value={client?.id}>{client?.fullname}</option>
                  )
              })}
            </Input>
          </div>
          <div>
            <label className="text-left w-100">Due Date</label>
            <Input type="date" name="new_due_date" onChange={handleInputChange}/>
          </div>
          <div className="pt-2 pb-3">
            <button type="submit" className="px-5">Make a copy</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    clients: auth?.currentUser?.client_list,
  };
};
export default connect(mapStateToProps, {})(DuplicateInvoiceModal);
