import React, { useEffect } from "react";

//core components
import { Row, Col, Card } from "reactstrap";
import Table from "../../components/Table";
import { paymentStatus } from "../../utils/helper";

//redux
import { connect } from "react-redux";
import { getAllPayoutRequests } from "../../redux/actions";

const Payouts = (props) => {
  const { getAllPayoutRequests } = props;
  const cols = React.useMemo(
    () => [
      {
        Header: "Bank Name",
        accessor: "bank_name",
        cellClass: "pt-4 list-client-item-finance ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Account Number",
        accessor: "account_number",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Date",
        accessor: "created_at",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Amount",
        accessor: "amount",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Status",
        accessor: "status",
        cellClass: "pt-3  list-client-item-finance ",
        Cell: (props) => (
          <>{props.value ? paymentStatus("Paid") : paymentStatus("Pending")}</>
        ),
      },
    ],
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    getAllPayoutRequests();
  }, [getAllPayoutRequests]);
  return (
    <div className="dashboard dashboard-wrapper">
      <Row>
        <Col md="4" sm="12" lg="4" xl="4" className="mb-3">
          <Card className="py-4 px-5 h-100 finances__top-cards">
            <div md="7" sm="16" lg="8" xl="8" className="">
              <h6 className="finances__top-cards__title my-auto mp-2">
                Total Payout
              </h6>
              <h6 className="finances__top-cards__amount-big mt-3">
                <span className="mr-2 finances__top-cards__currency">$</span>{" "}
                0.00
              </h6>
            </div>
          </Card>
        </Col>
        <Col md="4" sm="12" lg="4" xl="4" className="mb-3">
          <Card className="py-4 px-5 h-100 finances__top-cards">
            <div md="7" sm="16" lg="8" xl="8" className="">
              <h6 className="finances__top-cards__title my-auto mp-2">
                Wallet Balance
              </h6>
              <h6 className="finances__top-cards__amount-big mt-3">
                <span className="mr-2 finances__top-cards__currency">$</span>{" "}
                0.00
              </h6>
            </div>
          </Card>
        </Col>
        <Col md="4" sm="12" lg="4" xl="4" className="mb-3">
          <Card className="py-4 h-100 px-5 finances__top-cards">
            <div md="7" sm="16" lg="8" xl="8" className="">
              <h6 className="finances__top-cards__title my-auto mp-2">
                Pending Payouts
              </h6>
              <h6 className="finances__top-cards__amount-big mt-3">
                <span className="mr-2 finances__top-cards__currency">$</span>{" "}
                0.00
              </h6>
            </div>
          </Card>
        </Col>
      </Row>

      <div className="mb-0 mt-1 overflow-auto">
        <Table
          columns={cols}
          data={[]}
          divided
          defaultPageSize={6}
          pagePosition="left"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getAllPayoutRequests })(Payouts);
