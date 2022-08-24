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
  downloadPdf,
} from "../../utils/helper";

//react-router
import { useLocation } from "react-router-dom";
import CreateInvoiceModal from "./InvoiceActions/CreateInvoiceModal";
import EditInvoiceModal from "./InvoiceActions/EditInvoiceModal";

const InvoiceDetailsPage = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showRecordPayment, setShowRecordPayment] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showDuplicateInvoiceModal, setShowDuplicateInvoiceModal] =
    useState(false);
  const [showPreviewInvoiceModal, setShowPreviewInvoiceModal] = useState(false);
  const [showCreateInvoiceModal, setShowCreateInvoiceModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [pageData, setPageData] = useState({});

  //props
  const {
    getOneInvoice,
    invoiceDetails,
    getOneInvoiceLoading,
    getInvoiceMessage,
  } = props;
  const location = useLocation();

  const getPDF = () => {
    setShowOptions(false);
    pdfWithPrintJs("invoice", "invoice");
  };

  const DownloadInvoicePdf = () => {
    downloadPdf("invoice");
    setShowOptions(false);
  };

  const toggleInvoicePreview = () => {
    setShowPreviewInvoiceModal(!showPreviewInvoiceModal);
  };

  const OpenCreateInvoiceModal = () => {
    setShowCreateInvoiceModal(true);
    setShowOptions(false);
  };
  const CloseCreateInvoiceModal = () => {
    setShowCreateInvoiceModal(false);
  };

  const openEditInvoiceModal = () => {
    setShowEditModal(true);
  };
  const closeEditInvoiceModal = () => {
    setShowEditModal(false);
  };
  useEffect(() => {
    getOneInvoice(location?.state?.id);
  }, [getOneInvoice, location?.state?.id]);

  console.log({ getOneInvoiceLoading, getInvoiceMessage });
  useEffect(() => {
    if (!getOneInvoiceLoading && getInvoiceMessage?.length > 0) {
      console.log("yes");
      setPageData(invoiceDetails);
    } else {
      setPageData({});
    }
  }, [getInvoiceMessage, getOneInvoiceLoading, invoiceDetails]);
  return (
    <>
      {showCreateInvoiceModal ? (
        <CreateInvoiceModal closeInvoiceModal={CloseCreateInvoiceModal} />
      ) : null}
      {showEditModal ? (
        <EditInvoiceModal closeInvoiceModal={closeEditInvoiceModal} payload={pageData}/>
      ) : null}
      <div className="dashboard dashboard-wrapper px-2 position-relative">
        {getOneInvoiceLoading ? (
          <div className="position-fixed top-50 start-50">
            <Bars height="100" width="100" color="#2062F4" />
          </div>
        ) : (
          <Row>
            <Col xl="8" className="">
              <div
                className="bg-white rounded-2"
                style={{ borderRadius: "10px" }}
              >
                <div id="invoice" className="pt-4 px-5">
                  <div className="add-client-wrapper-2 text-center ">
                    <div className="d-inline-flex" style={{ width: "100%" }}>
                      <img
                        className="me-auto mb-5"
                        src={pageData?.extra_details?.business_logo}
                        alt="business logo"
                      />
                      <h6 className="invoice-modal__title">
                        {pageData?.extra_details?.invoice_prefix
                          ? pageData?.extra_details?.invoice_prefix
                          : "INV"}{" "}
                        -{pageData?.id}
                      </h6>
                    </div>
                    <Row>
                      <Col sm="6" lg="6" xl="6">
                        <h6 className="invoice-modal__light text-left mb-3">
                          {pageData?.extra_details?.business_address}
                        </h6>
                        <h6 className="invoice-modal__bold text-left mb-3">
                          {stringDateFormat(pageData?.issued_on)}
                        </h6>
                        <div className="">
                          <h6 className="invoice-modal__light text-left">
                            Due Date
                          </h6>
                          <h6 className="invoice-modal__bold text-left">
                            {stringDateFormat(pageData?.due_date)}
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
                            {pageData?.client?.fullname}
                          </h6>
                        </div>
                      </Col>
                    </Row>
                    {invoicePaymentStatus(pageData?.status)}
                    <img src={HrInvoice} className="w-100" alt="" />
                    <div className="mt-5 invoice-modal__grey-section w-100 py-4 px-4">
                      <Row style={{ textAlign: "left" }}>
                        <Col sm="2" lg="2">
                          <h6 className="invoice-modal__qty ">QTY</h6>
                        </Col>
                        <Col sm="5" lg="5">
                          <h6 className="invoice-modal__qty">
                            ITEM DESCRIPTION
                          </h6>
                        </Col>
                        <Col sm="2" lg="2">
                          <h6 className="invoice-modal__qty">RATE</h6>
                        </Col>
                        <Col sm="3" lg="3">
                          <h6 className="invoice-modal__qty">AMOUNT</h6>
                        </Col>
                      </Row>
                      {pageData?.items?.map((item) => {
                        return (
                          <Row style={{ textAlign: "left" }} key={item?.id}>
                            <Col sm="2" lg="2">
                              <h6 className="invoice-modal__qty ">
                                {item?.quantity}
                              </h6>
                            </Col>
                            <Col sm="5" lg="5">
                              <h6 className="invoice-modal__qty">
                                {item?.item_description}
                              </h6>
                            </Col>
                            <Col sm="2" lg="2">
                              <h6 className="invoice-modal__qty">
                                {formatAmount(item?.rate)}
                              </h6>
                            </Col>
                            <Col sm="3" lg="3">
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
                                VAT({pageData?.vat}%)
                              </h6>
                            </Col>
                            <Col xl="6" lg="6" sm="6">
                              <h6
                                className="invoice-modal__qty "
                                style={{ textAlign: "right" }}
                              >
                                {formatAmount(pageData?.sub_total)}
                              </h6>
                              <h6
                                className="invoice-modal__qty"
                                style={{ textAlign: "right" }}
                              >
                                $
                                {formatAmount(
                                  calculateVat(
                                    pageData?.sub_total,
                                    pageData?.vat
                                  )
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
                                $ {formatAmount(pageData?.total)}
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
                <div className="d-inline-flex mb-5 w-100 px-5 pb-4">
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
                  <Col sm="3" lg="3" md="3">
                    <h6 className="fs-6 text-black-50">Client</h6>
                  </Col>
                  <Col sm="2" lg="2" md="2">
                    <h6 className="fs-6 text-black-50">Amount</h6>
                  </Col>
                  <Col sm="3" lg="3" md="3">
                    <h6 className="fs-6 text-black-50">Payment date</h6>
                  </Col>
                  <Col sm="4" lg="4" md="4">
                    <h6 className="fs-6 text-black-50">Payment method</h6>
                  </Col>
                </Row>
                {pageData?.payment_record?.length > 0 ? (
                  pageData?.payment_record?.map((record) => {
                    return (
                      <Row
                        key={record?.id}
                        className="align-items-center justify-content-center"
                      >
                        <Col sm="3" lg="3" md="3">
                          <h6
                            className="fw-light fs-6"
                            style={{ color: "#9DA8B6" }}
                          >
                            {invoiceDetails?.client?.fullname}
                          </h6>
                        </Col>
                        <Col sm="2" lg="2" md="2">
                          <h6
                            className="fw-light fs-6"
                            style={{ color: "#9DA8B6" }}
                          >
                            {formatAmount(record?.amount_paid)}
                          </h6>
                        </Col>
                        <Col sm="3" lg="3" md="3">
                          <h6
                            className="fw-light fs-6"
                            style={{ color: "#9DA8B6" }}
                          >
                            {record?.payment_date}
                          </h6>
                        </Col>
                        <Col sm="4" lg="4" md="4">
                          <div className="list-client-tag-paid fs-6 py-2 text-center w-75">
                            {record?.payment_method}
                          </div>
                        </Col>
                      </Row>
                    );
                  })
                ) : (
                  <Row>
                    <Col sm="12" lg="12" md="12">
                      <h6
                        className="fw-light fs-6 mt-3"
                        style={{ color: "#9DA8B6", textAlign: "center" }}
                      >
                        Not Available
                      </h6>
                    </Col>
                  </Row>
                )}
              </div>
            </Col>
            <Col xl="4" className="position-relative">
              <div className="d-inline-flex w-10t">
                <button
                  className="py-2 ms-3 px-4 me-2 send align-items-center"
                  onClick={openEditInvoiceModal}
                >
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
                    className="px-4 slightly-black action-menu py-3"
                    onClick={OpenCreateInvoiceModal}
                  >
                    New Invoice
                  </h6>
                  <h6
                    className="px-4 slightly-black action-menu py-3"
                    onClick={() => {
                      setShowDuplicateInvoiceModal(true);
                      setShowOptions(false);
                    }}
                  >
                    Make A copy
                  </h6>
                  <h6
                    onClick={() => {
                      setShowSettings(true);
                      setShowOptions(false);
                    }}
                    className="px-4 slightly-black action-menu py-3"
                  >
                    Invoice Settings
                  </h6>
                  <h6
                    className="px-4 slightly-black action-menu py-3"
                    onClick={getPDF}
                  >
                    Print Invoice
                  </h6>
                  <h6
                    className="px-4 slightly-black action-menu py-3"
                    onClick={DownloadInvoicePdf}
                  >
                    Download PDF
                  </h6>
                  <h6 className="px-4 slightly-black action-menu py-3">
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
                    onClick={() => {
                      setShowRecordPayment(true);
                    }}
                    disabled={pageData?.status === "Paid"}
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
                className="py-3 text-center px-4 recurring w-100 mb-4"
                onClick={() => setShowDuplicateInvoiceModal(true)}
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
        )}
      </div>

      <InvoiceSettingsModal
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        invoiceId={location?.state?.id}
      />
      <RecordPaymentModal
        showRecordPayment={showRecordPayment}
        setShowRecordPayment={setShowRecordPayment}
        id={invoiceDetails?.id}
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
    invoiceDetails: state?.oneInvoice?.details,
    getOneInvoiceLoading: state?.oneInvoice?.getOneInvoiceLoading,
    getInvoiceMessage: state?.oneInvoice?.message?.getOneInvoice,
  };
};
export default connect(mapStateToProps, { getOneInvoice })(InvoiceDetailsPage);
