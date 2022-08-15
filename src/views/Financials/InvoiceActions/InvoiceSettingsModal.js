import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";
import { ThreeDots } from "react-loader-spinner";
import createNotification from "../../../utils/Notification";
//Redux
import { connect } from "react-redux";
import {
  getOneInvoiceSetting,
  updateOneInvoiceSetting,
} from "../../../redux/actions";

const InvoiceSettingsModal = ({
  showSettings,
  setShowSettings,
  getOneInvoiceSetting,
  updateOneInvoiceSetting,
  invoiceId,
  oneInvoiceSetting,
  loading,
  message,
  error,
}) => {
  const [formData, setFormData] = useState({});

  //functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOneInvoiceSetting(formData);
  };
  useEffect(() => {
    getOneInvoiceSetting(invoiceId);
  }, [getOneInvoiceSetting, invoiceId]);

  useEffect(() => {
    if (oneInvoiceSetting) {
      setFormData(oneInvoiceSetting);
    } else {
      setFormData({});
    }
  }, [oneInvoiceSetting]);

  useEffect(() => {
    if (!loading && message?.length > 0) {
      createNotification("success", message);
      setShowSettings(false);
    } else if (!loading && error?.length > 0) {
      createNotification("error", error);
    }
  }, [loading, message, setShowSettings, error]);
  return (
    <Modal modalState={showSettings} setModalState={setShowSettings}>
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Invoice Settings</h3>
        </div>
        <form className="business-form mt-4" onSubmit={handleSubmit}>
          <div className="my-2">
            <label className="text-left w-100">Currency</label>
            <select
              name="currency"
              className="bank-select w-100 px-3 py-3 mb-2"
              value={formData?.currency}
              onChange={handleInputChange}
            >
              <option value="">Select option</option>
              <option value="NGN">Nigerian Naira - NGN</option>
              <option value="USD">US Dollar - USD</option>
            </select>
          </div>
          <div className="my-2">
            <label className="text-left w-100">Due Date</label>
            <Input
              name="due_date"
              type="date"
              value={formData?.due_date}
              className="bank-select w-100 px-3 py-3 mb-2"
              onChange={handleInputChange}
            />
          </div>
          <div className="my-2">
            <label className="text-left w-100">Reminder</label>
            <select
              name="reminder"
              className="bank-select w-100 px-3 py-3 mb-2"
              onChange={handleInputChange}
              value={formData?.reminder}
            >
              <option value="">Select option</option>
              <option value="False">Don’t send auto reminder</option>
              <option value="True">Send an auto reminder</option>
            </select>
          </div>

          <div className="pt-2 pb-3">
            <button type="submit" className="px-5">
              {loading ? <ThreeDots
                  color="white"
                  height={"12px"}
                  wrapperStyle={{ display: "block" }}
                /> : "Update Settings" }
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    oneInvoiceSetting: state?.oneInvoice?.invoiceSetting,
    message: state?.oneInvoice?.message,
    loading: state?.oneInvoice?.updateOneInvoiceSettingLoading,
    error: state?.oneInvoice?.updateOneInvoiceSettingError,
  };
};

export default connect(mapStateToProps, {
  getOneInvoiceSetting,
  updateOneInvoiceSetting,
})(InvoiceSettingsModal);
