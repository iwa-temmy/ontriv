import React, { useState, useEffect } from "react";
import Sidebar from "./Nav/sideBar";
import { TopNav } from "./Nav/topBar";
import {connect} from "react-redux";
import { setCurrentSection, logoutUser, getUserDetails } from "../../redux/actions";


const AppLayout = ({ children, setCurrentSection, currentSection, logoutUser, getUserDetails,  userDetails }) => {
    const [showMobileSideBar, setShowMobileSideBar] = useState(false)

    useEffect(() => {
        getUserDetails();
    }, [getUserDetails])
    return (
        <div className='app-layout ' >
            <Sidebar
                setCurrentSection={setCurrentSection}
                showMobileSideBar={showMobileSideBar}
                setShowMobileSideBar={setShowMobileSideBar}
            />
            <div className="app-content content show-overlay">
                <TopNav
                    currentSection={currentSection}
                    setShowMobileSideBar={setShowMobileSideBar}
                    logoutUser={logoutUser}
                    userDetails={userDetails}
                />
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = ({ nav, general }) => {
    const { currentSection } = nav;
    const {userDetails} = general;
    return { currentSection,  userDetails};
};

export default connect(mapStateToProps, { setCurrentSection, logoutUser, getUserDetails })(AppLayout);

