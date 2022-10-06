import React from "react";
import emptyState from "../../assets/img/emptyDashboardIcon.svg";

const EmptyDashboardState = ({ subHeaderText, buttonText, onClick }) => {
  return (
    <div className="bg-white p-5 " style={{ borderRadius: "10px" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        // style={{ marginTop: "4.6rem" }}
      >
        <img src={emptyState} alt="empty invoice icon" width={140} />
        <span className="text-center my-4" style={{ whiteSpace: "nowrap" }}>
          {subHeaderText}
        </span>
        <button
          className="btn btn-primary send px-5 py-2"
          style={{ whiteSpace: "nowrap" }}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EmptyDashboardState;
