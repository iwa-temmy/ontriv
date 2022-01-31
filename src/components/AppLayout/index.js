import React from "react";
import Sidebar from "./Nav/sideBar";
import Navbar from "./Nav/topBar";
import { connect } from 'react-redux';
import { setCurrentSection } from "../../redux/actions";
// import Footer from "./Nav/footer/Footer";
// import '../../assets/css/Layout/index.css';

const AppLayout = ({ children, setCurrentSection, currentSection }) => {
    return (
        <div className='app-layout ' >
            <Sidebar
                setCurrentSection={setCurrentSection}
            />
            <div className="app-content content show-overlay">
                <Navbar
                    currentSection={currentSection}
                />
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );

}

const mapStateToProps = ({ nav }) => {
    const { currentSection } = nav;
    return { currentSection };
};

export default connect(mapStateToProps, { setCurrentSection })(AppLayout);

