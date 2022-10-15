import React from "react";
import icon1 from "../../../assets/img/calendaric1.svg";
import icon2 from "../../../assets/img/calendarIc2.svg";

import { HiArrowRight } from "react-icons/hi";

const UpcomingEvents = (props) => {
  const { toggleEventState } = props;
  return (
    <div>
      <h4 className="mx-3 upcoming-events-header  mb-0">Upcoming Events</h4>
      <div className="upcoming-event mb-2 d-flex justify-content-between flex-wrap align-items-center">
        {/* <div className='event-icon'> */}
        <img src={icon1} alt="icon" className="event-icon " />
        {/* </div> */}
        <div className="event-details">
          <h4>April Fools day</h4>
          <p className="mb-0">01/04/2021</p>
        </div>
        <div className="event-arrow-icon">
          <HiArrowRight
            color="#49A8F8"
            size="25px"
            className="font-weight-bold"
            onClick={toggleEventState}
          />
        </div>
      </div>
      <div className="upcoming-event mb-2 d-flex justify-content-between flex-wrap align-items-center">
        <div>
          <img src={icon2} alt="icon" className="event-icon " />
        </div>
        <div className="event-details">
          <h4>Good Friday</h4>
          <p className="mb-0">02/04/2021</p>
        </div>
        <div className="event-arrow-icon">
          <HiArrowRight
            color="#49A8F8"
            size="25px"
            className="font-weight-bold"
            onClick={toggleEventState}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
