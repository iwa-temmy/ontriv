import React from "react";
import Sidebar from "./Nav/sideBar";
import { TopNav } from "./Nav/topBar";
import { connect } from 'react-redux';
import { setCurrentSection } from "../../redux/actions";


const AppLayout = ({ children, setCurrentSection, currentSection }) => {
    return (
        <div className='app-layout ' >
            <Sidebar
                setCurrentSection={setCurrentSection}
            />
            <div className="app-content content show-overlay">
                <TopNav
                    currentSection={currentSection}
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

