import React, { useEffect, useState } from "react";

//core components
import { CenteredModal as Modal } from "../../../../components/Modal";
import { Input } from "reactstrap";

//icons
import checkedIcon from "../../../../assets/img/checked.svg";

const CancelPlanModal = (props) => {
  const { open, setModalState, toggleCancelSubscriptionModal } = props;

  const [values, setValues] = useState({});
  const [approval, setApproval] = useState(false);
  const [view, setView] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };

  const handleCheckInput = () => {
    setApproval(!approval);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setView(2);
  };

  const handleCancelSubscription = () => {
    console.log({ approval, reason: values.reason });
    setView(3);
  };

  const handleCloseModal = () => {
    toggleCancelSubscriptionModal();
    setView(1);
  };

  useEffect(() => {
    if (!open && view === 2) {
      setTimeout(() => {
        setView(1);
      }, 2000);
    }
  }, [open, view]);
  return (
    <Modal modalState={open} setModalState={setModalState}>
      <div className="cancel-subcription-modal">
        {view === 1 ? (
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div
              style={{
                backgroundColor: "#E8F7FF",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}
            >
              😢
            </div>
            <h3>Sophie, before you go...</h3>
            <p className="text-center">
              I'm sorry you're leaving us, would you be so kind to tell us why?
            </p>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <Input
                type="textarea"
                rows="4"
                name="reason"
                style={{ width: "100%" }}
                value={values.reason}
                onChange={handleInputChange}
              />
              <div className="d-flex align-items-center flex-column ">
                <button
                  className="w-50 mt-3 mb-2  button button__action-button1"
                  type="submit"
                >
                  Continue
                </button>
                <button
                  className="w-50 my-2 button button__action-button2"
                  onClick={handleCloseModal}
                >
                  Don't cancel
                </button>
              </div>
            </form>
          </div>
        ) : view === 2 ? (
          <div className="mt-5">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="text-center">Confirm your cancellation</h3>
              <p className="text-center px-2">
                Once you cancel your Ontriv plan, you might have to pay a higher
                price to rejoin Ontriv.
              </p>
            </div>
            <form onSubmit={handleCancelSubscription}>
              <div className="d-flex my-3 ">
                <div className="input-check">
                  <input
                    type="checkbox"
                    id="approval"
                    name="approval"
                    value="approval"
                    onChange={handleCheckInput}
                    className="mb-0 border-dark"
                    style={{
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: "12px" }}>
                    I understand that Ontriv's price may change in the future,
                    and I will have access to my account until the current
                    payment expires.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column w-100">
                <button
                  className="w-50  mt-3 mb-2 button button__action-button1"
                  type="submit"
                >
                  Yes, Continue
                </button>
                <button
                  className="w-50 my-2 button button__action-button2"
                  onClick={handleCloseModal}
                >
                  Don't Cancel
                </button>
              </div>
            </form>
          </div>
        ) : view === 3 ? (
          <div className="d-flex flex-column align-items-center justify-content-center py-3">
            <img src={checkedIcon} width="100px" />
            <h3 className="my-3">Successful</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};

export default CancelPlanModal;
