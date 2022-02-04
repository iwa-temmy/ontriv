import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoute';
import Signup from './views/Auth/Register';
import Signin from './views/Auth/Login';
import ForgotPassword from './views/Auth/ForgotPassword';
import Dashboard from './views/Dashboard';
import ClientManagement from './views/ClientManagement';
import ClientDetails from './views/ClientManagement/ClientDetails';
import Report from './views/Report'
import ReportDetails from './views/Report/ReportDetails';

import Subscription from './views/Subscription';
import SetUpBussiness from './views/Bussiness';




const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ProtectedRoutes />}>
                    <Route exact path='/overview' element={<Dashboard />} />
                    <Route exact path='/client-management' element={<ClientManagement />} />
                    <Route exact path='/client-details' element={<ClientDetails />} />
                    <Route exact path='/report' element={<Report />} />
                    <Route exact path='/client-report' element={<ReportDetails />} />
                    <Route exact path='/Subscriptions' element={<Subscription />} />
                    <Route exact path='/Reports' element={<SetUpBussiness />} />
                </Route>
                <Route exact path='/auth/register' element={<Signup />} />
                <Route exact path='/auth/login' element={<Signin />} />
                <Route exact path='/auth/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter >
    )

}
export default RouterConfig
