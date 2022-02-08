import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { connect } from 'react-redux';

const PrivateRoute = ({ authState }) => {
    // console.log(authState);

    // const auth = authorized; 
    // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return authState ?
        <AppLayout>
            <Outlet />
        </AppLayout>
        : <Navigate to="/auth/login" />;
}

const mapStateToProps = ({ nav }) => {
    const { authState } = nav;
    return { authState };
};

export default connect(mapStateToProps, null)(PrivateRoute);