import { Row, Col, Card } from 'reactstrap';
import logo from '../../../assets/img/10X.png';
import Tag from '../../../assets/img/Tag.svg';
import { Link } from 'react-router-dom';
import post from '../../../assets/img/post.svg'
import invoices from '../../../assets/img/invoices.svg'
import message from '../../../assets/img/message.svg'
import settings from '../../../assets/img/settings.svg'
import doc from '../../../assets/img/doc.svg'
import calendar from '../../../assets/img/calendar.svg'




const Dashboard = () => {
    return <div className='client-dashboard mt-2'>
        <Row>
            <Col sm='12' lg='3' className='client-dashboard-left-section mb-4'>
                <Card className='text-center '>
                    <div className='client-info-container'>
                        <div className='client-logo-wrapper'>
                            <img src={logo} />
                        </div>
                        <div>
                            <h1 className='client-brandname'>10X Socials</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div className=''>
                            <h6>Project Timeline:</h6>
                            <p>6 Months</p>
                        </div>

                        <div>
                            <h6>Date Created</h6>
                            <p>12/04/21</p>
                        </div>
                    </div>
                    <div className='tag-container d-flex'>
                        <img src={Tag} alt='tag-icon' />
                        <p className='tag-container-text mb-0'>Content Calendar</p>
                    </div>
                </Card>
            </Col>
            <Col sm='12' lg='9' className='client-dashboard-right-section'>
                <Card className='dashboard-nav'>
                    <Row>

                        <Col xl='4' md='6' className='mb-4'>
                            <Link to='/client/posts'>
                                <Card className='h-100  text-center dashboard-nav-card'>
                                    <div className=''>
                                        <img src={post} />
                                    </div>
                                    <div>
                                        <h1>POSTS</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>

                                </Card>
                            </Link>
                        </Col>

                        <Col xl='4' md='6' className='mb-4'>
                            <Link to='/client/calendar'>
                                <Card className='h-100  text-center dashboard-nav-card'>
                                    <div className=''>
                                        <img src={calendar} />
                                    </div>
                                    <div>
                                        <h1>CONTENT CALENDAR</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>

                        <Col xl='4' md='6' className='mb-4'>
                            <Link to='/client/invoices'>
                                <Card className='h-100  text-center dashboard-nav-card'>
                                    <div className=''>
                                        <img src={invoices} />
                                    </div>
                                    <div>
                                        <h1>INVOICES</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </Card>
                            </Link>
                        </Col>

                        <Col xl='4' md='6' className='mb-4'>
                            <Link to='/client/documents'>
                                <Card className='h-100  text-center dashboard-nav-card'>
                                    <div className=''>
                                        <img src={doc} />
                                    </div>
                                    <div>
                                        <h1>Documents</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>

                                </Card>
                            </Link>
                        </Col>

                        <Col xl='4' md='6' className='mb-4'>
                            <Link to='/client/messages'>
                                <Card className='h-100  text-center dashboard-nav-card'>
                                    <div className=''>
                                        <img src={message} />
                                    </div>
                                    <div>
                                        <h1>Messages</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>

                                </Card>
                            </Link>
                        </Col>

                        <Col xl='4' md='6' className='mb-4'>
                            <Link to='/client/settings'>
                                <Card className='h-100  text-center dashboard-nav-card'>
                                    <div className=''>
                                        <img src={settings} />
                                    </div>
                                    <div>
                                        <h1>Settings</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>

                                </Card>
                            </Link>

                        </Col>
                    </Row>

                </Card>
            </Col>
        </Row>
    </div>
}
export default Dashboard;