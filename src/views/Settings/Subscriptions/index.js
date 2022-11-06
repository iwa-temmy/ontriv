import React, { useState } from "react";
import Table from "../../../components/Table";
import { Card, Col, Row } from "reactstrap";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import CancelPlanModal from "./Components/CancelPlanModal";

const Billing = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const clients = [
    {
      id: 1,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 2,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 3,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 4,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 5,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 6,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 7,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 8,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 9,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 10,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 11,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },

    {
      id: 13,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
    {
      id: 14,
      name: "Monthly Plan",
      invoiceNo: "#101",
      createDate: "03/24/21",
      amount: "$1000.00",
      status: "Paid",
    },
  ];

  const cols = React.useMemo(
    () => [
      {
        Header: "Your Plan",
        accessor: "name",
        cellClass: "subscription-data-item pt-3",
        Cell: (props) => <p>{props.value}</p>,
      },
      {
        Header: "Date",
        accessor: "createDate",
        cellClass: "pt-3 subscription-data-item",
        Cell: (props) => <p>{props.value}</p>,
      },

      {
        Header: "Amount",
        accessor: "amount",
        cellClass: "pt-3 subscription-data-item-bold ",
        Cell: (props) => <p>{props.value}</p>,
      },
      {
        Header: "Status",
        accessor: "status",
        cellClass: "pt-2  subscription-data-item text-center d-flex",
        Cell: (props) => (
          <p className=" subscription-status ">
            <GoPrimitiveDot color="" className="mb ml-2" />

            {props.value}
          </p>
        ),
      },
    ],
    []
  );

  const toggleCancelSubscriptionModal = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <div className="subscription-section">
      <Row>
        <Col sm="12" xl="5" className="mb-2">
          <div className="left-section mt-4">
            <h1 className="mb-4 left-section-title">Subscription</h1>
            <Card className="subscription-details-card">
              <h1 className="text-center subscription-details-title">
                Current Plan
              </h1>
              <div className="subscription-price-wrapper d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center">
                  <h1 className="mt-3 p-0">$</h1>
                  <h1 className="subscription-price p-0">40</h1>
                </div>
                <h2 className="subcription-plan-name">Starter</h2>
              </div>
              <Link to="/Subscriptions" className="w-50 delete-btn">
                Change Plan
              </Link>
              <button
                className="w-50 delete-btn"
                onClick={toggleCancelSubscriptionModal}
              >
                Cancel Plan
              </button>
            </Card>
          </div>
        </Col>
        <Col sm="12" xl="7" className="right-section-container">
          <div className="right-section mt-5">
            <h1 className="right-section-title">Subscription History</h1>
            <div className="mb-0 mt-2 overflow-auto">
              <Table
                columns={cols}
                data={clients}
                dividedRow
                defaultPageSize={6}
                pagePosition="left"
              />
            </div>
          </div>
        </Col>
      </Row>
      <CancelPlanModal
        open={ModalOpen}
        setModalState={setModalOpen}
        toggleCancelSubscriptionModal={toggleCancelSubscriptionModal}
      />
    </div>
  );
};
export default Billing;
