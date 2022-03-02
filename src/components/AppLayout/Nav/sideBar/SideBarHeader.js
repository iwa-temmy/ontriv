import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import logo from '../../../../assets/img/logo.png'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'



const SidebarHeader = ({ menuShadow, setShowMobileSideBar }) => {

    return (
        <div className="navbar-header ">
            <ul className="nav navbar-nav ">
                <li className="nav-item mb-0 p-0">
                    <div className="navbar-brand d-flex align-items-center justify-content-between pt-1 pb-3 text-center">
                        <Link to="/overview" >
                            <img src={logo} alt='ontriv-logo' className="navbar-logo mb-0" />
                            {/* <img src={logoMobile} alt='ontriv-logo' width='30px'  height="30px" className={'d-lg-none p-0'} /> */}

                        </Link>
                        <div className="mobile-menu  mb-0 mr-0"
                            onClick={() => {
                                setShowMobileSideBar(false)
                            }}
                        >
                            <HiOutlineMenuAlt2 size='26px' color='#0053f4'/>
                        </div>
                    </div>

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
