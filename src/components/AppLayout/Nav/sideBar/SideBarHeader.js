import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import logo from '../../../../assets/img/logo.png'



const SidebarHeader = ({ menuShadow }) => {
  
    return (
        <div className="navbar-header ">
            <ul className="nav navbar-nav flex-row">
                <li className="nav-item mx-auto w-50 p-0">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt='ontriv-logo' className="navbar-logo"/>
                        {/* <img src={logoMobile} alt='ontriv-logo' width='30px'  height="30px" className={'d-lg-none p-0'} /> */}

                    </Link>
                </li>
            </ul>
            <div
                className={classnames("shadow-bottom", {
                    "d-none": menuShadow === false
                })}
            />
        </div>
    )

}

export default SidebarHeader
