import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import createNotification from "../../../utils/Notification";
//core component
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

//redux
import { connect } from "react-redux";
import { recordOneInvoicePayment } from "../../../redux/actions";

const RecordPaymentModal = ({
  id,
  totalAmountPaid,
  invoiceTotal,
  showRecordPayment,
  setShowRecordPayment,
  recordOneInvoicePayment,
  recordPaymentLoading,
  recordPaymentMessage,
  recordPaymentError,
}) => {
  const [formData, setFormData] = useState({});

  //handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const data = { ...formData, invoice: id };
    recordOneInvoicePayment(data);
  };
  useEffect(() => {
    if (!recordPaymentLoading && recordPaymentMessage?.length > 0) {
      createNotification("success", recordPaymentMessage);
      setShowRecordPayment(false);
    } else if (!recordPaymentLoading && recordPaymentError?.length > 0) {
      createNotification("error", recordPaymentError);
    }
  }, [
    recordPaymentLoading,
    recordPaymentMessage,
    setShowRecordPayment,
    recordPaymentError,
  ]);
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
            type="text"
            className="bank-select w-100 px-3 py-3 mb-2"
            name="amount_paid"
            onChange={handleInputChange}
            max={invoiceTotal - totalAmountPaid}
            required
          />
          <div className="pt-2 pb-3">
            <button
              type="submit"
              className="px-5"
              disabled={recordPaymentLoading}
            >
              {recordPaymentLoading ? (
                <ThreeDots
                  color="white"
                  height={"12px"}
                  wrapperStyle={{ display: "block" }}
                />
              ) : (
                "Record Payment"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    recordPaymentLoading: state?.oneInvoice?.recordPaymentLoading,
    recordPaymentMessage: state?.oneInvoice?.message?.recordPayment,
    recordPaymentError: state?.oneInvoice?.recordPaymentError,
  };
};
export default connect(mapStateToProps, { recordOneInvoicePayment })(
  RecordPaymentModal
);
