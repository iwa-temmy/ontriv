import React from "react";
import icon1 from "../../../assets/img/calendaric1.svg";
import Calendar from "../../../components/Calendar";
const ContentCalender = (props) => {
  const { togglePostState } = props;
  return (
    <>
      <div className="d-flex align-items-center calendar-header">
        <img src={icon1} width="16px" alt="calendar" className="mb-0" />
        <h4 className="mx-3 card-header-text mb-0 mt-1">Scheduled Posts</h4>
      </div>
      <Calendar className="customize-calendar" onClickDay={togglePostState} />
    </>
  );
};

export default ContentCalender;
