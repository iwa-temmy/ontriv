import React from "react";
import { Card, Row, Col } from "reactstrap";

const OverviewCards = () => {
  return (
    <Row>
      <Col md="12">
        <div className="dashboard-analytics">
          <Card className="analytics-card">
            <Row>
              <Col sm="12" md="4">
                <Card className="card-sm revenue h-100">
                  <h4 className="text-white">Revenue</h4>
                  <h5 className="text-white">
                    $ <span> 0.00</span>
                  </h5>
                </Card>
              </Col>
              <Col sm="12" md="4" className="card-sm-2 ">
                <Card className="card-sm posts h-100">
                  <h4 className="">No scheduled posts</h4>
                  <h5 className="">0</h5>
                </Card>
              </Col>
              <Col sm="12" md="4">
                <Card className="card-sm clients h-100">
                  <h4 className="">Number of clients</h4>
                  <h5 className="">0</h5>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default OverviewCards;
