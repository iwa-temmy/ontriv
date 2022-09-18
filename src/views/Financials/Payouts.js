import React, { useEffect } from "react";

//core components
import { Row, Col, Card } from "reactstrap";
import Table from "../../components/Table";
import {
  paymentStatus,
  formatInvoiceIssueDate,
  formatAmount,
} from "../../utils/helper";
import createNotification from "../../utils/Notification";
import { Bars } from "react-loader-spinner";

//redux
import { connect } from "react-redux";
import { getAllPayoutRequests } from "../../redux/actions";

const Payouts = (props) => {
  const { getAllPayoutRequests, loading, payoutRequests, error } = props;
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
        Cell: (props) => <>{formatInvoiceIssueDate(props.value)}</>,
      },
      {
        Header: "Amount",
        accessor: "amount",
        cellClass: "pt-4 list-client-item-finance  ",
        Cell: (props) => <>{formatAmount(props.value)}</>,
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
    if (!loading && error?.length > 0) {
      createNotification("error", error);
    }
  }, [error, loading]);
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

      <div className="mb-0 mt-1 overflow-auto" style={{height: "65vh"}}>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: "6rem" }}
          >
            <Bars height="100" width="100" color="#2062F4" />
          </div>
        ) : (
          <Table
            columns={cols}
            data={payoutRequests}
            divided
            defaultPageSize={6}
            pagePosition="left"
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state?.invoice?.loading?.getAllPayoutRequests,
    payoutRequests: state?.invoice?.payoutRequests,
    error: state?.invoice?.error?.getAllPayoutRequests,
  };
};

export default connect(mapStateToProps, { getAllPayoutRequests })(Payouts);
