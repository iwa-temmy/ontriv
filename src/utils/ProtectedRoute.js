import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";


const PrivateRoute = ({ accessToken }) => {
    // console.log(accessToken);
    let authorized;
    if (accessToken) {
        let decoded = jwt_decode(accessToken);
        // console.log(decoded);
        // console.log(new Date((decoded.iat)*1000).toUTCString())
        // console.log(new Date((decoded.exp)*1000).toUTCString())
        // console.log(Date.now());
        if( ((decoded.exp)*1000)< Date.now() ){
          authorized=false;
        }
        else{
          authorized=true;
        }
    }
    else{
        authorized=false;
    }


    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return authorized ?
        <AppLayout>
            <Outlet />
        </AppLayout>
        : <Navigate to="/auth/login" />;
}

const mapStateToProps = ({ auth }) => {
    const { accessToken } = auth;
    return { accessToken };
};

export default connect(mapStateToProps, null)(PrivateRoute);