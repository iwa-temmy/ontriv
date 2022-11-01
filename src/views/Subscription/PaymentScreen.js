import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Row,
  Col,
  Card,
  Form,
  Input,
} from "reactstrap";
import greenMark from "../../assets/img/green-icon.svg";
import stripeSafelock from "../../assets/img/stripe-safelock-badge.svg";

//utils
import { faqQuestions } from "../../utils/faq";

const PaymentScreen = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div style={{ height: "calc(100vh - 190px)" }}>
      <Row className="align-items-center h-100 px-3">
        <Col sm="12" md="6" lg="6">
          <div className="faq-section">
            <h1 className="main-header">The Last Step</h1>
            <p className="subheader">Complete Payment</p>
            <Accordion flush open={open} toggle={toggle}>
              {faqQuestions?.map((faq) => {
                return (
                  <AccordionItem key={faq.id}>
                    <AccordionHeader targetId={faq.id?.toString()}>
                      {faq.header}
                    </AccordionHeader>
                    <AccordionBody accordionId={faq.id?.toString()}>
                      {faq.body}
                    </AccordionBody>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </Col>
        <Col sm="12" md="6" lg="6">
          <Card>
            <main className="payment-intiation-card">
              <div className="d-flex align-items-center justify-content-between header px-4 pt-2">
                <h1>Your Plan</h1>
                <div className="d-flex justify-content-center align-items-center">
                  <span>Pro</span>
                  <img
                    src={greenMark}
                    style={{ height: "60px" }}
                    // className="my-auto"
                    alt=""
                  />
                </div>
              </div>
              <Form className="px-4 pt-4">
                <Row>
                  <Col sm="12" md="12" lg="12" className="my-3">
                    <label className="text-left w-100">Card Number</label>
                    <Input
                      type="text"
                      name="Card number"
                      // onChange={handleInputChange}
                      // value={""}
                      placeholder="0000 0000 0000 0000"
                      className="off-canvas-menu__input py-3 px-3"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="6" md="6" lg="6" className="my-3">
                    <label className="text-left w-100">Card Number</label>
                    <Input
                      type="month"
                      name="Expiration date"
                      // onChange={handleInputChange}
                      // value={""}
                      placeholder="MM/YYY"
                      className="off-canvas-menu__input py-3"
                    />
                  </Col>
                  <Col sm="6" md="6" lg="6" className="my-3">
                    <label className="text-left w-100">Security code</label>
                    <Input
                      type="text"
                      name="Expiration date"
                      // onChange={handleInputChange}
                      // value={""}
                      placeholder="Card number"
                      className="off-canvas-menu__input py-3"
                    />
                  </Col>
                </Row>
                <div>
                  <button>Start Free Trial</button>
                </div>
                <div>
                  <img
                    src={stripeSafelock}
                    width="100%"
                    alt="stripe Safe lock badge"
                  />
                </div>
              </Form>
            </main>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentScreen;
