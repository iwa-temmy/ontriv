import React, { useState, useEffect } from "react";
import { Row, Col, Card, Input, Button, Form } from "reactstrap";
import { ThreeDots } from "react-loader-spinner";
import bluePlus from "../../../assets/img/blue-plus-bus-icon.svg";
import { TiEye } from "react-icons/ti";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import createNotification from "../../../utils/Notification";
import { resetPassword } from "../../../redux/actions";

//redux
import { connect } from "react-redux";

const PersonalDetails = ({
  currentUser,
  message,
  resetPasswordError,
  loading,
  resetPassword,
}) => {
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  //Handle Input Change
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  //Handle Update Password
  const handleUpdatePassword = (data) => {
    console.log(data);
    if (data?.new_password1 !== data?.new_password2) {
      createNotification("error", "Passwords doesn't match");
    } else {
      resetPassword(data);
      if (message?.length > 0 && loading === false) {
        reset();
      }
    }
  };

  useEffect(() => {
    // console.log(loginError, message, loading);
    if (resetPasswordError?.length > 0) {
      createNotification("error", resetPasswordError);
    }
    if (message?.length > 0 && loading === false) {
      createNotification("success", message);
    }
  }, [resetPasswordError, message, loading]);
  return (
    <div className="personal-details mt-4">
      <Row>
        <Col xl="6" className="mt-3 mb-3">
          <Card className="upload-picture-container mb-4">
            <div className="d-flex ">
              <div className="img-container"></div>
              <div className="upload-text-wrapper">
                <h1>Upload Profile Picture</h1>
                <p className="mb-0">Image format with max size of 3mb</p>
                <div className="d-flex">
                  <img src={bluePlus} alt="" />
                  <h6 className="pt-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue">
                    Upload new photo
                  </h6>
                  {/* <input type='file' className='w-100 file-upload-button' /> */}
                </div>
              </div>
            </div>
          </Card>
          <div>
            <Card className="personal-details-form-card">
              <h1>Profile Details</h1>
              <Input
                type="text"
                placeholder="First name"
                className=""
                defaultValue={currentUser?.full_name}
              />
              <Input
                type="email"
                placeholder="Email address"
                className=""
                defaultValue={currentUser?.email}
              />
              <Input type="email" placeholder="Phone Number" className="" />
              <Button className="w-50">Update</Button>
            </Card>
          </div>
        </Col>
        <Col xl="6" className="mb-2">
          <div>
            <Card className="personal-details-form-card reset-password-form">
              <h1>Reset Password</h1>
              <Form onSubmit={handleSubmit(handleUpdatePassword)}>
                <div className="password-container">
                  <div className="password-icon">
                    {inputType1 === "password" ? (
                      <TiEye
                        color="#E5E9F2"
                        size="30px"
                        onClick={() => {
                          setInputType1("text");
                        }}
                      />
                    ) : (
                      <IoMdEyeOff
                        color="#000"
                        size="25px"
                        onClick={() => {
                          setInputType1("password");
                        }}
                      />
                    )}
                  </div>
                  <input
                    type={inputType1}
                    name="new_password1"
                    placeholder="Create password"
                    className={`w-100 ${
                      errors.new_password1 ? "border-danger" : ""
                    }`}
                    {...register("new_password1", {
                        required: true,
                    })}
                  />
                  {errors.new_password1 && (
                    <span className="text-danger text-left">
                      Password is required
                    </span>
                  )}
                </div>

                <div className="password-container">
                  <div className="password-icon">
                    {inputType2 === "password" ? (
                      <TiEye
                        color="#E5E9F2"
                        size="30px"
                        onClick={() => {
                          setInputType2("text");
                        }}
                      />
                    ) : (
                      <IoMdEyeOff
                        color="#000"
                        size="25px"
                        onClick={() => {
                          setInputType2("password");
                        }}
                      />
                    )}
                  </div>
                  <input
                    type={inputType2}
                    placeholder="Confirm password"
                    name="new_password2"
                    className={`w-100 ${
                      errors.new_password2 ? "border-danger" : ""
                    }`}
                    {...register("new_password2", {
                      required: true,
                    })}
                  />
                  {errors.new_password2 && (
                    <span className="text-danger text-left">
                      Confirm Password is required
                    </span>
                  )}
                </div>
                <Button className="w-50" type="submit" disabled={loading}>
                  {loading ? (
                    <div className="text-center w-100 align-items-center">
                      <ThreeDots
                        color="white"
                        height={"12px"}
                        wrapperStyle={{ display: "block" }}
                      />
                    </div>
                  ) : (
                    "Update"
                  )}
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ auth, settings }) => {
  const { currentUser } = auth;
  const { message, resetPasswordError, loading } = settings;
  return {
    currentUser,
    message,
    resetPasswordError,
    loading,
  };
};
export default connect(mapStateToProps, { resetPassword })(PersonalDetails);
