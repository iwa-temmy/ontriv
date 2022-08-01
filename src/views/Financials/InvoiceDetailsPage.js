import { Button, Row, Col } from "reactstrap";
import { CenteredModal as Modal } from "../../components/Modal";
import React, { useState } from "react";
import TitleModalLogoHere from "../../assets/img/TitleModalLogoHere.svg";
import GreenMark from "../../assets/img/green-mark-modal.svg";
import HrInvoice from "../../assets/img/hr-invoice.svg";
import PlusSign from "../../assets/img/plus-sign.svg";
import LockKey from "../../assets/img/lock-key.svg";

//react-router
import { useLocation } from "react-router-dom";

const InvoiceDetailsPage = (props) => {
  const [showOptions, setShowOptions] = useState(true);
  const [showSettings, setShowSettings] = useState(true);

  const location = useLocation();
  console.log(location?.state);
  return (
    <>
      <div className="dashboard dashboard-wrapper px-2">
        <Row>
          <Col xl="8" className="">
            <div
              className="bg-white rounded-2 py-4 px-5"
              style={{ borderRadius: "10px" }}
            >
              <div className="add-client-wrapper-2 text-center ">
                <div className="d-inline-flex" style={{ width: "100%" }}>
                  <img className="me-auto" src={TitleModalLogoHere} alt="" />
                  <h6 className="invoice-modal__title">INV-057</h6>
                </div>
                <Row>
                  <Col xl="6">
                    <h6 className="invoice-modal__light text-left mb-3">
                      4945 Forest Avenue, New York, 10004, United States
                    </h6>
                    <h6 className="invoice-modal__bold text-left mb-3">
                      27 March, 2020
                    </h6>
                    <div className="">
                      <h6 className="invoice-modal__light text-left">
                        Due Date
                      </h6>
                      <h6 className="invoice-modal__bold text-left">
                        04 April, 2020
                      </h6>
                    </div>
                  </Col>
                  <Col xl="6">
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
                        Terry Baptista
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
                <div className="d-inline-flex w-100">
                  <img className="ms-auto" src={GreenMark} alt="" />
                  <h6 className="invoice-modal__paid mt-3">PAID</h6>
                </div>
                <img src={HrInvoice} className="w-100" alt="" />
                <div className="mt-5 invoice-modal__grey-section w-100 py-4 px-4">
                  <Row style={{ textAlign: "left" }}>
                    <Col xl="3">
                      <h6 className="invoice-modal__qty ">Qty</h6>
                      <h6 className="invoice-modal__qty">01</h6>
                      <h6 className="invoice-modal__qty">01</h6>
                    </Col>
                    <Col xl="3">
                      <h6 className="invoice-modal__qty">Qty</h6>
                      <h6 className="invoice-modal__qty">Item Name</h6>
                      <h6 className="invoice-modal__qty">Item Name</h6>
                    </Col>
                    <Col xl="3">
                      <h6 className="invoice-modal__qty">Qty</h6>
                      <h6 className="invoice-modal__qty">3,000.00</h6>
                      <h6 className="invoice-modal__qty">3,000.00</h6>
                    </Col>
                    <Col xl="3">
                      <h6 className="invoice-modal__qty">Qty</h6>
                      <h6 className="invoice-modal__qty">3,000.00</h6>
                      <h6 className="invoice-modal__qty">3,000.00</h6>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col className="ms-auto" xl="11">
                    <div className="mt-5 invoice-modal__grey-section py-4 px-4">
                      <Row>
                        <Col xl="6">
                          <h6 className="invoice-modal__qty ">Sub Total</h6>
                          <h6 className="invoice-modal__qty">VAT(10%)</h6>
                        </Col>
                        <Col xl="6">
                          <h6
                            className="invoice-modal__qty "
                            style={{ textAlign: "right" }}
                          >
                            $ 4,500.00
                          </h6>
                          <h6
                            className="invoice-modal__qty"
                            style={{ textAlign: "right" }}
                          >
                            $450.00
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
                            $ 4,950.00
                          </h6>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <img src={HrInvoice} className="my-5 w-100" alt="" />
                <h6 className="text-left">Notes</h6>
                <p className="fw-light w-75 text-left fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  id turpis malesuada nibh.
                </p>
                <img src={HrInvoice} className="my-5 w-100" alt="" />
                <h6 className="add-item">WWW.LOGOHERE.COM</h6>
                <img src={HrInvoice} className="my-5 w-100" alt="" />
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
                  <h6 className="save-pdf py-2 px-4">Print</h6>
                  <h6 className="py-2 ms-3 px-4 send align-items-center ">
                    Send
                  </h6>
                </div>
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
              <h6 className="py-2 ms-3 px-4 me-2 send align-items-center ">
                Edit Invoice
              </h6>
              <h6 className="blue-btn py-2 px-4">More Actions</h6>
            </div>
            {showOptions ? (
              <div className="more-actions-container">
                <h6 className="px-4 slightly-black action-menu pt-4">
                  New Invoice
                </h6>
                <h6 className="px-4 slightly-black action-menu pt-4">
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
                <h6 className="px-4 slightly-black action-menu pt-4">
                  Print Invoice
                </h6>
                <h6 className="px-4 slightly-black action-menu pt-4">
                  Download PDF
                </h6>
                <h6 className="px-4 slightly-black action-menu py-4">
                  Delete Invoice
                </h6>
              </div>
            ) : null}
            <div className="my-4 py-5 px-4 bg-white">
              <h6 className="text-center fs-6 fw-light slightly-black mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                Lorem ipsum dolor sit amet, consectetur
              </h6>
              <div className="d-inline-flex w-100">
                <h6 className="py-2 mx-auto mt-3 px-4 send align-items-center ">
                  Send Receipt
                </h6>
              </div>
            </div>
            <div className="my-4 py-5 px-4 bg-white">
              <h6 className="text-center fs-6 fw-light slightly-black mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                Lorem ipsum dolor sit amet, consectetur
              </h6>
              <div className="d-inline-flex w-100">
                <h6 className="py-2 mx-auto mt-3 px-4 send align-items-center ">
                  Mark as not paid
                </h6>
              </div>
            </div>
            <div className="my-4 py-2 px-2 bg-white">
              <div className="light-blue-bg d-inline-flex w-100 px-3 py-3">
                <h6 className="my-auto fw-light slightly-black">
                  Lorem ipsum dolor sit amet,{" "}
                </h6>
                <img src={LockKey} className="ms-auto" alt="" />
              </div>
            </div>
            <h6
              className="py-3 text-center px-4 send w-100 mb-4"
              style={{ textAlign: "center" }}
            >
              Make Recurring
            </h6>
            <h6 className="blue-btn py-3 px-4">Preview as Client</h6>
          </Col>
        </Row>
      </div>
      <Modal modalState={showSettings} setModalState={setShowSettings}>
        <div className="add-client-wrapper text-center ">
          <div className="add-client-text text-center">
            <h3>Invoice Settings</h3>
          </div>
          <form className="business-form mt-4">
            <label className="text-left w-100">Currency</label>
            <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
              <option value="">Select option</option>
              <option value="">Nigerian Naira - NGN</option>
            </select>
            <label className="text-left w-100">Issues DATE</label>
            <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
              <option value="">Select option</option>
              <option value="">23/05/2021</option>
            </select>
            <label className="text-left w-100">Reminder</label>
            <select name="" className="bank-select w-100 px-3 py-3 mb-2" id="">
              <option value="">Select option</option>
              <option value="">Don’t send auto reminder</option>
            </select>
            <div className="pt-2 pb-3">
              <Button className="px-5">Update Settings</Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default InvoiceDetailsPage;
