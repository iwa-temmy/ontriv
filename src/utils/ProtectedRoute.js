import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

const PrivateRoute = () => {
    const auth = true; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ?
        <AppLayout>
            <Outlet />
        </AppLayout>
        : <Navigate to="/auth/login" />;
}

export default PrivateRoute;