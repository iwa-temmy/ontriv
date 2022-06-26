import React, { useState } from "react";
import Sidebar from "./Nav/sideBar";
import { TopNav } from "./Nav/topBar";
import {connect} from "react-redux";
import { setCurrentSection, logoutUser } from "../../redux/actions";


const AppLayout = ({ children, setCurrentSection, currentSection, logoutUser, currentUser }) => {
    const [showMobileSideBar, setShowMobileSideBar] = useState(false)
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
                    userDetails={currentUser}
                />
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = ({ nav, auth }) => {
    const { currentSection } = nav;
    const {currentUser} = auth;
    return { currentSection,  currentUser};
};

export default connect(mapStateToProps, { setCurrentSection, logoutUser })(AppLayout);

