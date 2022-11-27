import React, { useEffect, useState } from "react";
import { HiUser, HiPlusCircle } from "react-icons/hi";
import { CenteredModal as Modal } from "../../components/Modal";
import { ThreeDots } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createClient, createTag } from "../../redux/actions";
import createNotification from "../../utils/Notification";

import { HiOutlineClipboardCopy } from "react-icons/hi";
// import Select from "react-select";
// import countryList from 'react-select-country-list'

import { GenerateString, copierHelper } from "../../utils/helper";

const businessCategory = [
  "Agriculture",
  "Arts",
  "Beauty & Lifestyle",
  "Business services",
  "Coaching",
  "Construction",
  "Consulting",
  "Education",
  "Engineering",
  "Entertainment",
  "Events",
  "Financial services",
  "Health & Fitness",
  "Hotels & Hospitality",
  "HR & Recruiting",
  "Legal services",
  "Manufacturing",
  "Marketing",
  "Non-profit",
  "Pet services",
  "Photography",
  "Retail",
  "Technology",
  "Travel & Tourism",
  "Real estate",
  "Others",
];

const AddNewClient = ({
  addState,
  createClient,
  setAddState,
  creationError,
  message,
  loading,
}) => {
  // const options = useMemo(() => countryList().getData(), [])
  const [uploadedImage, setUploadedImage] = useState(null);
  const [profile_image, setProfileImage] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handlePictureUpload = (e) => {
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };

  const {
    handleSubmit,
    register,
    // control,
    formState: { errors },
  } = useForm();

  const handleGeneratePassword = () => {
    let generatedString = GenerateString(7);
    setPassword(generatedString);
  };
  const addClient = (values) => {
    console.log({ ...values, logo: profile_image });
    if (profile_image) {
      const formData = new FormData();
      formData.append("fullname", values?.fullname);
      formData.append("email", values?.email);
      formData.append("password", values.password);
      formData.append("business_category", values?.business_category);
      formData.append("logo", profile_image);

      console.log(formData);

      createClient(formData);
    } else {
      setError("Upload client logo");
    }
  };

  useEffect(() => {
    console.log(creationError, message, loading);
    if (creationError.length > 0) {
      createNotification("error", creationError);
    }
    if (message.length > 0) {
      createNotification("info", message);
    }
  }, [creationError, message, loading]);

  return (
    <Modal modalState={addState} setModalState={setAddState}>
      <div className="add-client-wrapper text-center ">
        <div className="text-center user-icon-container ">
          <HiUser className=" text-center" color="#49A8F8" size="45px" />
        </div>
        <div className="add-client-text text-center mb-4">
          <h3>Add new client</h3>
        </div>
        <form
          className="business-form text-left"
          onSubmit={handleSubmit(addClient)}
          autocomplete="off"
        >
          {errors.fullname && (
            <span className="text-danger text-left">Enter client name</span>
          )}
          <input
            type="text"
            name="fullname"
            placeholder="Client Name"
            className={`w-100 ${errors.fullname ? "border-danger" : ""}`}
            {...register("fullname", {
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-danger text-left">Enter a valid Email</span>
          )}
          <input
            type="email"
            name="email"
            autocomplete="new-password"
            placeholder="Email Address"
            className={`w-100 ${errors.email ? "border-danger" : ""}`}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email",
              },
            })}
          />

          {errors.country && (
            <span className="text-danger text-left">
              Select Business category
            </span>
          )}

          {/* <Controller
            control={control}
            // defaultValue={options.map(c => c.value)}
            name='country'
            className={`w-100 ${errors.country ? 'border-danger' : ''} mb-3`}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                placeholder='Country'
                inputRef={ref}
                // value={options.filter(c => value.includes(c.value))}
                className={`w-100 ${
                  errors.country ? 'border-danger' : ''
                } mb-3`}
                onChange={(e, val) => {
                  onChange(e.value)
                }}
                options={options}
              />
            )} */}
          {/* {...register('country', {
              required: true
            })}
          /> */}
          <select
            className="w-100"
            {...register("business_category", {
              required: true,
            })}
          >
            <option value="">Business category</option>
            {businessCategory.map((el) => (
              <option value={el}>{el}</option>
            ))}

            {/* <option>Testing</option> */}
          </select>

          {errors.password && (
            <span className="text-danger text-left">Enter password</span>
          )}
          <div
            className="d-flex flex-row align-items-center justify-content-between"
            style={{ flex: 1 }}
          >
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="mb-0"
              value={password}
              disabled
            />
            <button
              type="button"
              onClick={handleGeneratePassword}
              className="ml-2"
            >
              Generate
            </button>
          </div>
          <div className="d-flex justify-content-start mt-1 mb-3">
            <span
          className="text-5xl"
              onClick={() => copierHelper(password, "Password")}
            >
              <HiOutlineClipboardCopy />
              Copy Password
            </span>
          </div>

          <div className="mb-2 d-flex justify-content-end">
            <div
              className="img-holder"
              style={{
                marginRight: "30px",
              }}
            >
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="client-logo"
                  className="add-client-logo"
                />
              )}
            </div>
            <div>
              <div
                className="d-flex justify-content-center align-items-center"
                role="button"
              >
                <HiPlusCircle color="#2062F4" size="20" />
                <div role="button">
                  <label
                    role="button"
                    for="logo"
                    className="mb-0 cursor-pointer"
                    style={{
                      fontWeight: " 700",
                      fontSize: "15px",
                      color: "#2062F4",
                    }}
                  >
                    Upload Logo
                  </label>
                </div>
              </div>
              <input
                type="file"
                name="logo"
                id="logo"
                accept=""
                className="d-none"
                onChange={(e) => handlePictureUpload(e)}
              />
              <p
                style={{
                  fontWeight: "300",
                  fontSize: "12px",
                }}
              >
                3MB max size (500 x500)
              </p>
            </div>
          </div>
          {error && (
            <p className="text-danger text-center">Please Upload client logo</p>
          )}

          <div className="pt-2 pb-3">
            <button
              className="w-100 btn-primary btn"
              type="submit"
              disabled={loading}
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
                "Add Client"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = ({ client }) => {
  const { creationError, message, loading } = client;
  return { creationError, message, loading };
};
export default connect(mapStateToProps, { createClient, createTag })(
  AddNewClient
);
