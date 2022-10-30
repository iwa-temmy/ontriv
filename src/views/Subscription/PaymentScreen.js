import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Row,
  Col,
  Card,
} from "reactstrap";
import greenMark from "../../assets/img/green-icon.svg";

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
    <div style={{ height: "calc(100vh - 180px)" }}>
      <Row>
        <Col sm="12" md="6" lg="6">
          <Accordion flush open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>This is the second item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
        <Col sm="12" md="6" lg="6">
          <Card>
            <main className="payment-intiation-card">
              <div className="d-flex align-items-center justify-content-between">
                <h1>Your Plan</h1>
                <div>
                  <span>Pro</span>
                  <img
                    src={greenMark}
                    style={{ height: "60px" }}
                    className="my-auto"
                    alt=""
                  />
                </div>
              </div>
            </main>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentScreen;
