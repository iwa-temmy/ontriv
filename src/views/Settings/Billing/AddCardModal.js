import React, { useState } from "react";

//core components
import { CenteredModal as Modal } from "../../../components/Modal";
import { Form, Input, Col, Row } from "reactstrap";

const AddCardModal = (props) => {
  const [values, setValues] = useState({});

  const { open, setModalState } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formvalues", values);
    const exp_month = values.expiration_date?.split("-")?.[1];
    const exp_year = values.expiration_date?.split("-")?.[0];
    const payload = {
      number: values.number,
      exp_month,
      exp_year,
      cvc: values.cvc,
    };
    console.log("payload", payload);
  };
  return (
    <Modal
      modalState={open}
      setModalState={setModalState}
      title="Add new Card"
      contentPadding="8px"
      showClosebtn={false}
    >
      <Form className="px-4 pt-4" onSubmit={handleSubmit}>
        <Row>
          <Col sm="12" md="12" lg="12" className="my-3">
            <label className="text-left w-100">Card Number</label>
            <Input
              type="text"
              name="number"
              onChange={handleInputChange}
              value={values.number || ""}
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
              className="off-canvas-menu__input py-3"
            />
          </Col>
        </Row>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddCardModal;
