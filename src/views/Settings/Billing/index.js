import { Row, Col, Card } from "reactstrap";
import billing from "../../../assets/img/billingIcon.png";
import MasterCard from "../../../assets/img/Mastercard.svg";
import Visa from "../../../assets/img/visa-logo.svg";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Billing = () => {
  const cards = [
    {
      number: "5200828282828210",
      type: "visa",
      active: true,
    },
    {
      number: "5555555555554444",
      type: "mastercard",
      active: false,
    },
  ];
  return (
    <div className="billing-section mt-5">
      <Row>
        <Col xl="6" className="px-3 mb-2">
          <div className="d-flex mt-5">
            <div className="">
              <img src={billing} alt="bill" />
            </div>
            <div className="billing-text px-4 mt-4">
              <h1>Billing Info</h1>
              <p>You can add or remove a new card</p>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <Card className="account-setup-card">
            {cards?.map((card) => {
              return (
                <div className="billing-info-card mb-3 d-flex align-items-center justify-content-evenly ">
                  <img
                    src={
                      card?.type?.toLowerCase() === "mastercard"
                        ? MasterCard
                        : Visa
                    }
                    alt={`${card.type}`}
                  />
                  <p className="card-info mb-0 semi-bold">
                    {card?.type?.toLowerCase() === "mastercard"
                      ? "Master card"
                      : "Visa Card"}
                  </p>
                  <p className="card-info mb-0 semi-bold">
                    {card?.number.slice(0, 4)}
                  </p>
                  <p className="card-info mb-0">{card?.number.slice(-4)}</p>
                  <div className="">
                    {card?.active && (
                      <IoIosCheckmarkCircle
                        className="icon-wrapper"
                        size="20px"
                        color="#00D67D"
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <button className="w-50 delete-btn">Add Payment Method</button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Billing;
