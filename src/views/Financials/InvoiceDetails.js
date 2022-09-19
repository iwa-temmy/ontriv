import { Row, Col } from "reactstrap";
import { InvoicePreviewModal as Modal } from "../../components/Modal";
import React from "react";
import TitleModalLogoHere from "../../assets/img/TitleModalLogoHere.svg";
import HrInvoice from "../../assets/img/hr-invoice.svg";
import {
  stringDateFormat,
  formatAmount,
  invoicePaymentStatus,
  calculateVat,
} from "../../utils/helper";

import { connect } from "react-redux";

const InvoiceDetails = ({
  details,
  business_logo,
  showModal,
  toggleInvoicePreview,
  handleClose,
  businessAddress,
}) => {
  return (
    <div>
      <Modal modalState={showModal} toggleModalState={toggleInvoicePreview} handleClose={handleClose}>
        <div className="add-client-wrapper-2 text-center ">
          <div className="d-inline-flex" style={{ width: "100%" }}>
            <img
              className="me-auto mb-2"
              src={
                business_logo
                  ? `https://${business_logo?.split("//")?.[1]}`
                  : TitleModalLogoHere
              }
              alt="business logo"
              width="120px"
              // height="100px"
            />
            <h6 className="invoice-modal__title">
              {details?.extra_details?.invoice_prefix
                ? details?.extra_details?.invoice_prefix
                : "INV"}{" "}
              -{details?.id}
            </h6>
          </div>
          <Row>
            <Col sm="6" lg="6" xl="6">
              <h6 className="invoice-modal__light text-left mb-3">
                {businessAddress}
              </h6>
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
                  {details?.client?.fullname}
                </h6>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  {details?.client?.client_email || "No Email"}
                </h6>
                <h6
                  className="invoice-modal__light text-right"
                  style={{ textAlign: "right" }}
                >
                  {details?.client?.client_phone_number !== "Null"
                    ? details?.client?.client_phone_number
                    : ""}
                </h6>
              </div>
            </Col>
          </Row>
          <Row className="align-items-end mt-3">
            <Col sm="6" lg="6" xl="6">
              <div className="mb-4">
                <h6 className="invoice-modal__light text-left">Issue Date</h6>
                <h6 className="invoice-modal__bold text-left mb-3">
                  {stringDateFormat(details?.issued_on)}
                </h6>
              </div>
              <div className="">
                <h6 className="invoice-modal__light text-left">Due Date</h6>
                <h6 className="invoice-modal__bold text-left">
                  {stringDateFormat(details?.due_date)}
                </h6>
              </div>
            </Col>
            <Col sm="6" lg="6" xl="6">
              {invoicePaymentStatus(details?.status)}
            </Col>
          </Row>
          <img src={HrInvoice} className="w-100" alt="" />
          <div className="mt-3 invoice-modal__grey-section w-100 py-4 px-4">
            <Row
              style={{
                textAlign: "left",
                borderBottom: "2px solid #F2F2F2",
              }}
            >
              <Col sm="5" lg="5">
                <h6 className="invoice-modal__qty">ITEM</h6>
              </Col>
              <Col sm="2" lg="2">
                <h6 className="invoice-modal__qty">RATE</h6>
              </Col>
              <Col sm="2" lg="2">
                <h6 className="invoice-modal__qty ">QTY</h6>
              </Col>
              <Col sm="3" lg="3">
                <h6 className="invoice-modal__qty">AMOUNT</h6>
              </Col>
            </Row>
            {details?.items?.map((item) => {
              return (
                <Row
                  style={{
                    textAlign: "left",
                    borderBottom: "2px solid #F2F2F2",
                    padding: "1rem 0 0.5rem 0",
                  }}
                  key={item?.id}
                >
                  <Col sm="5" lg="5">
                    <h6 className="invoice-modal__item">
                      {item?.item_description}
                    </h6>
                  </Col>
                  <Col sm="2" lg="2">
                    <h6 className="invoice-modal__item">
                      {formatAmount(item?.rate)}
                    </h6>
                  </Col>
                  <Col sm="2" lg="2">
                    <h6 className="invoice-modal__item ">{item?.quantity}</h6>
                  </Col>
                  <Col sm="3" lg="3">
                    <h6 className="invoice-modal__item">
                      {formatAmount(item?.amount)}
                    </h6>
                  </Col>
                </Row>
              );
            })}
          </div>
          <Row>
            <Col className="ms-auto" sm="9" md="9" xl="9">
              <div className="mt-4 invoice-modal__grey-section py-4 px-4">
                <Row>
                  <Col sm="6" lg="6" xl="6">
                    <h6 className="invoice-modal__qty ">Sub Total</h6>
                    <h6 className="invoice-modal__qty">VAT({details?.vat}%)</h6>
                  </Col>
                  <Col sm="6" lg="6" xl="6">
                    <h6
                      className="invoice-modal__qty "
                      style={{ textAlign: "right" }}
                    >
                      $ {formatAmount(details?.sub_total)}
                    </h6>
                    <h6
                      className="invoice-modal__qty"
                      style={{ textAlign: "right" }}
                    >
                      $
                      {formatAmount(
                        calculateVat(details?.sub_total, details?.vat)
                      )}
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
                      $ {formatAmount(details?.total)}
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
    business_logo: state?.auth?.currentUser?.business_logo,
  };
};
export default connect(mapStateToProps, {})(InvoiceDetails);
