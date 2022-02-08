import React from "react";
import { ClientTopNav } from "../Nav/topBar";

const ClientAppLayout = ({ children }) => {
    return (
        <div className='client-app-layout' >
            <ClientTopNav />
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    );
}

export default ClientAppLayout;

