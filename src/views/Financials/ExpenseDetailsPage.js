import React, {useEffect, useState} from "react";
import moment from "moment";
import { useLocation } from "react-router-dom";
//core components
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const ExpenseDetailsPage = () => {
  const [expenseDetails, setExpenseDetails] = useState({})
  const location = useLocation();

  console.log(location.state);
  useEffect(() => {
    if(location?.state){
      setExpenseDetails(location?.state)
    }
  }, [location?.state])
  return (
    <div className="expense-details-card-container">
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="text-center mt-3">
            Expense Details
          </CardTitle>
          <div className="cardbody">
            <Row>
              <Col lg="4" md="4" className="text-center py-5">
                <h6 className="title">Vendor Name</h6>
                <p className="content">{expenseDetails?.vendor?.name}</p>
              </Col>
              <Col lg="4" md="4" className="text-center py-5">
                <h6 className="title">Category</h6>
                <p className="content">{expenseDetails?.category}</p>
              </Col>
              <Col lg="4" md="4" className="text-center py-5">
                <h6 className="title">Date</h6>
                <p className="content">{moment(expenseDetails?.date).format("DD/MM/YYYY")}</p>
              </Col>
              <Col lg="4" md="4" className="text-center py-5">
                <h6 className="title">Amount</h6>
                <p className="content">{expenseDetails?.amount}</p>
              </Col>
              <Col lg="4" md="4" className="text-center py-5">
                <h6 className="title">Attachments</h6>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExpenseDetailsPage;
