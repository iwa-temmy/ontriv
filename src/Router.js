import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './views/Auth/Register'
import Signin from './views/Auth/Login'
import ForgotPassword from './views/Auth/ForgotPassword'



const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<Home />} />
            </Route> */}
                <Route exact path='/auth/register' element={<Signup />} />
                <Route exact path='/auth/login' element={<Signin />} />
                <Route exact path='/auth/forgot-password' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter >
    )

}
export default RouterConfig