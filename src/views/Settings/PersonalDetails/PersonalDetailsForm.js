import React from "react";
import { Card, Button, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";

const PersonalDetailsForm = ({ handleUpdatePersonalDetails, userDetails, updateUserLoading }) => {
  const { handleSubmit, register } = useForm();
  return (
    <div>
      <Card className="personal-details-form-card">
        <h1>Profile Details</h1>
        <Form onSubmit={handleSubmit(handleUpdatePersonalDetails)}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-100"
            defaultValue={userDetails?.fullname || ""}
            {...register("fullname")}
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-100"
            disabled
            defaultValue={userDetails?.email || ""}
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Phone Number with Country code  '+234'"
            className="w-100"
            defaultValue={userDetails?.phone || ""}
            {...register("phone")}
          />
          <button className="w-50 delete-btn" type="submit">
            {updateUserLoading ? (
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
          </button>
        </Form>
      </Card>
    </div>
  );
};

export default PersonalDetailsForm;
