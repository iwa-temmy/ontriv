import { useState, useEffect } from "react";
import { Card, Col, Input, Row } from "reactstrap";
import GreenCircle from "../../assets/img/finanace-green-circle.svg";
import YellowCircle from "../../assets/img/finanace-yellow-circle.svg";
import BluePlus from "../../assets/img/bg-blue-plust.svg";
import XCancel from "../../assets/img/x-cancel.svg";
import SelectUserImg from "../../assets/img/select-user-example-img.png";
import AddNewClient from "./AddClient.js";
import Select from "react-select";
import ListView from "./ListView.js";
import ExpenseListView from "./ExpenseView.js";

//redux
import { connect } from "react-redux";
import { getAllInvoices } from "../../redux/actions";

//utils
import CreateInvoiceModal from "./InvoiceActions/CreateInvoiceModal";
import RequestPayoutModal from "./InvoiceActions/RequestPayoutModal";

const Finances = ({ getAllInvoices, invoices, getInvoiceLoading }) => {
  const [view] = useState("list");
  const [addClient, setAddClient] = useState(false);
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [invoiceTab, setInvoiceTab] = useState("invoice");
  const [show, setShow] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [showVendor, setShowVendor] = useState(false);

  //useEffect
  useEffect(() => {
    getAllInvoices();
  }, [getAllInvoices]);

  const openInvoiceModal = () => {
    setShow(true);
  }
  const closeInvoiceModal = () => {
    setShow(false);
  };

  const openRequestPayoutModal = () => {
    setShowPayoutModal(true);
  }
  const options = [
    {
      value: "chocolate",
      label: (
        <div>
          <img
            src={SelectUserImg}
            height="30px"
            width="30px"
            className="me-3"
            alt=""
          />
          USER 1{" "}
        </div>
      ),
    },
    {
      value: "strawberry",
      label: (
        <div>
          <img
            src={SelectUserImg}
            height="30px"
            width="30px"
            className="me-3"
            alt=""
          />
          USER 2{" "}
        </div>
      ),
    },
    {
      value: "vanilla",
      label: (
        <div>
          <img
            src={SelectUserImg}
            height="30px"
            width="30px"
            className="me-3"
            alt=""
          />
          USER 3{" "}
        </div>
      ),
    },
  ];

  return (
    <>
      {show ? (
        <CreateInvoiceModal closeInvoiceModal={closeInvoiceModal} />
      ) : null}
      {showExpense ? (
        <div className="off-canvas-menu">
          <div className="off-canvas-menu__content px-5 py-2">
            <div className="d-inline-flex w-100">
              <div className="add-client-text text-center">
                <h5>Add new expense</h5>
              </div>
              <img
                onClick={() => setShowExpense(false)}
                className="ms-auto"
                src={XCancel}
                alt=""
              />
            </div>

            <label className="text-left w-100">Select Vendor</label>
            <Select name="name" value="strawberry" options={options} />
            <label className="text-left w-100 mt-4">Select Category</label>
            <Select name="name" value="strawberry" options={options} />
            <Row className="mt-4">
              <Col xl="6">
                <label className="text-left w-100">Date</label>
                <Input
                  type="date"
                  placeholder="14/04/2021"
                  className="off-canvas-menu__input py-3 px-3"
                />
              </Col>
              <Col xl="6">
                <label className="text-left w-100">Amount</label>
                <Input
                  type="number"
                  placeholder="$300"
                  className="off-canvas-menu__input py-3 px-3"
                />
              </Col>
            </Row>
            <label className="text-left w-100 mt-4">Select Category</label>
            <select name="" className="off-canvas-menu__input px-4 py-2" id="">
              <option value="">Monthly</option>
            </select>
            <div>
              <label className="text-left w-100 mt-4">Remarks</label>
              <textarea className="w-100 rounded-3 mt-2 canvas-textarea"></textarea>
            </div>
            <div className="mt-4 d-inline-flex">
              <input type="checkbox" className="my-auto" />
              <h6 className="fs-6 my-auto ms-2 fw-light">
                Attach file to expense record (.docx, .pdf, .jped)
              </h6>
            </div>
            <div className="mt-2 mb-5 d-inline-flex">
              <input type="checkbox" className="my-auto" />
              <h6 className="fs-6 my-auto ms-2 fw-light">
                This is a recurring expense (monthly)
              </h6>
            </div>
            <div className="d-inline-flex mt-2 w-100 mb-4">
              <div className="py-3 ms-3 ms-auto px-4 send align-items-center ">
                <h6 className="mb-0">Add Expense</h6>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showVendor ? (
        <div className="off-canvas-menu">
          <div className="off-canvas-menu__content px-5 py-2">
            <div className="d-inline-flex w-100">
              <div className="add-client-text text-center">
                <h5>Add new vendor</h5>
              </div>
              <img
                onClick={() => setShowVendor(false)}
                className="ms-auto"
                src={XCancel}
                alt=""
              />
            </div>

            <label className="text-left w-100">Vendor Name</label>
            <Input
              type="text"
              placeholder=""
              className="off-canvas-menu__input py-3 px-3"
            />
            <label className="text-left w-100">Email Address</label>
            <Input
              type="email"
              placeholder=""
              className="off-canvas-menu__input py-3 px-3"
            />
            <label className="text-left w-100 mt-4">Phone Number</label>
            <Input
              type="tel"
              placeholder=""
              className="off-canvas-menu__input py-3 px-3"
            />
            <div>
              <label className="text-left w-100 mt-4">Address</label>
              <textarea className="w-100 rounded-3 mt-2 canvas-textarea"></textarea>
            </div>
            <div className="d-inline-flex mt-2 w-100 mb-4">
              <div className="py-3 ms-3 ms-auto px-4 send align-items-center ">
                <h6 className="mb-0">Add Vendor</h6>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="dashboard dashboard-wrapper">
        <Row>
          <Col md="12" sm="12" lg="6" xl="6" className="mb-3">
            <Card className="py-4 px-4 finances__top-cards">
              <Row>
                <Col
                  md="7"
                  sm="16"
                  lg="8"
                  xl="8"
                  className="finances__top-cards__left-half"
                >
                  <h6 className="finances__top-cards__title">Total Received</h6>
                  <h6 className="finances__top-cards__amount-big mt-3">
                    <span className="mr-2 finances__top-cards__currency">
                      $
                    </span>{" "}
                    0.00
                  </h6>
                  <div>
                    <h6 className="finances__top-cards__bonus text-center py-0 mx-auto">
                      +10% In the past month
                    </h6>
                  </div>
                </Col>
                <Col md="7" sm="16" lg="8" xl="4" className="px-3">
                  <div className="finances__top-cards__title d-inline-flex w-100">
                    <img src={GreenCircle} className="me-2" alt="" />
                    <h6 className="my-auto mp-2">Received</h6>
                  </div>
                  <h6 className="finances__top-cards__amount-small ms-3 ps-1">
                    $0.00
                  </h6>
                  <div className="finances__top-cards__title d-inline-flex mt-3 w-100">
                    <img src={YellowCircle} className="me-2" alt="" />
                    <h6 className="my-auto mp-2">Pending</h6>
                  </div>
                  <h6 className="finances__top-cards__amount-small ms-3 ps-1">
                    $0.00
                  </h6>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md="12" sm="12" lg="6" xl="6" className="mb-3">
            <Row className="h-100">
              <Col xl="6">
                <Card className="py-4 px-4 h-100 finances__top-cards">
                  <div md="7" sm="16" lg="8" xl="8" className="">
                    <h6 className="my-auto mp-2">Payout</h6>
                    <h6 className="finances__top-cards__amount-big mt-3">
                      <span className="mr-2 finances__top-cards__currency">
                        $
                      </span>{" "}
                      0.00
                    </h6>
                  </div>
                </Card>
              </Col>
              <Col xl="6">
                <Card className="py-4 h-100 px-4 finances__top-cards">
                  <div md="7" sm="16" lg="8" xl="8" className="">
                    <h6 className="my-auto mp-2">Expenses</h6>
                    <h6 className="finances__top-cards__amount-big mt-3">
                      <span className="mr-2 finances__top-cards__currency">
                        $
                      </span>{" "}
                      0.00
                    </h6>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-between align-items-center my-4 flex-wrap">
          {invoiceTab === "invoice" ? (
            <div className="mr-auto cursor-pointer d-inline-flex">
              <div
                className="btn-lg  create-button align-items-center "
                onClick={() => {
                  setInvoiceTab("invoice");
                }}
              >
                <h6 className="mb-0">Invoice Overview</h6>
              </div>
              <div
                className="btn-lg  align-items-center "
                onClick={() => {
                  setInvoiceTab("expenses");
                }}
              >
                <h6 className="mb-0">Expenses</h6>
              </div>
            </div>
          ) : (
            <div className="mr-auto cursor-pointer d-inline-flex">
              <div
                className="btn-lg align-items-center "
                onClick={() => {
                  setInvoiceTab("invoice");
                }}
              >
                <h6 className="mb-0">Invoice Overview</h6>
              </div>
              <div
                className="btn-lg create-button align-items-center "
                onClick={() => {
                  setInvoiceTab("expenses");
                }}
              >
                <h6 className="mb-0">Expenses</h6>
              </div>
            </div>
          )}
          {invoiceTab === "invoice" ? (
            <div className="d-flex justify-content-between align-items-center client-management-control">
              <div className="d-inline-flex white-button py-1 px-4 me-4">
                <div
                  className="btn-lg w-auto "
                  onClick={openRequestPayoutModal}
                >
                  <h6 className="mb-0">Request Payout</h6>
                </div>
              </div>
              <div className="d-inline-flex white-button py-1 px-4">
                <img src={BluePlus} alt="" />
                <div className="btn-lg w-auto " onClick={openInvoiceModal}>
                  <h6 className="mb-0 cursor-pointer">Create a new Invoice</h6>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-center client-management-control">
              <div className="d-inline-flex white-button py-1 px-4">
                <img src={BluePlus} alt="" />
                <div className="btn-lg w-auto ">
                  <h6
                    onClick={() => setShowExpense(true)}
                    className="mb-0 cursor-pointer"
                  >
                    Add Expense
                  </h6>
                </div>
              </div>
              <div className="d-inline-flex white-button py-1 px-4">
                <img src={BluePlus} alt="" />
                <div
                  className="btn-lg w-auto "
                  onClick={() => setShowVendor(true)}
                >
                  <h6 className="mb-0 cursor-pointer">Add Vendor</h6>
                </div>
              </div>
            </div>
          )}
        </div>
        {invoiceTab === "invoice" ? (
          view === "list" ? (
            <ListView invoices={invoices} loading={getInvoiceLoading} openInvoiceModal={openInvoiceModal}/>
          ) : (
            <div className="client-inactive-state text-center">
              <Card className="client-inactive-state-card mx-auto">
                <h3 className="client-inactive-header-text mx-auto">
                  You currently have no client
                </h3>
                <h3 className="client-inactive-header-text mx-auto">
                  you can add a new client.
                </h3>
                <p className="client-inactive-subhead-text mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div
                  className=" client-create-button "
                  onClick={() => {
                    setAddClient(true);
                  }}
                >
                  <h6 className="mb-0">ADD A NEW CLIENT</h6>
                </div>
              </Card>
            </div>
          )
        ) : view === "list" ? (
          <ExpenseListView />
        ) : (
          <div className="client-inactive-state text-center">
            <Card className="client-inactive-state-card mx-auto">
              <h3 className="client-inactive-header-text mx-auto">
                You currently have no client
              </h3>
              <h3 className="client-inactive-header-text mx-auto">
                you can add a new client.
              </h3>
              <p className="client-inactive-subhead-text mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <div
                className=" client-create-button "
                onClick={() => {
                  setAddClient(true);
                }}
              >
                <h6 className="mb-0">ADD A NEW CLIENT</h6>
              </div>
            </Card>
          </div>
        )}
        {addClient && (
          <AddNewClient addState={addClient} setAddState={setAddClient} />
        )}
        <RequestPayoutModal showRequestPayout={showPayoutModal} setShowRequestPayout={setShowPayoutModal} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { invoice } = state;
  return {
    invoices: invoice?.invoices,
    getInvoiceLoading: invoice?.getInvoiceLoading,
  };
};
export default connect(mapStateToProps, { getAllInvoices })(Finances);
