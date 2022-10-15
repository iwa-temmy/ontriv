import React from "react";
import { Col, Card } from "reactstrap";
import { HiPlus, HiChevronRight } from "react-icons/hi";
import Select from "react-select";
import chart from "../../../assets/img/chart.png";

const FinancialCard = (props) => {
  const { handleAddInvoice } = props;
  return (
    <Col lg="12" md="7" xl="7" className="mb-3  nn">
      <Card className="overview-card">
        <div className="finacial-overview">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="pl-2 financial-overview-header mb-0">
              Financial Overview
            </h4>
            <Select defaultInputValue="March" placeholder="March" />
          </div>
          <div className="financial-overview-chart">
            <div className="chart-container">
              <img src={chart} alt="chart" />
            </div>
          </div>
        </div>

        <div className="invoice-overview">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="pl-2 financial-overview-header mb-0">
              Invoice Overview
            </h4>
            <p className="mb-0">
              See more{" "}
              <span>
                <HiChevronRight size="24px" color="#49A8F8" />
              </span>
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center h-100"
          style={{ margin: "1.5rem 0" }}
        >
          <div className="text-center pt-3" style={{ whiteSpace: "nowrap" }}>
            <p>Get started by creating your first invoice</p>
          </div>

          <button
            className="btn btn-primary send px-5 py-2"
            style={{ whiteSpace: "nowrap" }}
            onClick={handleAddInvoice}
          >
            <HiPlus color="#2465ec" className="create-icon" /> Create Invoice
          </button>
          {/* <button className="py-3 create-button  align-items-center ">
                      <HiPlus color="#2465ec" className="create-icon" />
                      <h6 className="mb-0"></h6>
                    </button> */}
        </div>
      </Card>
    </Col>
  );
};

export default FinancialCard;
