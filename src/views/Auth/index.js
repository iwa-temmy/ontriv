import React from 'react';
import { Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'

const Auth = () => {
    return (
        <React.Fragment>
            <Route path="auth/signin" element={<Login />} />
            <Route path="auth/signup" element={<Register />} />
            <Route path="auth/forgot-password" element={<ForgotPassword />} />
        </React.Fragment>
        // <Route path="/auth" element={<Login />}>

        // </Route>
    )

}
export default Auth