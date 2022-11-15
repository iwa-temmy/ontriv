import React from "react";
import { Modal } from "reactstrap";
import { TiTimes } from "react-icons/ti";

export const CenteredModal = ({
  className,
  modalState,
  setModalState,
  size,
  children,
  title,
  contentPadding,
  showClosebtn,
}) => {
  // const [modalState, setModalState] = useState(true);
  const toggle = () => {
    setModalState(!modalState);
  };

  return (
    <Modal
      isOpen={modalState}
      toggle={toggle}
      modalClassName="cstm-modal"
      size={size}
      className={`${className} modal-dialog-centered`}
    >
      <div style={{ padding: contentPadding ? contentPadding : "32px 49px" }}>
        {!showClosebtn ? null : (
          <div className="modal-cstm-button text-center" onClick={toggle}>
            <TiTimes size="25px" />
          </div>
        )}

        <p className="text-uppercase px-4 py-3 modal-title">{title}</p>
        {children}
      </div>
    </Modal>
  );
};
export const InvoicePreviewModal = ({
  className,
  modalState,
  toggleModalState,
  handleClose,
  size,
  children,
}) => {
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal
        isOpen={modalState}
        toggle={toggleModalState}
        modalClassName="cstm-modal"
        size={size}
        className={`${className} modal-dialog-centered`}
      >
        <div className="modal-cstm-button text-center" onClick={handleClose}>
          <TiTimes size="25px" />
        </div>
        {children}
      </Modal>
    </div>
  );
};
export const TopRightModal = ({
  modalState,
  setModalState,
  size,
  children,
}) => {
  const toggle = () => {
    setModalState(!modalState);
  };

  if (modalState === false) {
    return null;
  }

  // const [show,setShow]=useState(modalState);

  return (
    <div className="top-right-modal" onClick={toggle}>
      <div className="top-right-modal-content">
        <div className="top-right-modal-body">{children}</div>
      </div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      {/* <Modal
                isOpen={modalState}
                toggle={toggle}
                modalClassName='modal-dialog-topRight'
                size={size}
                className={`modal-dialog-topRight`} >
                {children}
            </Modal> */}
    </div>
  );
};
