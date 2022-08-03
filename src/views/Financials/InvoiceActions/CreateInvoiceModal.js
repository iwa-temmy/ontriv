import React, { useState, useEffect } from "react";
import XCancel from "../../../assets/img/x-cancel.svg";
import { BiPlus } from "react-icons/bi";
import { Form, Input, Row, Col } from "reactstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { calculateTotal } from "../../../utils/helper";
import Select from 'react-select';

//redux
import {connect} from 'react-redux';

const CreateInvoiceModal = ({ clients, closeInvoiceModal }) => {
  const [schedule, setSchedule] = useState({});
  const [formData, setFormData] = useState({});
  const [items, setItems] = useState([]);
  const [recurring, setRecurring] = useState(false);

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

  const handleCloseInvoiceModal = () => {
    setSchedule({});
    setFormData({});
    setItems([]);
    closeInvoiceModal();

  }
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
  return (
    <div className="off-canvas-menu">
      <div className="off-canvas-menu__content px-4 py-4">
        <div className="d-inline-flex w-100">
          <div className="add-client-text text-center">
            <h5>Create new invoice</h5>
          </div>
          <img
            onClick={handleCloseInvoiceModal}
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
          <label className="text-left w-100 mt-2">Project/Description</label>
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
            <span className="btn btn-primary me-auto" onClick={handleAddItem}>
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
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    const {auth} = state;
    return {
        clients: auth?.currentUser?.client_list,
    }
}
export default connect(mapStateToProps, {})(CreateInvoiceModal);