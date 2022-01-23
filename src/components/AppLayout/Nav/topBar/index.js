import React, { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import chat from '../../../../assets/img/chat.svg'
import Notification from '../../../../assets/img/notification.svg'
import userProfilePic from '../../../../assets/img/userPic.png'
import { TopRightModal } from '../../../Modal'

const TopNav = () => {
    const [userProfileState, updateUserProfileState] = useState(false)
    return (
        <React.Fragment>
            <div className="navbar-static-top topbar">
                <div className="navbar-wrapper">
                    <div className="navbar-container">
                        <div className="navbar-collapse d-flex justify-content-between align-items-center" >
                            <div className="topbar-left-content">
                                <h2 className="mb-0 active-menu font-weight-bold text-capitalize">{window.location.pathname.split('/')[1]}</h2>
                            </div>
                            <div className='topbar-right-content d-flex ml-auto justify-content-between'>

                                <div className="search-input-wrapper ">
                                    <div className="search-icon">
                                        <FaSearch color='#dfe1e6' size="16px" />
                                    </div>
                                    <input type='text' className="topbar-search-input" placeholder="Search" />
                                </div>

                                <div className="d-flex topnav-user">
                                    <img src={chat} alt='chat-icon' width='23%' />
                                    <img src={Notification} alt='notification-icon' className="mx-1" width='33%' />
                                    <div className="userProfile-img" onClick={()=>updateUserProfileState(!userProfileState)}>
                                        <img src={userProfilePic} alt='user-dp' />
                                    </div>
                                </div>
                            </div>
                            {/* <TopBar/> */}
                        </div>
                    </div>
                </div>
            </div>
            <TopRightModal
                modalState={userProfileState}
                setModalState={updateUserProfileState}
            >
                <h2>
                    testing
                </h2>
            </TopRightModal>
        </React.Fragment >
    )
}

export default TopNav
