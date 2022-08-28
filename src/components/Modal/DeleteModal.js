import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { CenteredModal } from ".";
import ErrorIcon from "../../assets/img/error.svg";

const DeleteModal = (props) => {
  const { openModal, setOpenModal, deleteAction, deleteloading } = props;

  const closeDeleteModal = () => {
    setOpenModal(false);
  };
  return (
    <CenteredModal
      modalState={openModal}
      setModalState={setOpenModal}
      size="sm"  
    >
      <div className="delete-modal text-center">
        <img src={ErrorIcon} alt="error icons" width="100px" />
        <h4 className="mt-4">Are you sure?</h4>
        <p className="delete-modal-subtext mt-4 mb-4">
          Do you really want to delete these records? This process cannot be
          undone.
        </p>
        <div className="d-flex justify-content-center">
          <button className="delete-btn w-100" onClick={deleteAction}>
            {deleteloading ? (
              <div className="text-center w-100 align-items-center">
                <ThreeDots
                  color="white"
                  height={"12px"}
                  wrapperStyle={{ display: "block" }}
                />
              </div>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </CenteredModal>
  );
};

export default DeleteModal;
