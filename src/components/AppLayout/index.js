import React from "react";
import Sidebar from "./Nav/sideBar";
import Navbar from "./Nav/topBar";
// import Footer from "./Nav/footer/Footer";
// import '../../assets/css/Layout/index.css';

const AppLayout = ({ children }) => {
    return (
        <div className='app-layout ' >
            <Sidebar />
            <div className="app-content content show-overlay">
                <Navbar />
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );

}

export default AppLayout;
