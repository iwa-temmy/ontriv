import { useState } from "react";
import { Row, Col, Card, Button } from "reactstrap";
import "react-calendar/dist/Calendar.css";
import { CenteredModal } from "../../components/Modal";
import greenMark from "../../assets/img/green-icon.svg";
import greyMark from "../../assets/img/gray-icon-mark.svg";
// import successConfeti from "../../assets/img/success-confeti.svg";

//utils
import { plans } from "../../utils/Plans";
import PaymentScreen from "./PaymentScreen";

const Subscription = () => {
  const [planState, updatePlanState] = useState("Basic");
  const [planDetails, setPlanDetails] = useState({});
  const [durationState, updateDurationState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [view, setView] = useState("plans");

  // eslint-disable-next-line

  const togglePlanState = (newPlan) => {
    updatePlanState(newPlan);
  };

  const toggleDurationState = () => {
    updateDurationState(!durationState);
  };

  const handleStartTrial = (e) => {
    e.stopPropagation();
    setView("payment");
    const activePlanDetails = plans.find((plan) => {
      let planObj = plan === planState;
      return planObj; 
    });
    setPlanDetails(activePlanDetails);
  };
  return (
    <div className="dashboard dashboard-wrapper">
      <Row>
        <Col md="16" sm="16" lg="16" xxl="16" className="mb-3">
          <div>
            <Row>
              <Col md="16">
                <div className="dashboard-analytics">
                  <Card className="analytics-card pt-3 pb-5">
                    {view === "plans" ? <div>
                      <div className="d-flex flex-column align-items-center my-4 subscription__header__text">
                        <h1>Affordable plans that grow with your business</h1>
                        <p>Get started with a 14-day free trial</p>
                        <div className="form-check form-switch p-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            value={durationState}
                            id="flexSwitchCheckDefault"
                            style={{ width: "3em", padding: "0.5rem" }}
                            onChange={toggleDurationState}
                          />
                          <label
                            className="form-check-label ms-2"
                            for="flexSwitchCheckDefault"
                            style={{ verticalAlign: "super" }}
                          >
                            <strong>Annual</strong> (Get 2 months Free)
                          </label>
                        </div>
                      </div>
                      <Row className="subscription__plans-container">
                        {plans?.map((plan) => {
                          return (
                            <Col
                              onClick={() => {
                                togglePlanState(plan.name);
                              }}
                              md="4"
                              className="sub"
                              key={plan.id}
                            >
                              <div className="subscription__card__border">
                                <div
                                  className={`subscription__card__content px-4 py-4 ${
                                    planState === plan.name
                                      ? "subscription__card__content__active"
                                      : ""
                                  }`}
                                >
                                  <div
                                    className="d-flex justify-content-between align-items-center"
                                    style={{ maxHeight: "47px" }}
                                  >
                                    <div>
                                      <h4 className="subscription__card__content__plan-type">
                                        {plan.name}
                                      </h4>
                                    </div>

                                    {planState === plan.name ? (
                                      <img
                                        src={greenMark}
                                        style={{ height: "60px" }}
                                        className="my-auto"
                                        alt=""
                                      />
                                    ) : (
                                      <img
                                        src={greyMark}
                                        style={{ height: "*60px" }}
                                        className="my-auto"
                                        alt=""
                                      />
                                    )}
                                  </div>
                                  <p className="subscription__card__content__price-text">
                                    $
                                    {durationState
                                      ? plan.price * 10
                                      : plan.price}
                                    <span
                                      className={`subscription__card__content__price-text__duration ${
                                        planState === plan.name
                                          ? "subscription__card__content__price-text__duration-active"
                                          : ""
                                      }`}
                                    >
                                      / {durationState ? "Year" : "Month"}
                                    </span>
                                  </p>
                                  <div className="mt-3">
                                    {plan.features?.map((feature) => {
                                      return (
                                        <h6
                                          className="subscription__card__content__regular-text mt-1"
                                          key={feature}
                                        >
                                          {feature}
                                        </h6>
                                      );
                                    })}
                                  </div>
                                  <div className="mt-5 mb-4 d-flex justify-content-center">
                                    <Button
                                      className={`subscription__card__content__btn subscription__card__content__btn${plan.id}`}
                                      onClick={handleStartTrial}
                                      disabled={planState !== plan.name}
                                    >
                                      Start Free Trial
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          );
                        })}
                      </Row>
                    </div> : <PaymentScreen planDetails={planDetails}/> }
                    
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <CenteredModal
        position="centered"
        modalState={modalOpen}
        setModalState={setModalOpen}
      ></CenteredModal>
    </div>
  );
};

export default Subscription;
