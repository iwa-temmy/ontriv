import { Row, Col } from "reactstrap";
import { CenteredModal as Modal } from "../../components/Modal";
import React, { useState } from "react";
import boxIcon from "../../assets/img/box-icon-finance.svg";
import TitleModalLogoHere from "../../assets/img/TitleModalLogoHere.svg";
import HrInvoice from "../../assets/img/hr-invoice.svg";
import {
  stringDateFormat,
  formatNumber,
  formatAmount,
} from "../../utils/helper";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdPending, MdCancel } from "react-icons/md";
import { connect } from "react-redux";

const InvoiceDetails = ({ details, address }) => {
  const [showModal, setShowModal] = useState(false);
  const { row } = details;

  const paymentStatus = (status) => {
    if (status === "Pending") {
      return (
        <>
          <div className="d-inline-flex w-100 align-items-center justify-content-between">
            <MdPending className="ms-auto" color="#ffc107" size="24px" />
            <h6 className="invoice-modal__status invoice-modal__pending mt-2 pl-2">
              {row?.original?.status}
            </h6>
          </div>
        </>
      );
    } else if (status === "Paid") {
      return (
        <>
          <div className="d-inline-flex w-100 align-items-center justify-content-between">
            <BsFillCheckCircleFill
              className="ms-auto"
              color="#00D67D"
              size="24px"
            />
            <h6 className="invoice-modal__status invoice-modal__paid mt-2 pl-2">
              {row?.original?.status}
            </h6>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="d-inline-flex w-100 align-items-center justify-content-between">
            <MdCancel className="ms-auto" color="#dc3545" size="24px" />
            <h6 className="invoice-modal__status invoice-modal__overdue mt-2 pl-2">
              {row?.original?.status}
            </h6>
          </div>
        </>
      );
    }
  };
  return (
    <div>
      <img
        src={boxIcon}
        alt="client-logo"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <Modal modalState={showModal} setModalState={setShowModal}>
        <div className="add-client-wrapper-2 text-center ">
          <div className="d-inline-flex" style={{ width: "100%" }}>
            <img className="me-auto" src={TitleModalLogoHere} alt="" />
            <h6 className="invoice-modal__title">{`INV-${formatNumber(
              row?.original?.id
            )}`}</h6>
          </div>
          <Row>
            <Col sm="6" lg="6" xl="6">
              <h6 className="invoice-modal__light text-left mb-3">{address}</h6>
              <h6 className="invoice-modal__bold text-left mb-3">
                {stringDateFormat(row?.original?.issued_on)}
              </h6>
              <div className="">
                <h6 className="invoice-modal__light text-left">Due Date</h6>
                <h6 className="invoice-modal__bold text-left">
                  {stringDateFormat(row?.original?.due_date)}
                </h6>
              </div>
            </Col>
            <Col sm="6" lg="6" xl="6">
              <div className="" style={{ textAlign: "right" }}>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  Billed to,
                </h6>
                <h6
                  className="invoice-modal__bold text-right"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  {row?.original?.client?.fullname}
                </h6>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  3455 Geraldine Lane,
                </h6>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  New York
                </h6>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  10013
                </h6>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  United States
                </h6>
              </div>
            </Col>
          </Row>
          {paymentStatus(row?.original?.status)}
          <img src={HrInvoice} className="w-100" alt="" />
          <div className="mt-5 invoice-modal__grey-section w-100 py-4 px-4">
            <Row style={{ textAlign: "left" }}>
              <Col xl="2">
                <h6 className="invoice-modal__qty ">QTY</h6>
              </Col>
              <Col xl="5">
                <h6 className="invoice-modal__qty">ITEM DESCRIPTION</h6>
              </Col>
              <Col xl="2">
                <h6 className="invoice-modal__qty">RATE</h6>
              </Col>
              <Col xl="3">
                <h6 className="invoice-modal__qty">AMOUNT</h6>
              </Col>
            </Row>
            <Row>
              <Col xl="2">
                <h6 className="invoice-modal__qty ">1</h6>
              </Col>
              <Col xl="5">
                <h6 className="invoice-modal__qty">Facebook</h6>
              </Col>
              <Col xl="2">
                <h6 className="invoice-modal__qty">200</h6>
              </Col>
              <Col xl="3">
                <h6 className="invoice-modal__qty">1000</h6>
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="ms-auto" xl="11">
              <div className="mt-5 invoice-modal__grey-section py-4 px-4">
                <Row>
                  <Col sm="6" lg="6" xl="6">
                    <h6 className="invoice-modal__qty ">Sub Total</h6>
                    <h6 className="invoice-modal__qty">VAT(10%)</h6>
                  </Col>
                  <Col sm="6" lg="6" xl="6">
                    <h6
                      className="invoice-modal__qty "
                      style={{ textAlign: "right" }}
                    >
                      $ {formatAmount(row?.original?.sub_total)}
                    </h6>
                    <h6
                      className="invoice-modal__qty"
                      style={{ textAlign: "right" }}
                    >
                      ${formatAmount(row?.original?.vat) || "0.00"}
                    </h6>
                  </Col>
                </Row>
                <Row className="invoice-modal__blue-section py-3">
                  <div className="d-inline-flex w-100">
                    <h6
                      className="invoice-modal__qty my-auto"
                      style={{ textAlign: "left" }}
                    >
                      Total (USD)
                    </h6>
                    <h6
                      className="invoice-modal__total ms-auto my-auto"
                      style={{ textAlign: "right" }}
                    >
                      $ {formatAmount(row?.original?.total)}
                    </h6>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state?.settings?.businessDetails?.address,
  };
};
export default connect(mapStateToProps, {})(InvoiceDetails);
