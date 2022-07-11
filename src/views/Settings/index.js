import { useState } from "react";
import { Card, TabContent, TabPane, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Business from "./BusinessDetails";
import Billing from "./Billing";
import Personal from "./PersonalDetails";
import Team from "./Team";
import Subscription from "./Subscriptions";

//Redux
import { connect } from "react-redux";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("subscriptions");


  return (
    <div className="settings">
      <Card className="settings-card">
        <div>
          <Nav className="border-bottom flex-grow overflow-x-scroll">
            <NavItem>
              <NavLink
                className={`${activeTab === "personal" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("personal")}
                to="#"
              >
                Personal Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${activeTab === "business" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("business")}
                to="#"
              >
                Business Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${activeTab === "billing" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("billing")}
                to="#"
              >
                Billing Info
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${activeTab === "team" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("team")}
                to="#"
              >
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${
                  activeTab === "subscriptions" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("subscriptions")}
                to="#"
              >
                Subscriptions
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="personal">
              <Personal />
            </TabPane>
            <TabPane tabId="business">
              <Business />
            </TabPane>
            <TabPane tabId="billing">
              <Billing />
            </TabPane>
            <TabPane tabId="team">
              <Team />
            </TabPane>
            <TabPane tabId="subscriptions">
              <Subscription />
            </TabPane>
          </TabContent>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {})(Settings);
