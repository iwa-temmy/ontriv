import { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { CenteredModal } from "../../components/Modal";
import postImg from "../../assets/img/post.png";
import event from "../../assets/img/event.png";

//core components
import OverviewCards from "./DashboardCards/OverviewCards";
import FinancialCard from "./DashboardCards/FinancialCard";
import ClientCard from "./DashboardCards/ClientCard";
import PostsCard from "./DashboardCards/PostsCard";

//redux
import { connect } from "react-redux";

const Dashboard = (props) => {
  const [eventState, updateEventState] = useState(false);
  const [postState, updatePostState] = useState(false);

  const navigate = useNavigate();

  const toggleEventState = () => {
    updateEventState(!eventState);
  };

  const togglePostState = () => {
    updatePostState(!postState);
  };

  const handleAddClient = () => {
    navigate("/client-management");
  };

  const handleAddInvoice = () => {
    navigate("/invoices-&-financials");
  };

  return (
    <div className="dashboard dashboard-wrapper">
      <Row>
        <Col md="12" sm="12" lg="12" xxl="8" className=" mb-3">
          <div>
            <OverviewCards />

            <Row className="gx-3">
              <FinancialCard handleAddInvoice={handleAddInvoice} />

              <ClientCard handleAddClient={handleAddClient} />
            </Row>
          </div>
        </Col>
        <PostsCard
          toggleEventState={toggleEventState}
          togglePostState={togglePostState}
        />
      </Row>
      <CenteredModal
        position="centered"
        modalState={postState}
        setModalState={updatePostState}
      >
        <div className="post">
          <h2 className="post-title">10th April 2021</h2>
          <div className="py-3">
            <div className="post-details mb-0 ">
              <Row className="gx-5">
                <Col sm="4">
                  <div className="post-img-wrapper">
                    <img className="post-img" src={postImg} alt="post" />
                  </div>
                </Col>

                <Col sm="8">
                  <div className="pt-2">
                    <h3 className="post-text-header">UK villages</h3>
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                      sedLorem ipsum dolor sit ame.
                    </p>
                    <div className="d-flex">
                      <div className="client-section">
                        <h2 className="client-section-header-text">Client</h2>
                        <div className="client-details d-flex">
                          <p className="client-logo">10px</p>
                          <p className="client-name">10px Socials</p>
                        </div>
                      </div>
                      <div className="channel-section">
                        <h4 className="channel-section-header-text">Channel</h4>
                        <div className="tags d-flex">
                          <p className="tag tag-1">Blog</p>
                          <p className="tag tag-2">Facebook</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            <div className="post-details mb-0 ">
              <Row className="gx-5">
                <Col sm="4">
                  <div className="post-img-wrapper">
                    <img className="post-img" src={postImg} alt="post" />
                  </div>
                </Col>

                <Col sm="8">
                  <div className="pt-2">
                    <h3 className="post-text-header">UK villages</h3>
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                      sedLorem ipsum dolor sit ame.
                    </p>
                    <div className="d-flex">
                      <div className="client-section">
                        <h2 className="client-section-header-text">Client</h2>
                        <div className="client-details d-flex">
                          <p className="client-logo">10px</p>
                          <p className="client-name">10px Socials</p>
                        </div>
                      </div>
                      <div className="channel-section">
                        <h4 className="channel-section-header-text">Channel</h4>
                        <div className="tags d-flex">
                          <p className="tag tag-1">Blog</p>
                          <p className="tag tag-2">Facebook</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            <div className="post-details mb-0 ">
              <Row className="gx-5">
                <Col sm="4">
                  <div className="post-img-wrapper">
                    <img className="post-img" src={postImg} alt="post" />
                  </div>
                </Col>

                <Col sm="8" className="">
                  <div className="pl-3 pt-2">
                    <h3 className="post-text-header">UK villages</h3>
                    <p className="post-description">
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                      sedLorem ipsum dolor sit ame.
                    </p>
                    <div className="d-flex">
                      <div className="client-section">
                        <h4 className="client-section-header-text">Client</h4>
                        <div className="client-details d-flex">
                          <p className="client-logo">10px</p>
                          <p className="client-name">10px Socials</p>
                        </div>
                      </div>
                      <div className="channel-section">
                        <h4 className="channel-section-header-text">Channel</h4>
                        <div className="tags d-flex">
                          <p className="tag tag-1">Blog</p>
                          <p className="tag tag-2">Facebook</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="mx-auto post-button-wrapper">
            <Button className="py-3 mx-auto post-button">View All Posts</Button>
          </div>
        </div>
      </CenteredModal>

      <CenteredModal
        position="centered"
        modalState={eventState}
        setModalState={updateEventState}
      >
        <div className="upcoming-event-modal">
          <div>
            <div className="event-img-wrapper ">
              <img src={event} className="event-img" alt="event" />
            </div>
            <div className="text-center">
              <h1 className="event-header-title mb-0">April Fools Day</h1>
              <p className="event-description">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                sedLorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
              </p>
              <div className="mx-auto event-button-wrapper">
                <Button className="py-3 mx-auto event-button">
                  Create Content
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CenteredModal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
