import React, { useEffect, useState } from "react";
import { Input, Row, Col } from "reactstrap";
import XCancel from "../../../assets/img/x-cancel.svg";
import createNotification from "../../../utils/Notification";

//redux
import { connect } from "react-redux";
import { createNewVendor } from "../../../redux/actions";
import ButtonLoader from "../../../components/Loaders/ButtonLoader";
import PhoneNumberInput from "../../../components/Inputs/PhoneNumberInput";

const AddVendor = ({
  setShowVendor,
  createNewVendor,
  createNewVendorLoading,
  createNewVendorError,
  message,
}) => {
  const [formData, setFormData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      address: formData.address,
      email: formData.email,
      phone_number: formData.country_code.concat("", formData.phone_number),
    };
    createNewVendor(payload);
  };

  useEffect(() => {
    if (!createNewVendorLoading && message?.length > 0) {
      createNotification("success", message);
      setShowVendor(false);
    } else if (!createNewVendorLoading && createNewVendorError?.length > 0) {
      createNotification("error", createNewVendorError);
    }
  }, [createNewVendorLoading, message, createNewVendorError, setShowVendor]);

  return (
    <div className="off-canvas-menu">
      <div className="off-canvas-menu__content py-2">
        <div className="d-inline-flex w-100 my-3 px-4">
          <div className="add-client-text text-center">
            <h5>Add new vendor</h5>
          </div>
          <img
            onClick={() => setShowVendor(false)}
            className="ms-auto"
            src={XCancel}
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit}>
          <Row className="px-4 mt-2">
            <Col sm="12" md="12" lg="12" xl="12">
              <label className="text-left w-100">Vendor Name</label>
              <Input
                name="name"
                type="text"
                placeholder=""
                className="off-canvas-menu__input py-3 px-3"
                onChange={handleInputChange}
                required
              />
            </Col>
            <Col sm="12" md="12" lg="12" xl="12">
              <label className="text-left w-100">Email Address</label>
              <Input
                name="email"
                type="email"
                placeholder=""
                className="off-canvas-menu__input py-3 px-3"
                onChange={handleInputChange}
              />
            </Col>
            <Col sm="12" md="12" lg="12" xl="12">
              <label className="text-left w-100 mt-4">Phone Number</label>
              <PhoneNumberInput
                name="phone_number"
                placeholder="Phone number"
                className="off-canvas-menu__input py-3 px-3"
                onChange={handleInputChange}
                required
              />
            </Col>
            <Col sm="12" md="12" lg="12" xl="12">
              <label className="text-left w-100 mt-4">Address</label>
              <Input
                name="address"
                type="textarea"
                placeholder=""
                className="off-canvas-menu__input py-3 px-3"
                onChange={handleInputChange}
                required
              />
            </Col>
          </Row>

          <div className="position-absolute bottom-0 w-100">
            <hr />
            <div className="d-flex justify-content-end mt-2 w-100 mb-4 ">
              <button
                className="py-3 px-4 send"
                style={{ marginRight: "18px" }}
                type="submit"
                disabled={createNewVendorLoading}
              >
                {createNewVendorLoading ? <ButtonLoader /> : "Add Vendor"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createNewVendorLoading: state?.vendors?.createVendorLoading,
    createNewVendorError: state?.vendors?.createNewVendorError,
    message: state?.vendors?.message,
  };
};
export default connect(mapStateToProps, { createNewVendor })(AddVendor);
