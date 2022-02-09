import React, { useState } from "react";
import Sidebar from "./Nav/sideBar";
import { TopNav } from "./Nav/topBar";
import { connect } from 'react-redux';
import { setCurrentSection } from "../../redux/actions";


const AppLayout = ({ children, setCurrentSection, currentSection }) => {
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
                />
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = ({ nav }) => {
    const { currentSection } = nav;
    return { currentSection };
};

export default connect(mapStateToProps, { setCurrentSection })(AppLayout);

