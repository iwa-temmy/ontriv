import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "reactstrap";
import billing from "../../../assets/img/billingIcon.png";
import MasterCard from "../../../assets/img/Mastercard.svg";
import Visa from "../../../assets/img/visa-logo.svg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import AddCardModal from "./AddCardModal";

//redux
import { connect } from "react-redux";
import { getAllCards } from "../../../redux/actions";

const Billing = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const { getAllCards, cards } = props;

  const openAddCardModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  return (
    <>
      <div className="billing-section mt-5">
        <Row>
          <Col xl="6" className="px-3 mb-2">
            <div className="d-flex flex-sm-column align-items-sm-center flex-lg-row mt-5">
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
              {cards?.map((card, index) => {
                console.log(index);
                return (
                  <div
                    className="billing-info-card mb-3 d-flex align-items-center justify-content-evenly "
                    key={card?.id}
                  >
                    <img
                      src={
                        card?.brand?.toLowerCase() === "mastercard"
                          ? MasterCard
                          : Visa
                      }
                      alt={`${card?.brand}`}
                    />
                    <p className="card-info mb-0 semi-bold">
                      {card?.brand?.toLowerCase() === "mastercard"
                        ? "Master card"
                        : "Visa Card"}
                    </p>
                    <p className="card-info mb-0 semi-bold">{card?.last}</p>
                    <p className="card-info mb-0">{`${card?.exp_month}/${card?.exp_year}`}</p>
                    <div className="">
                      {cards?.length - 1 === index && (
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
              <button className="w-50 delete-btn" onClick={openAddCardModal}>
                Add Payment Method
              </button>
            </Card>
          </Col>
        </Row>
      </div>

      <AddCardModal open={modalOpen} setModalState={setModalOpen} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cards: state?.subscription?.cards,
  };
};
export default connect(mapStateToProps, { getAllCards })(Billing);
