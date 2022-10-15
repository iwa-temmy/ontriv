import React from "react";
import { Col, Card } from "reactstrap";
import EmptyDashboardState from "../../../components/Utilities/EmptyDashboardState";
import { HiChevronRight } from "react-icons/hi";

const ClientCard = (props) => {
  const { handleAddClient } = props;
  return (
    <Col lg="12" md="5" xl="5" className="mb-3 col-cstm-xl-4">
      <Card className="client-card">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="pl-2 client-overview-header mb-0">Clients</h4>
            <p className="mb-0">
              See all{" "}
              <span>
                <HiChevronRight size="24px" color="#49A8F8" />
              </span>
            </p>
          </div>
        </div>

        <EmptyDashboardState
          subHeaderText="Add a new client to get started"
          buttonText="Add a New client"
          onClick={handleAddClient}
        />
      </Card>
    </Col>
  );
};

export default ClientCard;
