import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoute';
import Signup from './views/Auth/Register';
import Signin from './views/Auth/Login';
import ForgotPassword from './views/Auth/ForgotPassword';
import Dashboard from './views/Dashboard';
import ClientManagement from './views/ClientManagement';
import ClientDetails from './views/ClientManagement/ClientDetails';





const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ProtectedRoutes />}>
                    <Route exact path='/overview' element={<Dashboard />} />
                    <Route exact path='/client-management' element={<ClientManagement />} />
                    <Route exact path='/client-details' element={<ClientDetails />} />
                </Route>
                <Route exact path='/auth/register' element={<Signup />} />
                <Route exact path='/auth/login' element={<Signin />} />
                <Route exact path='/auth/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter >
    )

}
export default RouterConfig