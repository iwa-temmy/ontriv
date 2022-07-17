import { useState, useEffect } from "react";
import { Card, Col, Form, Input, Row } from "reactstrap";
import GreenCircle from "../../assets/img/finanace-green-circle.svg";
import YellowCircle from "../../assets/img/finanace-yellow-circle.svg";
import BluePlus from "../../assets/img/bg-blue-plust.svg";
import XCancel from "../../assets/img/x-cancel.svg";
import SelectUserImg from "../../assets/img/select-user-example-img.png";
import { BiPlus } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import AddNewClient from "./AddClient.js";
import Select from "react-select";
import ListView from "./ListView.js";
import ExpenseListView from "./ExpenseView.js";

//redux
import { connect } from "react-redux";
import { getAllInvoices } from "../../redux/actions";

//utils
import { calculateTotal } from "../../utils/helper";

const Finances = ({ clients, getAllInvoices, invoices, getInvoiceLoading }) => {
  const [view] = useState("list");
  const [addClient, setAddClient] = useState(false);
  const [invoiceTab, setInvoiceTab] = useState("invoice");
  const [show, setShow] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [showVendor, setShowVendor] = useState(false);
  const [schedule, setSchedule] = useState({});
  const [formData, setFormData] = useState({});
  const [items, setItems] = useState([]);
  const [recurring, setRecurring] = useState(false);

  //useEffect
  useEffect(() => {
    setItems([
      {
        id: 1,
        item_description: "",
        quantity: "",
        rate: "",
        amount: "",
      },
    ]);
  }, []);

  useEffect(() => {
    getAllInvoices();
  }, [getAllInvoices]);
  //functions
  const handleAddItem = () => {
    let id = items.length + 1;

    const newItem = {
      id: id,
      quantity: "0",
      rate: "0",
      amount: "0",
    };
    setItems([...items, newItem]);
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems?.splice(index, 1);
    setItems(newItems);
  };

  const closeInvoiceModal = () => {
    setSchedule({});
    setFormData({});
    setItems([]);
    setShow(false);
  };
  //Handle FormData Inputs
  //handle Never ending Select
  const handleNeverEndingChange = (value) => {
    setSchedule({ ...schedule, never_ending: value });
  };
  //handle Interval Select
  const handleIntervalChange = (value) => {
    setSchedule({ ...schedule, interval: value });
  };
  const handleItemInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log({ name, value, index });
    const newItems = items || [];
    newItems[index] = { ...newItems?.[index], [name]: value };
    newItems[index] = {
      ...newItems?.[index],
      amount: newItems?.[index]?.rate * newItems?.[index]?.quantity,
    };

    setItems([...newItems]);
  };

  //Recurring
  const handleRecurringCheck = () => {
    setRecurring(!recurring);
  };

  //handle ScheduleDates
  const handleDatesChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  //Handle Regular form Inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //handle Form Submission
  const handleCreateInvoice = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      schedule: {
        interval: schedule?.interval?.value,
        never_ending: schedule?.interval?.never_ending?.value,
        start_date: schedule?.start_date,
        end_date: schedule?.end_date,
      },
      items: items,
      recurring: recurring,
      currency: "Naira",
      total: calculateTotal(items),
      sub_total: calculateTotal(items),
    };
    console.log(payload);
    fetch("https://ontriv.herokuapp.com/invoice/api/v1/invoice/create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDE5NzU4LCJpYXQiOjE2NTgwMTM3NTgsImp0aSI6ImRjNGRjYTA4NThhZjRlNDFhNjgyNTM0ZWYwZDlmNjMyIiwidXNlcl9pZCI6MTV9.MLdsY16ZEwHnVo7TJa_MUbVGM3sxOUOr4t-gL_WbOvg`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          console.log("Yes");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const intervalOptions = [
    {
      value: "Monthly",
      label: <span>Monthly</span>,
    },
    {
      value: "Weekly",
      label: <span>Weekly</span>,
    },
    {
      value: "Daily",
      label: <span>Daily</span>,
    },
  ];
  const neverEndingOptions = [
    {
      value: true,
      label: <span>True</span>,
    },
    {
      value: false,
      label: <span>False</span>,
    },
  ];
  return (
    <>
      {show ? (
        <div className="off-canvas-menu">
          <div className="off-canvas-menu__content px-4 py-4">
            <div className="d-inline-flex w-100">
              <div className="add-client-text text-center">
                <h5>Create new invoice</h5>
              </div>
              <img
                onClick={closeInvoiceModal}
                className="ms-auto"
                src={XCancel}
                alt=""
              />
            </div>
            <Form onSubmit={handleCreateInvoice}>
              <label className="text-left w-100" htmlFor="client">
                Select Client
              </label>
              <Input
                className="off-canvas-menu__input py-3 px-3"
                type="select"
                name="client"
                id="client"
                value={formData?.client || ""}
                onChange={handleInputChange}
              >
                {clients?.map((client) => {
                  return (
                    <option value={client?.id} key={client?.id}>
                      {client?.fullname}
                    </option>
                  );
                })}
              </Input>
              {/* <Select name="name" value="strawberry" options={options} /> */}
              <label className="text-left w-100 mt-2">
                Project/Description
              </label>
              <Input
                type="text"
                name="description"
                onChange={handleInputChange}
                value={formData?.description || ""}
                placeholder="description"
                className="off-canvas-menu__input py-3 px-3"
              />
              <Row className="mt-2">
                <Col md="6">
                  <label className="text-left w-100">Issued on</label>
                  <Input
                    type="date"
                    name="issued_on"
                    onChange={handleInputChange}
                    value={formData?.issued_on || ""}
                    placeholder="Issued On"
                    className="off-canvas-menu__input py-3 px-3"
                  />
                </Col>
                <Col md="6">
                  <label className="text-left w-100">Due Date</label>
                  <Input
                    type="date"
                    name="due_date"
                    onChange={handleInputChange}
                    value={formData?.due_date || ""}
                    placeholder="Due Date"
                    className="off-canvas-menu__input py-3 px-3"
                  />
                </Col>
              </Row>
              <div className="mt-2 d-inline-flex">
                <input
                  type="checkbox"
                  name="recurring"
                  className="my-auto"
                  checked={recurring}
                  onChange={handleRecurringCheck}
                />
                <h6 className="fs-6 my-3 ms-2 fw-light">
                  This is a recurring invoice (monthly)
                </h6>
              </div>
              {recurring && (
                <>
                  <Row className="my-2">
                    <Col md="6">
                      <label className="text-left w-100">Interval</label>
                      <Select
                        name="interval"
                        value={schedule?.interval || ""}
                        onChange={handleIntervalChange}
                        options={intervalOptions}
                      />
                    </Col>
                    <Col md="6">
                      <label className="text-left w-100">Never Ending</label>
                      <Select
                        name="never_ending"
                        value={schedule?.never_ending || ""}
                        onChange={handleNeverEndingChange}
                        options={neverEndingOptions}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col md="6">
                      <label className="text-left w-100">Start Date</label>
                      <Input
                        type="date"
                        name="start_date"
                        value={schedule?.start_date || ""}
                        onChange={handleDatesChange}
                        placeholder="Start Date"
                        className="off-canvas-menu__input py-3 px-3"
                      />
                    </Col>
                    <Col md="6">
                      <label className="text-left w-100">End Date</label>
                      <Input
                        type="date"
                        name="end_date"
                        value={schedule?.end_date || ""}
                        onChange={handleDatesChange}
                        placeholder="End Date"
                        className="off-canvas-menu__input py-3 px-3"
                      />
                    </Col>
                  </Row>
                </>
              )}

              <Row className="mt-2">
                <Col md="4">
                  <label className="text-left w-100">Item Description</label>
                </Col>
                <Col md="2">
                  <label className="text-left w-100">QTY</label>
                </Col>
                <Col md="3">
                  <label className="text-left w-100">Rate</label>
                </Col>
                <Col md="2">
                  <label className="text-left w-100">Amount</label>
                </Col>
                <Col md="1"></Col>
              </Row>
              {items?.map((item, index) => {
                return (
                  <Row className="mt-2" key={item.id}>
                    <Col md="4">
                      <Input
                        type="text"
                        name="item_description"
                        placeholder="Description"
                        className="off-canvas-menu__input py-3 px-2"
                        value={item?.item_description || ""}
                        onChange={(e) => handleItemInputChange(e, index)}
                      />
                    </Col>
                    <Col md="2">
                      <Input
                        type="number"
                        name="quantity"
                        placeholder="Quantity "
                        value={item.quantity || ""}
                        className="off-canvas-menu__input py-3 px-2"
                        onChange={(e) => handleItemInputChange(e, index)}
                      />
                    </Col>
                    <Col md="3">
                      <Input
                        type="number"
                        name="rate"
                        placeholder="Rate"
                        value={item?.rate || ""}
                        className="off-canvas-menu__input py-3 px-2"
                        onChange={(e) => handleItemInputChange(e, index)}
                      />
                    </Col>
                    <Col md="2">
                      <h6 className="pt-3">
                        ${item?.rate * item?.quantity || "0.00"}
                      </h6>
                    </Col>
                    <Col md="1" className="pt-3">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => removeItem(index)}
                      >
                        <AiOutlineDelete color="red" size="20px" />
                      </span>
                    </Col>
                  </Row>
                );
              })}
              <div className="d-inline-flex mt-2 w-100 mt-4">
                <span
                  className="btn btn-primary me-auto"
                  onClick={handleAddItem}
                >
                  <BiPlus /> ADD ITEM
                </span>
                <h6 className="fw-light ms-auto me-4 my-auto">Total</h6>
                <h6 className="fw-bold ms-auto me-4 my-auto">
                  $ {calculateTotal(items) || "0.00"}
                </h6>
              </div>
              <div className="d-inline-flex mt-2 w-100 mb-2">
                <h6 className="add-item me-auto my-auto">Preview</h6>
                <div className="py-2 ms-3 px-4 align-items-center ">
                  <button className="btn btn-primary">Create</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
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
          <Col md="7" sm="16" lg="7" xl="5" className="mb-3">
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
          <Col md="7" sm="16" lg="9" xl="7" className="mb-3">
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
                  onClick={() => {
                    setAddClient(true);
                  }}
                >
                  <h6 className="mb-0">Request Payout</h6>
                </div>
              </div>
              <div className="d-inline-flex white-button py-1 px-4">
                <img src={BluePlus} alt="" />
                <div className="btn-lg w-auto " onClick={() => setShow(true)}>
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
            <ListView invoices={invoices} loading={getInvoiceLoading}/>
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
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { auth, invoice } = state;
  return {
    clients: auth?.currentUser?.client_list,
    invoices: invoice?.invoices,
    getInvoiceLoading: invoice?.getInvoiceLoading,
  };
};
export default connect(mapStateToProps, { getAllInvoices })(Finances);
