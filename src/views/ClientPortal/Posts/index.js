import { useState } from 'react'
import {
    Card,
    // TabContent,
    // TabPane,
    Nav,
    NavItem,
} from 'reactstrap';
import Arrow from '../../../assets/img/arowleft.svg'
import { NavLink } from 'react-router-dom';



const Posts = () => {
    const [activeTab, setActiveTab] = useState('allContent');

    return <div className='my-2 client-posts-section'>
        <div>
            <Card className='top-section-card'>
                <div className='d-flex align-items-center'>
                    <img src={Arrow}
                        onClick={() => {
                            window.history.back()
                        }}
                        alt='back-icon'
                    />
                    <h1 className='mb-0'>Posts</h1>
                </div>

                <div className='mt-4 mb-2'>
                    <Nav className='border-bottom flex-grow' >
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'allContent' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('allContent')}
                                to="#"
                            >
                                All Content
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'video' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('video')}
                                to="#"
                            >
                                Video
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'photo' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('photo')}
                                to="#"
                            >
                                Photo
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'carousel' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('carousel')}
                                to="#"
                            >
                                Carousel
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'stories' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('stories')}
                                to="#"
                            >
                                Stories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'igtv' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('igtv')}
                                to="#"
                            >
                                IGTV
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {/* <TabContent activeTab={activeTab}>
                        <TabPane tabId="personal">
                            <Personal />
                        </TabPane>
                        <TabPane tabId="business">
                            <Business />
                        </TabPane>
                        <TabPane tabId="billing">
                            <Billing />
                        </TabPane>
                        <TabPane tabId="team">
                            <Team />
                        </TabPane>
                        <TabPane tabId="subscriptions">
                            <Subscription />
                        </TabPane>
                    </TabContent> */}
                </div>
            </Card>
        </div>
    </div>
}
export default Posts;