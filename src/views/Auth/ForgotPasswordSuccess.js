import React from "react";
import {
  Container,
  // Row,
  Card,
  // Input,
  Form,
  // Col,
  Button,
} from "reactstrap";
import logo from "../../assets/img/logo.png";

const ForgotPasswordSuccess = () => {
  return (
    <div className="auth">
      <div className="auth-logo">
        <img src={logo} alt="ontriv-logo" width="150px" />
      </div>
      <div className="reset-password">
        <Container>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "500px" }}
          >
            <div className="text-center reset-password-text">
              <h3
                className="mb-0"
                style={{
                  fontSize: "34px",
                  opacity: "0.8",
                }}
              >
                We've sent a link to reset your password
              </h3>
              <div className="mt-4 mb-5">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "14px",
                    color: "#17151E",
                    opacity: "0.8",
                  }}
                >
                  Check your inbox to log in. If you still have trouble,
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "14px",
                    color: "#0B6BFF",
                    opacity: "0.8",
                    fontWeight: 500
                  }}
                >
                  contact support
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ForgotPasswordSuccess;
