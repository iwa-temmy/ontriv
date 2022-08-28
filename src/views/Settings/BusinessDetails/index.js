import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Row, Col, Card } from "reactstrap";
import bluePlus from "../../../assets/img/blue-plus-bus-icon.svg";
import { ThreeDots } from "react-loader-spinner";

//Notification
import createNotification from "../../../utils/Notification";
//React-hook-form
import { useForm } from "react-hook-form";
//Select Component
import Select from "react-select";
import countryList from "react-select-country-list";

import { connect } from "react-redux";
import {
  getBusinessDetails,
  updateBusinessDetails,
  changeBusinessLogo,
} from "../../../redux/actions";

const BusinessDetails = ({
  businessDetails,
  getBusinessDetails,
  updateBusinessDetails,
  updateBusinessDetailsError,
  updatingStateLoading,
  message,
  changeBusinessLogo,
  changeLogoloading,
  changeLogoError,
}) => {
  const [data, setdata] = useState({});

  //hook-form
  const {
    handleSubmit,
    register,
    // reset,
    // formState: { errors },
  } = useForm();

  //fileInput Ref
  const inputRef = useRef(null);

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setdata({ ...data, country: value });
  };

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };
  const changeLogo = (e) => {
    const formData = new FormData();
    const imageName = e.target.files[0];
    console.log(imageName);
    formData.append("logo", imageName);
    changeBusinessLogo(formData);
  };
  const handleUpdateBusinessDetails = (values) => {
    const payload = {
      ...values,
      country: data?.country?.value,
      business_name: values.business_name || data?.business_name,
      website: values.website || data?.website,
      address: values.address || data?.address,
    };
    if (values.business_name !== "") {
      updateBusinessDetails(payload);
    }else {
      createNotification("error", "Field cannot be Empty");
    }
  };

  const GetBusinessDetails = useCallback(() => {
    getBusinessDetails();
  }, [getBusinessDetails]);

  useEffect(() => {
    //Get Business Details
    GetBusinessDetails();
  }, [GetBusinessDetails]);

  useEffect(() => {
    if (businessDetails && Object.entries(businessDetails)?.length > 0) {
      const countryObject = options.filter(
        (item) => item.value === businessDetails?.country
      )?.[0];
      setdata({ ...businessDetails, country: countryObject });
    }
  }, [businessDetails, options]);

  useEffect(() => {
    // console.log(loginError, message, loading);
    if (updateBusinessDetailsError?.length > 0) {
      createNotification("error", updateBusinessDetailsError);
    }
    if (message?.length > 0 && updatingStateLoading === false) {
      createNotification("success", message);
    }
    if (changeLogoError?.length > 0) {
      createNotification("error", changeLogoError);
    }
    if (message?.length > 0 && changeLogoloading === false) {
      createNotification("success", message);
    }
  }, [
    updateBusinessDetailsError,
    message,
    updatingStateLoading,
    changeLogoloading,
    changeLogoError,
  ]);

  return (
    <div className="business-details mt-4">
      <Row>
        <Col xl="6" className="mb-3">
          <div>
            <Card className="business-details-form-card">
              <h1 className="mb-5">Business Details</h1>
              <form onSubmit={handleSubmit(handleUpdateBusinessDetails)}>
                <input
                  type="text"
                  placeholder="Business name"
                  className="w-100"
                  // name="business_name"
                  defaultValue={data?.business_name || ""}
                  {...register("business_name")}
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="w-100"
                  defaultValue={data?.website || ""}
                  // name="website"
                  {...register("website")}
                />
                <input
                  type="text"
                  placeholder="Office address"
                  className="w-100"
                  // name="address"
                  defaultValue={data?.address}
                  {...register("address")}
                />
                <Select
                  options={options}
                  value={data?.country}
                  name="country"
                  placeholder="Select Country"
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                  className="mb-3"
                  // className={`w-100 ${
                  //   errors.country ? "border-danger" : ""
                  // } mb-3`}
                />
                <button
                  className="delete-btn w-50"
                  type="submit"
                  disabled={updatingStateLoading}
                >
                  {updatingStateLoading ? (
                    <ThreeDots
                      color="white"
                      height={"12px"}
                      wrapperStyle={{ display: "block" }}
                    />
                  ) : (
                    "Update"
                  )}
                </button>
              </form>
            </Card>
          </div>
        </Col>
        <Col xl="6">
          <div>
            <Card className="upload-picture-container mb-4 w-100">
              <h1>Business Logo</h1>
              <div className="d-flex ">
                {changeLogoloading ? (
                  <div>loading!!!!</div>
                ) : data?.logo ? (
                  <img
                    src={data?.logo}
                    className="img-container"
                    style={{ objectFit: "cover" }}
                    alt="business logo"
                  />
                ) : (
                  <div className="img-container" alt="company logo"></div>
                )}

                <div className="upload-text-wrapper">
                  <h1>Upload Logo</h1>
                  <p className="mb-0">Image format with max size of 3mb</p>
                  <button className="d-flex align-items-center bg-transparent border-0">
                    <img src={bluePlus} alt="plus icon" />
                    <h6
                      className="pt-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue"
                      onClick={handleClick}
                    >
                      Upload new Logo
                    </h6>
                  </button>
                  <input
                    type="file"
                    className="w-100 file-upload-button"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={changeLogo}
                  />
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ settings }) => {
  const {
    businessDetails,
    updateBusinessDetailsError,
    updatingStateLoading,
    message,
    changeLogoloading,
    changeLogoError,
  } = settings;
  return {
    businessDetails,
    updateBusinessDetailsError,
    updatingStateLoading,
    message,
    changeLogoloading,
    changeLogoError,
  };
};
export default connect(mapStateToProps, {
  getBusinessDetails,
  updateBusinessDetails,
  changeBusinessLogo,
})(BusinessDetails);
