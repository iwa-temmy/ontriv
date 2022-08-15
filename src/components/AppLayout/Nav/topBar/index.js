import React, {useState} from "react"
import {Button} from 'reactstrap';
import {FaSearch, FaAward} from 'react-icons/fa'
import {AiFillQuestionCircle} from "react-icons/ai"
import {IoMdSettings} from "react-icons/io"
import {RiLogoutBoxRFill} from "react-icons/ri"
import Notification from '../../../../assets/img/notification.svg'
import userProfilePic from '../../../../assets/img/userPic.png'
import notificationIcon from '../../../../assets/img/icon.png'
import {TopRightModal} from '../../../Modal';
import ClientLog from '../../../../assets/img/clientlogo.png'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

export const TopNav = ({currentSection, setShowMobileSideBar, logoutUser, userDetails}) => {
    const [userProfileState, updateUserProfileState] = useState(false);
    const [notificationState, updateNotificationState] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);
    
    return (
        <React.Fragment>
            <div className="navbar-static-top topbar">
                <div className="navbar-wrapper">
                    <div className="navbar-container">
                        <div className="navbar-collapse d-flex justify-content-between align-items-center">
                            <div className="topbar-left-content mr-auto d-flex align-items-center">
                                <div className="mobile-menu mr-4"
                                     onClick={() => {
                                         setShowMobileSideBar(true)
                                     }}
                                >
                                    <HiOutlineMenuAlt2 size='26px'/>
                                </div>
                                <h2 className="mb-0 active-menu font-weight-bold text-capitalize">{currentSection}</h2>
                            </div>
                            <div className='topbar-right-content d-flex ml-auto justify-content-between'>

                                <div className={`search-input-wrapper `}>
                                    <div className="search-icon">
                                        <FaSearch color='#dfe1e6' size="16px"/>
                                    </div>
                                    <input type='text' className="topbar-search-input" placeholder="Search"/>
                                </div>

                                <div className={`d-flex topnav-user ${mobileSearch ? 'd-none' : 'd-block'}`}>
                                    <div className="my-1 mx-2">
                                        <FaSearch color='#00119D' size="18px" className="mobile-search-icon"
                                                  onClick={() => {
                                                      setMobileSearch(true)
                                                  }}/>
                                    </div>
                                    {/* <Link to='/Chat'

                                    >
                                        <img src={chat} alt='chat-icon' width='100%' height='100%'/>
                                    </Link> */}
                                    <img src={Notification} alt='notification-icon' className="mx-1" width='40%'
                                         onClick={() => updateNotificationState(!notificationState)}/>
                                    <div className="userProfile-img"
                                         onClick={() => updateUserProfileState(!userProfileState)}>
                                        <img src={userDetails?.profile_image ? userDetails?.profile_image : userProfilePic} alt='user-dp'/>
                                    </div>
                                </div>

                                {
                                    mobileSearch && <div className={`mobile-search-input-wrapper `}>
                                        <div className="search-icon">
                                            <FaSearch color='#dfe1e6' size="16px"/>
                                        </div>
                                        <input type='text' className="topbar-search-input" placeholder="Search"/>
                                    </div>
                                }

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
                <div className="user-menu-modal">
                    <div className="user-menu-img mb-3 d-flex justify-content-between align-items-center"
                         onClick={() => updateUserProfileState(!userProfileState)}>
                        <p>{' '}</p>
                        <img src={userDetails?.profile_image ? userDetails?.profile_image : userProfilePic} alt='user-dp'/>
                    </div>
                    <div className="user-menu">
                        <div className="user-menu-header">
                            <h1 className="user-name mb-0">{userDetails?.fullname}</h1>
                            <h6 className="user-email mb-0">{userDetails?.email}</h6>
                        </div>
                        <div className="user-menu-items">
                            <div className="d-flex user-menu-item align-items-center">
                                <AiFillQuestionCircle size='20px' className='user-menu-icon'/>
                                <h5 className="pl-3 user-menu-text mb-0">Help</h5>
                            </div>

                            <div className="d-flex user-menu-item align-items-center">
                                <FaAward size='18px' className='user-menu-icon'/>
                                <h5 className="pl-3 user-menu-text mb-0">Subscription</h5>
                            </div>

                            <div className="d-flex user-menu-item align-items-center">
                                <IoMdSettings size='20px' className='user-menu-icon'/>
                                <h5 className="pl-3 user-menu-text mb-0">Settings</h5>
                            </div>

                            <div className="d-flex user-menu-item align-items-center" onClick={() => logoutUser()}>
                                <RiLogoutBoxRFill size='20px' className='user-menu-icon'/>
                                <h5 className="pl-3 user-menu-text mb-0">Logout</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </TopRightModal>

            <TopRightModal
                modalState={notificationState}
                setModalState={updateNotificationState}
            >
                <div className="notification-modal">
                    <div className="notification-img mb-3 d-flex justify-content-between align-items-center"
                         onClick={() => updateUserProfileState(!userProfileState)}>
                        <p>{' '}</p>
                        <img src={notificationIcon} alt='user-dp' className=" notification-icon"/>
                    </div>
                    <div className="notifications-wrapper">
                        <div className="notification-header">
                            <h1 className="notification-header-text mb-0">NOTIFICATIONS</h1>
                            <hr/>
                        </div>
                        <div className="notification-items ">
                            <div className="notification-item unread">
                                <h1 className="notification-title">SUCCESS RATE</h1>
                                <h6 className="notification-description">
                                    Photo must be 500px by 500px and nothing more than 180kb nothing more than 180kb
                                </h6>
                            </div>
                            <div className="notification-item">
                                <h1 className="notification-title">SUCCESS RATE</h1>
                                <h6 className="notification-description">
                                    Photo must be 500px by 500px and nothing more than 180kb nothing more than 180kb
                                </h6>
                            </div>
                            <div className="notification-item">
                                <h1 className="notification-title">SUCCESS RATE</h1>
                                <h6 className="notification-description">
                                    Photo must be 500px by 500px and nothing more than 180kb nothing more than 180kb
                                </h6>
                            </div>
                            <div className="notification-item">
                                <h1 className="notification-title">SUCCESS RATE</h1>
                                <h6 className="notification-description">
                                    Photo must be 500px by 500px and nothing more than 180kb nothing more than 180kb
                                </h6>
                            </div>
                            <div className="w-50 mt-1 text-center mx-auto notification-button-wrapper">
                                <Button className='notification-button'>
                                    View All
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

            </TopRightModal>
        </React.Fragment>
    )
};


export const ClientTopNav = () => {
    return (
        <React.Fragment>
            <div className="navbar-static-top topbar">
                <div className="navbar-wrapper">
                    <div className="navbar-container">
                        <div className="navbar-collapse d-flex justify-content-between align-items-center flex-wrap">
                            <div className="topbar-left-content mr-auto">
                                <img src={ClientLog} alt='navbrand'/>
                            </div>
                            <div className='topbar-right-content '>
                                <Button className="">
                                    Logout
                                </Button>
                            </div>
                            {/* <TopBar/> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


