import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoute';

import ClientProtectedRoutes from './utils/ClientProtectedRoute';
import Signup from './views/Auth/Register';
import Signin from './views/Auth/Login';
import ForgotPassword from './views/Auth/ForgotPassword';
import Dashboard from './views/Dashboard';
import ClientManagement from './views/ClientManagement';
import ClientDetails from './views/ClientManagement/ClientDetails';
import Report from './views/Report'
import ReportDetails from './views/Report/ReportDetails';
import Settings from './views/Settings';
import ClientDashboard from './views/ClientPortal/Dashboard'
import ClientPost from './views/ClientPortal/Posts'

import Subscription from './views/Subscription';
import SetUpBussiness from './views/Bussiness';
import Financials from "./views/Financials";
import Messages from "./views/Messages";
import InvoiceDetailsPage from "./views/Financials/InvoiceDetailsPage";
import Schedule from "./views/Schedule";
import NewPost from "./views/Schedule/NewPost";
import PhoneNumberInput from './components/Inputs/PhoneNumberInput';






const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ProtectedRoutes />}>
                    <Route exact path='/overview' element={<Dashboard />} />
                    <Route exact path='/client-management' element={<ClientManagement />} />
                    <Route exact path='/invoices-&-financials' element={<Financials />} />
                    <Route exact path='/invoices-&-financials/invoice/:id' element={<InvoiceDetailsPage />} />
                    <Route exact path='/client-details' element={<ClientDetails />} />
                    <Route exact path='/report' element={<Report />} />
                    <Route exact path='/client-report' element={<ReportDetails />} />
                    <Route exact path='/Subscriptions' element={<Subscription />} />
                    <Route exact path='/Chat' element={<Messages />} />
                    <Route exact path='/Schedule' element={<Schedule />} />
                    <Route exact path='/NewPost' element={<NewPost />} />
                    <Route exact path='/business' element={<SetUpBussiness />} />
                    <Route exact path='/settings' element={<Settings />} />
                    <Route exact path="/test" element={<PhoneNumberInput />} />
                </Route>

                <Route exact path='/client' element={<ClientProtectedRoutes />}>
                    <Route exact path='/client/dashboard' element={<ClientDashboard />} />
                    <Route exact path='/client/posts' element={<ClientPost />} />

                </Route>

                <Route exact path='/auth/register' element={<Signup />} />
                <Route exact path='/auth/login' element={<Signin />} />
                <Route exact path='/auth/forgot-password' element={<ForgotPassword />} />
            </Routes>
            
        </BrowserRouter >
    )

}
export default RouterConfig
