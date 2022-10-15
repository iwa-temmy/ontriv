import React, { useState } from "react";
import {
  Container,
  // Row,
  Card,
  // Input,
  Form,
  // Col,
  Button,
} from "reactstrap";
import { TiEye } from "react-icons/ti";
import { IoMdEyeOff } from "react-icons/io";
import logo from "../../assets/img/logo.png";
import { ThreeDots } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { forgotPassword } from "../../redux/actions";
// import createNotification from '../../utils/Notification'

const ChangePassword = ({ loading, forgotPassword }) => {
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const [password, setPassword] = useState("");

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const handleChangePassword = (values) => {
    // const token = localStorage.getItem('ontrivUserToken')
    // const uid = JSON.parse(localStorage.getItem('ontrivCurrentUser')).pk
    console.log(values);
  };

  return (
    <div className="auth">
      <div className="auth-logo">
        <img src={logo} alt="ontriv-logo" width="150px" />
      </div>
      <div className="reset-password">
        <Container>
          <div className="mx-auto reset-password-wrapper">
            <div className="text-center reset-password-text">
              <h3
                className="mb-0"
              >
                Change Password
              </h3>
              <div className="mt-4 mb-5">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "14px",
                    color: "#111317",
                    opacity: "0.8",
                  }}
                >
                  Enter your new desired password
                </p>
              </div>
            </div>
            <Card className="p-5 signin-form-card ">
              <Form onSubmit={handleSubmit(handleChangePassword)}>
                <div className="password-container">
                  <div className="row">
                    {errors.password && (
                      <span className="text-danger text-left">
                        Enter your password
                      </span>
                    )}
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
                        placeholder="Create new password"
                        name="password"
                        {...register("password", {
                          required: true,
                        })}
                        className={`py-3 mb- w-100 ${
                          errors.password ? "border-danger" : ""
                        }`}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    {errors.confirmPassword && (
                      <span className="text-danger text-left">
                        {errors.confirmPassword?.message}
                      </span>
                    )}
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
                        name="confirmPassword"
                        placeholder="Confirm password"
                        className={`py-3  w-100 ${
                          errors.confirmPassword ? "border-danger" : ""
                        }`}
                        {...register("confirmPassword", {
                          required: true,
                          validate: (val) => {
                            if (watch("password") !== val) {
                              return "Passwords do not match";
                            }
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Button className="py-3  mt-1" disabled={loading}>
                    {loading ? (
                      <div className="text-center w-100 align-items-center">
                        <ThreeDots
                          color="white"
                          height={"12px"}
                          wrapperStyle={{ display: "block" }}
                        />
                      </div>
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </div>
              </Form>
            </Card>
            <div className="no-account my-4 py-4 text-center">
              <p
                className="mb-0"
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                Remember Password?
                <span className="register-link">
                  <a
                    href="/auth/login"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Login
                  </a>
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { forgotPasswordError, message, loading } = auth;
  return { forgotPasswordError, message, loading };
};
export default connect(mapStateToProps, { forgotPassword })(ChangePassword);
