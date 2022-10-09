import React from "react";
import emptyState from "../../assets/img/emptyDashboardIcon.svg";
import {HiPlus} from "react-icons/hi";

const EmptyDashboardState = ({ subHeaderText, buttonText, onClick }) => {
  return (

      <div
        className="d-flex flex-column justify-content-center align-items-center h-100"
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
         <HiPlus color="#2465ec" className="create-icon" /> {buttonText}
        </button>
      </div>
  );
};

export default EmptyDashboardState;
