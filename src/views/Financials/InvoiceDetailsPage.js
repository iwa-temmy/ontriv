import { Row, Col } from "reactstrap";

import React, { useEffect, useState } from "react";
// import TitleModalLogoHere from "../../assets/img/TitleModalLogoHere.svg";
import { Bars } from "react-loader-spinner";
import InvoiceSettingsModal from "./InvoiceActions/InvoiceSettingsModal";
import RecordPaymentModal from "./InvoiceActions/RecordPaymentModal";
import ScheduleModal from "./InvoiceActions/ScheduleModal";
import DuplicateInvoiceModal from "./InvoiceActions/DuplicateInvoiceModal";
import InvoiceDetails from "./InvoiceDetails";

//icons
import HrInvoice from "../../assets/img/hr-invoice.svg";
import PlusSign from "../../assets/img/plus-sign.svg";
import LockKey from "../../assets/img/lock-key.svg";
//redux
import { connect } from "react-redux";
import { getOneInvoice } from "../../redux/actions";

//utils
import {
  stringDateFormat,
  invoicePaymentStatus,
  formatAmount,
  pdfWithPrintJs,
  copierHelper,
  calculateVat,
} from "../../utils/helper";

//react-router
import { useLocation } from "react-router-dom";
import CreateInvoiceModal from "./InvoiceActions/CreateInvoiceModal";

