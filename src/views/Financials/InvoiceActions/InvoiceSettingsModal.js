import React from 'react';
import {Button} from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

const InvoiceSettingsModal = ({showSettings,setShowSettings }) => {
  return (
    <Modal modalState={showSettings} setModalState={setShowSettings}>
    <div className="add-client-wrapper text-center ">
      <div className="add-client-text text-center">
        <h3>Invoice Settings</h3>
      </div>
      <form className="business-form mt-4">
        <label className="text-left w-100">Currency</label>
        <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
          <option value="">Select option</option>
          <option value="">Nigerian Naira - NGN</option>
        </select>
        <label className="text-left w-100">Issues DATE</label>
        <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
          <option value="">Select option</option>
          <option value="">23/05/2021</option>
        </select>
        <label className="text-left w-100">Reminder</label>
        <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
          <option value="">Select option</option>
          <option value="">Don’t send auto reminder</option>
        </select>
        <div className="pt-2 pb-3">
          <Button className="px-5">Update Settings</Button>
        </div>
      </form>
    </div>
  </Modal>
  )
}

export default InvoiceSettingsModal