import React from 'react';
import { CenteredModal } from '.';
import { GoAlert } from "react-icons/go";

const DeleteModal = () => {
  return (
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
  )
}

export default DeleteModal;