const InvoiceDetailsPage = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showRecordPayment, setShowRecordPayment] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showDuplicateInvoiceModal, setShowDuplicateInvoiceModal] =
    useState(false);
  const [showPreviewInvoiceModal, setShowPreviewInvoiceModal] = useState(false);
  const [showCreateInvoiceModal, setShowCreateInvoiceModal] = useState(false);

  //props
  const { address, logo, getOneInvoice, invoiceDetails, loading } = props;
  const location = useLocation();
  console.log(window.location.href);

  const getPDF = () => {
    setShowOptions(false);
    pdfWithPrintJs("invoice", "invoice");
  };

  const toggleInvoicePreview = () => {
    setShowPreviewInvoiceModal(!showPreviewInvoiceModal);
  };

  const OpenCreateInvoiceModal = () => {
    setShowCreateInvoiceModal(true);
  };
  const CloseCreateInvoiceModal = () => {
    setShowCreateInvoiceModal(false);
  };

  useEffect(() => {
    getOneInvoice(location?.state?.id);
  }, [getOneInvoice, location?.state?.id]);
  return (
    <>
      {showCreateInvoiceModal ? (
        <CreateInvoiceModal closeInvoiceModal={CloseCreateInvoiceModal} />
      ) : null}
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
        >
          <Bars height="100" width="100" color="#2062F4" />
        </div>
      ) : (
        <div className="dashboard dashboard-wrapper px-2">
          <Row>
            <Col xl="8" className="">
              <div
                className="bg-white rounded-2 py-4 px-5"
                style={{ borderRadius: "10px" }}
              >
                <div id="invoice">
                  <div className="add-client-wrapper-2 text-center ">
                    <div className="d-inline-flex" style={{ width: "100%" }}>
                      <img
                        className="me-auto mb-5"
                        src={invoiceDetails?.extra_details?.business_logo}
                        alt="business logo"
                      />
                      <h6 className="invoice-modal__title">
                        {invoiceDetails?.extra_details?.invoice_prefix
                          ? invoiceDetails?.extra_details?.invoice_prefix
                          : "INV"}{" "}
                        -{invoiceDetails?.id}
                      </h6>
                    </div>
                    <Row>
                      <Col sm="6" lg="6" xl="6">
                        <h6 className="invoice-modal__light text-left mb-3">
                          {invoiceDetails?.extra_details?.business_address}
                        </h6>
                        <h6 className="invoice-modal__bold text-left mb-3">
                          {stringDateFormat(invoiceDetails?.issued_on)}
                        </h6>
                        <div className="">
                          <h6 className="invoice-modal__light text-left">
                            Due Date
                          </h6>
                          <h6 className="invoice-modal__bold text-left">
                            {stringDateFormat(invoiceDetails?.due_date)}
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
                            {invoiceDetails?.client?.fullname}
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
                    {invoicePaymentStatus(invoiceDetails?.status)}
                    <img src={HrInvoice} className="w-100" alt="" />
                    <div className="mt-5 invoice-modal__grey-section w-100 py-4 px-4">
                      <Row style={{ textAlign: "left" }}>
                        <Col md="2" lg="2">
                          <h6 className="invoice-modal__qty ">QTY</h6>
                        </Col>
                        <Col md="5" lg="5">
                          <h6 className="invoice-modal__qty">
                            ITEM DESCRIPTION
                          </h6>
                        </Col>
                        <Col md="2" lg="2">
                          <h6 className="invoice-modal__qty">RATE</h6>
                        </Col>
                        <Col md="3" lg="3">
                          <h6 className="invoice-modal__qty">AMOUNT</h6>
                        </Col>
                      </Row>
                      {invoiceDetails?.items?.map((item) => {
                        return (
                          <Row style={{ textAlign: "left" }} key={item?.id}>
                            <Col md="2" lg="2">
                              <h6 className="invoice-modal__qty ">
                                {item?.quantity}
                              </h6>
                            </Col>
                            <Col md="5" lg="5">
                              <h6 className="invoice-modal__qty">
                                {item?.item_description}
                              </h6>
                            </Col>
                            <Col md="2" lg="2">
                              <h6 className="invoice-modal__qty">
                                {formatAmount(item?.rate)}
                              </h6>
                            </Col>
                            <Col md="3" lg="3">
                              <h6 className="invoice-modal__qty">
                                {formatAmount(item?.amount)}
                              </h6>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                    <Row>
                      <Col className="ms-auto" xl="11">
                        <div className="mt-5 invoice-modal__grey-section py-4 px-4">
                          <Row>
                            <Col xl="6" lg="6" sm="6">
                              <h6 className="invoice-modal__qty ">Sub Total</h6>
                              <h6 className="invoice-modal__qty">
                                VAT({invoiceDetails?.vat}%)
                              </h6>
                            </Col>
                            <Col xl="6" lg="6" sm="6">
                              <h6
                                className="invoice-modal__qty "
                                style={{ textAlign: "right" }}
                              >
                                {formatAmount(invoiceDetails?.sub_total)}
                              </h6>
                              <h6
                                className="invoice-modal__qty"
                                style={{ textAlign: "right" }}
                              >
                                $
                                {calculateVat(
                                  invoiceDetails?.sub_total,
                                  invoiceDetails?.vat
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
                                $ {formatAmount(invoiceDetails?.total)}
                              </h6>
                            </div>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <img src={HrInvoice} className="my-5 w-100" alt="" />
                    <h6 className="add-item mb-5">www.yourwebsiteurl.com</h6>
                  </div>
                </div>
                <div className="d-inline-flex mb-5 w-100">
                  <div className="me-auto">
                    <div className="d-inline-flex w-full">
                      <img src={PlusSign} className="" alt="" />
                      <h6 className="add-item ms-3 me-auto my-auto">
                        Dowload Invoice
                      </h6>
                    </div>
                    <h6 className="text-left fw-light fs-6">
                      You can update logo in Settings
                    </h6>
                  </div>
                  <button className="save-pdf  px-5" onClick={getPDF}>
                    Print
                  </button>
                  <button className="ms-3 px-5 send align-items-center ">
                    Send
                  </button>
                </div>
              </div>
              <div
                className="bg-white rounded-2 py-4 px-5 mt-5"
                style={{ borderRadius: "10px" }}
              >
                <h6 className="add-item fs-5">Invoice Payment</h6>
                <Row className="mt-3">
                  <Col xl="3">
                    <h6 className="fs-6 text-black-50">Client</h6>
                  </Col>
                  <Col xl="3">
                    <h6 className="fs-6 text-black-50">Amount</h6>
                  </Col>
                  <Col xl="3">
                    <h6 className="fs-6 text-black-50">Payment date</h6>
                  </Col>
                  <Col xl="3">
                    <h6 className="fs-6 text-black-50">Payment method</h6>
                  </Col>
                  <Col xl="3">
                    <h6 className="fw-light fs-6" style={{ color: "#9DA8B6" }}>
                      March Inoice
                    </h6>
                  </Col>
                  <Col xl="3">
                    <h6 className="fw-light fs-6" style={{ color: "#9DA8B6" }}>
                      $ 1000.00
                    </h6>
                  </Col>
                  <Col xl="3">
                    <h6 className="fw-light fs-6" style={{ color: "#9DA8B6" }}>
                      16/04.2021
                    </h6>
                  </Col>
                  <Col xl="3">
                    <div className="list-client-tag-paid fs-6 py-2 px-0 text-center">
                      paid
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl="4">
              <div className="d-inline-flex w-10t">
                <button className="py-2 ms-3 px-4 me-2 send align-items-center ">
                  Edit Invoice
                </button>
                <button
                  className="blue-btn py-2 px-4"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  More Actions
                </button>
              </div>
              {showOptions ? (
                <div className="more-actions-container">
                  <h6
                    className="px-4 slightly-black action-menu pt-4"
                    onClick={OpenCreateInvoiceModal}
                  >
                    New Invoice
                  </h6>
                  <h6
                    className="px-4 slightly-black action-menu pt-4"
                    onClick={() => setShowDuplicateInvoiceModal(true)}
                  >
                    Make A copy
                  </h6>
                  <h6
                    onClick={() => {
                      setShowSettings(true);
                      setShowOptions(false);
                    }}
                    className="px-4 slightly-black action-menu pt-4"
                  >
                    Invoice Settings
                  </h6>
                  <h6
                    className="px-4 slightly-black action-menu pt-4"
                    onClick={getPDF}
                  >
                    Print Invoice
                  </h6>
                  <h6
                    className="px-4 slightly-black action-menu pt-4"
                    onClick={getPDF}
                  >
                    Download PDF
                  </h6>
                  <h6 className="px-4 slightly-black action-menu py-4">
                    Delete Invoice
                  </h6>
                </div>
              ) : null}
              <div className="my-4 py-5 px-4 bg-white">
                <h6 className="text-center fs-6 fw-light slightly-black mb-2">
                  The invoice can be sent to any email besides the client's
                  registered email address.
                </h6>
                <div className="d-inline-flex w-100">
                  <h6 className="py-2 mx-auto mt-3 px-4 send align-items-center ">
                    Send Receipt
                  </h6>
                </div>
              </div>
              <div className="my-4 py-5 px-4 bg-white">
                <h6 className="text-center fs-6 fw-light slightly-black mb-2">
                  Did the Client make an offline payment? You can record your
                  payment by clicking the button below
                </h6>
                <div className="d-inline-flex w-100">
                  <button
                    className="py-2 mx-auto mt-3 px-4 send align-items-center "
                    onClick={() => setShowRecordPayment(true)}
                  >
                    Record Payment
                  </button>
                </div>
              </div>
              <div className="my-4 py-2 px-2 bg-white">
                <div className="light-blue-bg d-flex justify-content-between w-100 px-3 py-3">
                  <h6 className="my-auto fw-light slightly-black">
                    Invoice Link
                  </h6>
                  <button
                    className="btn btn-link"
                    onClick={() => copierHelper(window.location.href)}
                  >
                    <img src={LockKey} className="ms-auto" alt="" />
                  </button>
                </div>
              </div>
              <button
                className="py-3 text-center px-4 send w-100 mb-4"
                onClick={() => setShowSchedule(true)}
              >
                Make Recurring
              </button>
              <button
                className="blue-btn py-3 px-4 w-100"
                onClick={toggleInvoicePreview}
              >
                Preview as Client
              </button>
            </Col>
          </Row>
        </div>
      )}

      <InvoiceSettingsModal
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <RecordPaymentModal
        showRecordPayment={showRecordPayment}
        setShowRecordPayment={setShowRecordPayment}
      />
      <ScheduleModal
        showSchedule={showSchedule}
        setShowSchedule={setShowSchedule}
      />
      <DuplicateInvoiceModal
        showDuplicateInvoiceModal={showDuplicateInvoiceModal}
        setShowDuplicateInvoiceModal={setShowDuplicateInvoiceModal}
      />
      <InvoiceDetails
        toggleInvoicePreview={toggleInvoicePreview}
        showModal={showPreviewInvoiceModal}
        details={location?.state}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state?.settings?.businessDetails?.address,
    logo: state?.settings?.businessDetails?.logo,
    invoiceDetails: state?.invoice?.oneInvoice,
    loading: state?.invoice?.getOneInvoiceLoading,
  };
};
export default connect(mapStateToProps, { getOneInvoice })(InvoiceDetailsPage);
