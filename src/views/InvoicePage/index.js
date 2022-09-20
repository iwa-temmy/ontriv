import React, { useEffect, useState } from "react";
import { Row, Col, Nav, NavItem, Container } from "reactstrap";
import TitleModalLogoHere from "../../assets/img/businessLogo.svg";
import { Bars } from "react-loader-spinner";
//utils
import {
  stringDateFormat,
  invoicePaymentStatus,
  formatAmount,
  calculateVat,
  downloadPdf,
  pdfWithPrintJs,
} from "../../utils/helper";

//icons
import HrInvoice from "../../assets/img/hr-invoice.svg";
import { useLocation } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { getInvoice } from "../../redux/actions";
import createNotification from "../../utils/Notification";

const InvoicePage = (props) => {
  const { logo, website_url, getInvoice, invoice, loading, message, error } =
    props;
  const [pageData, setPageData] = useState(null);

  const location = useLocation();

  //functions
  const DownloadInvoicePdf = () => {
    downloadPdf("invoice");
  };
  const getPDF = () => {
    pdfWithPrintJs("invoice", `invoice-${location?.pathname.split("/")?.[2]} `);
  };

  useEffect(() => {
    if (!loading && message?.length > 0) {
      setTimeout(() => setPageData(invoice), 1000);
    } else if (!loading && error?.length > 0) {
      createNotification("error", error);
    } else {
      setPageData(null);
    }
  }, [loading, message, error]);
  useEffect(() => {
    getInvoice(location?.pathname.split("/")?.[2]);
  }, [getInvoice, location?.pathname.split("/")?.[2]]);
  return (
    <>
      <Nav className="p-4 justify-content-end border border-bottom-1">
        <NavItem>
          <span className="outline-btn" onClick={DownloadInvoicePdf}>
            Download Invoice
          </span>
        </NavItem>
        <NavItem>
          <span className="outline-btn" onClick={getPDF}>
            Print Invoice
          </span>
        </NavItem>
      </Nav>
      <Container>
        <Row className="p-4 w-100 bg-light align-items-start">
          <Col md="12">
            <div className="mt-5 p-5 d-flex justify-content-between align-items-center">
              <p style={{ width: "50%" }}>
                Having confirmed this details of this invoice. Proceed to make
                payment by clicking the button below{" "}
              </p>
              <button
                style={{
                  textDecoration: "none",
                  backgroundColor: "#2062F4",
                  color: "#fff",
                  padding: "0.7rem",
                  borderRadius: "14px",
                  cursor: "pointer",
                  border: 0,
                }}
              >
                PAY NOW!
              </button>
            </div>
          </Col>
          <Col md="12">
            {loading || !pageData ? (
              <div className="position-fixed top-50 start-50">
                <Bars height="100" width="100" color="#2062F4" />
              </div>
            ) : (
              <div
                id="invoice"
                className="p-5 m-4"
                style={{ border: "2px solid #2062F4", backgroundColor: "#fff" }}
              >
                <div className="add-client-wrapper-2 text-center ">
                  <div className="d-inline-flex" style={{ width: "100%" }}>
                    <img
                      className="me-auto mb-3"
                      src={
                        pageData?.extra_details?.business_logo
                          ? pageData?.extra_details?.business_logo
                          : TitleModalLogoHere
                      }
                      width="100px"
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
                        <h6
                          className="invoice-modal__light text-right"
                          style={{ textAlign: "right" }}
                        >
                          {pageData?.client?.client_email || "No Email"}
                        </h6>
                        <h6
                          className="invoice-modal__light text-right"
                          style={{ textAlign: "right" }}
                        >
                          {pageData?.client?.client_phone_number !== "Null"
                            ? pageData?.client?.client_phone_number
                            : ""}
                        </h6>
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-end mt-3">
                    <Col sm="6" lg="6" xl="6">
                      <div className="mb-4">
                        <h6 className="invoice-modal__light text-left">
                          Issue Date
                        </h6>
                        <h6 className="invoice-modal__bold text-left mb-3">
                          {stringDateFormat(pageData?.issued_on)}
                        </h6>
                      </div>
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
                      {invoicePaymentStatus(pageData?.status)}
                    </Col>
                  </Row>

                  <img src={HrInvoice} className="w-100" alt="" />
                  <div className="mt-5 invoice-modal__grey-section w-100 py-4 px-4">
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
                    {pageData?.items?.map((item) => {
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
                            <h6 className="invoice-modal__item ">
                              {item?.quantity}
                            </h6>
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
                    <Col className="ms-auto" xl="9">
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
                              className="invoice-modal__item "
                              style={{ textAlign: "right" }}
                            >
                              {formatAmount(pageData?.sub_total)}
                            </h6>
                            <h6
                              className="invoice-modal__item"
                              style={{ textAlign: "right" }}
                            >
                              $
                              {formatAmount(
                                calculateVat(pageData?.sub_total, pageData?.vat)
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
                  <h6 className="add-item mb-5">
                    {website_url || "www.yourwebsiteurl.com"}
                  </h6>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    invoice: state?.invoice?.invoice,
    loading: state?.invoice?.loading?.getInvoice,
    message: state?.invoice?.message?.getInvoice,
    error: state?.invoice?.error?.getInvoice,
  };
};
export default connect(mapStateToProps, { getInvoice })(InvoicePage);
