import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";
import ButtonLoader from "../../../components/Loaders/ButtonLoader";
import createNotification from "../../../utils/Notification";

//redux
import { connect } from "react-redux";
import { duplicateOneInvoice } from "../../../redux/actions";

const DuplicateInvoiceModal = ({
  showDuplicateInvoiceModal,
  setShowDuplicateInvoiceModal,
  clients,
  duplicateOneInvoice,
  duplicateInvoiceLoading,
  duplicateInvoiceError,
  duplicateInvoiceMessage,
}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      extra_details_for_duplicate: formData,
    };
    duplicateOneInvoice(payload);
  };

  useEffect(() => {
    if (!duplicateInvoiceLoading && duplicateInvoiceMessage?.length > 0) {
      createNotification("success", duplicateInvoiceMessage);
      setShowDuplicateInvoiceModal(false);
    } else if (!duplicateInvoiceLoading && duplicateInvoiceError?.length > 0) {
      createNotification("error", duplicateInvoiceError);
    }
  }, [
    duplicateInvoiceMessage,
    setShowDuplicateInvoiceModal,
    duplicateInvoiceLoading,
    duplicateInvoiceError,
  ]);
  return (
    <Modal
      modalState={showDuplicateInvoiceModal}
      setModalState={setShowDuplicateInvoiceModal}
    >
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Duplicate Invoice</h3>
        </div>
        <form className="business-form mt-4" onSubmit={handleSubmit}>
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
                  <option key={client?.id} value={client?.id}>
                    {client?.fullname}
                  </option>
                );
              })}
            </Input>
          </div>
          <div>
            <label className="text-left w-100">Due Date</label>
            <Input
              type="date"
              name="new_due_date"
              onChange={handleInputChange}
            />
          </div>
          <div className="pt-2 pb-3">
            <button
              type="submit"
              className="px-5"
              disabled={duplicateInvoiceLoading}
            >
              {duplicateInvoiceLoading ? <ButtonLoader /> : "Make a copy"}
            </button>
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
    duplicateInvoiceLoading: state?.oneInvoice?.duplicateInvoiceLoading,
    duplicateInvoiceError: state?.oneInvoice?.duplicateInvoiceError,
    duplicateInvoiceMessage: state?.oneInvoice?.message?.duplicateInvoice,
  };
};
export default connect(mapStateToProps, { duplicateOneInvoice })(
  DuplicateInvoiceModal
);
