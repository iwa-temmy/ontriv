import { useState, useEffect, useCallback } from "react";
import {
  Row,
  Col,
  Card,
  //  Button
} from "reactstrap";
import "react-calendar/dist/Calendar.css";
import businessIcon from "../../assets/img/bussiness-icon.svg";
import blankImage from "../../assets/img/blank-img.png";
import bluePlus from "../../assets/img/blue-plus-bus-icon.svg";
import greyPlus from "../../assets/img/grey-plus-icon.svg";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import instagram from "../../assets/img/instagram.svg";
import linkedin from "../../assets/img/linkedin.svg";
// import blueArrow from "../../assets/img/forward-blue-arrow.svg";
import axios from "../../utils/Axios";
import notification from "../../utils/Notification";
import { ThreeDots } from "react-loader-spinner";
import createNotification from "../../utils/Notification";

//redux
import { connect } from "react-redux";
import {
  changeBusinessLogo,
  getBusinessDetails,
  updateBusinessDetails,
} from "../../redux/actions";

const SetUpBussiness = (props) => {
  const [logo, setLogo] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    businessDetails,
    getBusinessDetails,
    updateBusinessDetails,
    updateBusinessDetailsError,
    updatingStateLoading,
    message,
    changeBusinessLogo,
    changeLogoloading,
    changeLogoError,
  } = props;
  const handlePictureUpload = (e) => {
    const formData = new FormData();
    const imageName = e.target.files[0];
    console.log(imageName);
    formData.append("logo", imageName);
    changeBusinessLogo(formData);
  };

  const handleBusinessSetup = async () => {
    setLoading(true);
    try {
      if (address && logo) {
        const user = JSON.parse(localStorage.getItem("ontrivCurrentUser"));
        const { country } = user;
        const formData = new FormData();
        formData.append("address", address);
        formData.append("logo", logo);
        formData.append("country", country);
        const response = await axios.patch(
          "/business/api/v1/business/",
          formData
        );
        setLoading(false);
        console.log(response);
        notification("success", "Business setup succesful");
        window.location.href = "/overview";
      }
    } catch (err) {
      setLoading(false);
      console.log(err.response);
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
    <div className="dashboard dashboard-wrapper">
      <Row>
        <Col md="16" sm="16" lg="16" xxl="16" className="mb-3">
          <div>
            <Row>
              <Col md="16">
                <div className="dashboard-analytics">
                  <Card className="analytics-card px-3 py-0">
                    <div className="">
                      <Row>
                        <Col
                          md="12"
                          lg="12"
                          xl="6"
                          className="business__right-section px-5"
                        >
                          <Row className="mb-5 pr-5">
                            <Col md="3">
                              <img src={businessIcon} alt="" />
                            </Col>
                            <Col md="9">
                              <h6 className="subscription__card__content__modal__title text-left">
                                Set up business Information
                              </h6>
                              {/* <h6 className='subscription__card__content__modal__subtext text-left'>Set up business
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                  </h6> */}
                            </Col>
                          </Row>
                          <Row className="mb-5">
                            <label
                              className="business__right-section__image-upload-placeholder px-3 py-3"
                              for="logo"
                            >
                              <Row>
                                <Col md="4" className="">
                                  {changeLogoloading ? (
                                    <div>Loading!!!</div>
                                  ) : businessDetails?.logo ? (
                                    <img
                                      src={businessDetails?.logo}
                                      className="img-container"
                                      style={{
                                        objectFit: "contain",
                                        width: "111px",
                                        height: "100%",
                                      }}
                                      alt="business_logo"
                                    />
                                  ) : (
                                    <img src={blankImage} alt="" />
                                  )}
                                </Col>
                                <Col md="8" className="md-8">
                                  <h6 className="business__right-section__image-upload-placeholder__title text-left">
                                    Upload Logo Here
                                  </h6>
                                  <h6 className="subscription__card__content__modal__subtext text-left ">
                                    Image format with max size of 3mb
                                  </h6>
                                  <div
                                    className="d-flex align-items-center"
                                    role="button"
                                  >
                                    <img src={bluePlus} alt="" />
                                    <label
                                      for="logo"
                                      className="pt-2 pb-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue"
                                    >
                                      Upload new photo
                                    </label>
                                    <input
                                      type="file"
                                      className="d-none"
                                      id="logo"
                                      htmlFor="logo"
                                      onChange={(e) => {
                                        handlePictureUpload(e);
                                      }}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </label>
                          </Row>
                        </Col>
                        <Col md="12" lg="12" xl="6" className="px-2 pt-2 pb-5">
                          <div className="px-5">
                            <h6 className="mt-5 business__address-title">
                              Enter Business address
                            </h6>
                            <input
                              className="business__left-section__input w-100 py-3 mt-4 px-3"
                              placeholder="Address"
                              type="text"
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                            />
                            <h6 className="mt-5 business__address-title">
                              Add social media accounts
                            </h6>
                            <Row>
                              <Col md="6">
                                <div className="business__left-section__social-container d-flex px-3 py-3">
                                  <img src={instagram} alt="Instagram icon" />
                                  <h6 className="business__left-section__social-container__text ms-2 mt-2">
                                    Instagram
                                  </h6>
                                  <img
                                    src={greyPlus}
                                    style={{ width: "60px" }}
                                    className="ms-auto"
                                    alt="plus icon"
                                  />
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="business__left-section__social-container d-flex px-3 py-3">
                                  <img src={facebook} alt="Facebook icon" />
                                  <h6 className="business__left-section__social-container__text ms-2 mt-2">
                                    Facebook
                                  </h6>
                                  <img
                                    src={greyPlus}
                                    style={{ width: "60px" }}
                                    className="ms-auto"
                                    alt="plus icon"
                                  />
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="business__left-section__social-container d-flex align-items-center px-3 py-3 mt-4">
                                  <img src={twitter} alt="Twitter icon" />
                                  <h6 className="business__left-section__social-container__text ms-2 mt-2">
                                    Twitter
                                  </h6>
                                  <img
                                    src={greyPlus}
                                    style={{ width: "60px" }}
                                    className="ms-auto"
                                    alt="plus icon"
                                  />
                                </div>
                              </Col>
                              <Col md="6">
                                <div className="business__left-section__social-container d-flex px-3 py-3 mt-4">
                                  <img src={linkedin} alt="LinkedIn icon" />
                                  <h6 className="business__left-section__social-container__text ms-2 mt-2">
                                    Linkedin
                                  </h6>
                                  <img
                                    src={greyPlus}
                                    style={{ width: "60px" }}
                                    className="ms-auto"
                                    alt="plus icon"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="px-4">
                              <button
                                disabled={loading}
                                onClick={handleBusinessSetup}
                                // onClick={() => togglePostState()}
                                className="mt-5 mb-4 py-3 business__left-section__done-btn"
                                style={{}}
                              >
                                {loading ? (
                                  <div className="text-center w-100 align-items-center">
                                    <ThreeDots
                                      color="white"
                                      height={"12px"}
                                      wrapperStyle={{ display: "block" }}
                                    />
                                  </div>
                                ) : (
                                  <span className="mx-auto w-100 text-center">
                                    Done
                                  </span>
                                )}
                              </button>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
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
  changeBusinessLogo,
  getBusinessDetails,
  updateBusinessDetails,
})(SetUpBussiness);
