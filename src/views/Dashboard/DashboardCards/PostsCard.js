import React from "react";
import { Col, Card } from "reactstrap";
import ContentCalender from "./ContentCalender";
import UpcomingEvents from "./UpcomingEvents";

const PostsCard = (props) => {
  const { togglePostState, toggleEventState } = props;

  return (
    <Col md="12" lg="5" sm="12" xxl="4" className="mb-3">
      <Card className="calendar-card overflow-auto">
        <ContentCalender togglePostState={togglePostState} />
        <hr className="my-3" />
        <UpcomingEvents toggleEventState={toggleEventState} />
      </Card>
    </Col>
  );
};

export default PostsCard;
