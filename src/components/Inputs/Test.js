import React, { useState } from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import { CenteredModal } from "../Modal";
import { GoAlert } from "react-icons/go";

const Test = () => {
  const [formData, setForData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const ModalOpen = () => {
    setOpenModal(true);
  };
  const handlePhoneInputChange = (e, countryCode) => {
    const { name, value } = e.target;

    setForData({ ...formData, [name]: countryCode.concat("", value) });
  };
  return (
    <div>
      <PhoneNumberInput onChange={handlePhoneInputChange} />
      <button onClick={ModalOpen}>Open</button>

      <CenteredModal
        modalState={openModal}
        setModalState={setOpenModal}
        size="sm"
      >
        <div className="text-center">
          <GoAlert size="50px" color="red" />
          <p className="mt-2 mb-4">
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger">Delete</button>
            <button
              className="btn cancel-btn"
              style={{
                backgroundColor: "#ccc",
                color: "#fff",
                marginLeft: "12px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </CenteredModal>
    </div>
  );
};

export default Test;
