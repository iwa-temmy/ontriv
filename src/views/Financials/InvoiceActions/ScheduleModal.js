import React from "react";
import { Input } from "reactstrap";
import { CenteredModal as Modal } from "../../../components/Modal";

const ScheduleModal = ({ showSchedule, setShowSchedule }) => {
  return (
    <Modal modalState={showSchedule} setModalState={setShowSchedule}>
      <div className="add-client-wrapper text-center ">
        <div className="add-client-text text-center">
          <h3>Set Schedule</h3>
        </div>
        <form className="business-form mt-4">
          <label className="text-left w-100">Repeat Every</label>
          <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
            <option value="">Select option</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
          <label className="text-left w-100">Start Date</label>
          <Input type="date"  name="start_date"/>
          <label className="text-left w-100">End Date</label>
          <Input type="date"  name="end_date"/>
          <div className="mt-2 d-flex">
            <input
              type="checkbox"
              name="recurring"
              className="my-auto"
            />
            <h6 className="fs-6 my-3 ms-2 fw-light">
              Never Expires
            </h6>
          </div>
          <div className="pt-2 pb-3">
            <button className="px-5">Set Schedule</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ScheduleModal;
