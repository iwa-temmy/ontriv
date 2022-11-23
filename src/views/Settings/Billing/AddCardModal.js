import React, { useState, useEffect } from "react";

//core components
import { CenteredModal as Modal } from "../../../components/Modal";
import { Form, Input, Col, Row } from "reactstrap";
import { ThreeDots } from "react-loader-spinner";

//redux
import { connect } from "react-redux";
import { initiateSubscription } from "../../../redux/actions";

//utils
import createNotification from "../../../utils/Notification";

const AddCardModal = (props) => {
  const [values, setValues] = useState({});

  const { open, setModalState, initiateSubscription, loading, error, message } =
    props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exp_month = values.expiration_date?.split("-")?.[1];
    const exp_year = values.expiration_date?.split("-")?.[0];
    const payload = {
      number: values.number,
      exp_month,
      exp_year,
      cvc: values.cvc,
    };
    console.log("payload", payload);
    initiateSubscription(payload);
  };

  useEffect(() => {
    if (!loading && message?.length > 0) {
      createNotification("success", message);
      setModalState(false);
      setValues({});
    } else if (!loading && error?.length > 0) {
      createNotification("error", error);
    }
  }, [loading, message, setModalState, error]);
  return (
    <Modal
      modalState={open}
      setModalState={setModalState}
      title="Add new Card"
      contentPadding="0px"
      showClosebtn={false}
    >
      <Form className="px-4 pt-2 pb-4" onSubmit={handleSubmit}>
        <Row>
          <Col sm="12" md="12" lg="12" className="my-3">
            <label className="text-left w-100">Card Number</label>
            <Input
              type="text"
              name="number"
              onChange={handleInputChange}
              value={values.number || ""}
              maxLength={16}
              placeholder="0000 0000 0000 0000"
              className="off-canvas-menu__input py-3 px-3"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6" md="6" lg="6" className="my-3">
            <label className="text-left w-100">Expiration Date</label>
            <Input
              type="month"
              name="expiration_date"
              onChange={handleInputChange}
              value={values.expiration_date || ""}
              placeholder="MM/YYY"
              className="off-canvas-menu__input py-3"
            />
          </Col>
          <Col sm="6" md="6" lg="6" className="my-3">
            <label className="text-left w-100">Security code</label>
            <Input
              type="text"
              name="cvc"
              onChange={handleInputChange}
              value={values.cvc || ""}
              placeholder="***"
              maxLength={3}
              className="off-canvas-menu__input py-3"
            />
          </Col>
        </Row>
        <div className="d-flex">
          <button className="w-100 modal-button" type="submit">
            {loading ? (
              <ThreeDots
                color="white"
                height={"12px"}
                wrapperStyle={{ display: "block" }}
              />
            ) : (
              "Add Card"
            )}
          </button>
        </div>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state?.subscription?.error?.initiateSubscription,
    loading: state?.subscription?.loading?.initiateSubscription,
    message: state?.subscription?.message?.initiateSubscription,
  };
};
export default connect(mapStateToProps, { initiateSubscription })(AddCardModal);
