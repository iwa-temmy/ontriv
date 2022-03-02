import { useState } from 'react'
import { Row, Col, Card, Button } from 'reactstrap';
import Select from 'react-select';
import { HiChevronRight, HiPlus, HiArrowRight } from 'react-icons/hi'
import Calendar from 'react-calendar';
import { CenteredModal } from '../../components/Modal'
import chart from '../../assets/img/chart.png'
import icon1 from '../../assets/img/calendaric1.svg'
import icon2 from '../../assets/img/calendarIc2.svg'
import postImg from '../../assets/img/post.png'
import event from '../../assets/img/event.png'


const Dashboard = () => {
    const [eventState, updateEventState] = useState(false)
    const [postState, updatePostState] = useState(false)

    const toggleEventState = () => {
        updateEventState(!eventState)
    }

    const togglePostState = () => {
        updatePostState(!postState)
    }

    return (
        <div className='dashboard dashboard-wrapper'>
            <Row>
                <Col md='12' sm='12' lg='12' xxl='8' className=' mb-3'>
                    <div >
                        <Row>
                            <Col md='12'>
                                <div className='dashboard-analytics'>
                                    <Card className='analytics-card'>
                                        <Row>
                                            <Col sm='12' md='4'>
                                                <Card className='card-sm revenue h-100'>
                                                    <h4 className='text-white'>
                                                        Revenue
                                                    </h4>
                                                    <h5 className='text-white'>
                                                        $ <span> 0.00</span>
                                                    </h5>
                                                </Card>
                                            </Col>
                                            <Col sm='12' md='4' className='card-sm-2 '>
                                                <Card className='card-sm posts h-100'>
                                                    <h4 className=''>
                                                       No scheduled posts
                                                    </h4>
                                                    <h5 className=''>
                                                        0
                                                    </h5>
                                                </Card>
                                            </Col>
                                            <Col sm='12' md='4'  >
                                                <Card className='card-sm clients h-100'>
                                                    <h4 className=''>
                                                        Number of clients
                                                    </h4>
                                                    <h5 className=''>
                                                        0
                                                    </h5>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                        <Row className='gx-3'>
                            <Col md='12' lg='12' xl='8' className='mb-3  nn'>
                                <Card className='overview-card'>
                                    <div className='finacial-overview'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h4 className='pl-2 financial-overview-header mb-0'>Financial Overview</h4>
                                            <Select
                                                defaultInputValue='March'
                                                placeholder='March'
                                            />
                                        </div>
                                        <div className='financial-overview-chart'>
                                            <div className='chart-container'>
                                                <img src={chart} alt='chart' />
                                            </div>

                                        </div>
                                    </div>

                                    <div className='invoice-overview'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h4 className='pl-2 financial-overview-header mb-0'>Invoice Overview</h4>
                                            <p className='mb-0'>See more <span><HiChevronRight size='24px' color='#49A8F8' /></span></p>

                                        </div>
                                    </div>

                                    <div className='mx-auto text-center invoice-inactive-state py-3'>
                                        <h5>Create your first invoice</h5>
                                        <p className='py-2 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                                    </div>

                                    <div className='py-3 btn-lg  create-button align-items-center '>
                                        <HiPlus color='#2465ec' className='create-icon' />
                                        <h6 className='mb-0'>
                                            Create Invoice
                                        </h6>
                                    </div>
                                </Card>
                            </Col>

                            <Col md='12' xl='4' className='mb-3 col-cstm-xl-4'>
                                <Card className='client-card'>
                                    <div >
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h4 className='pl-2 client-overview-header mb-0'>Clients</h4>
                                            <p className='mb-0'>See all <span><HiChevronRight size='24px' color='#49A8F8' /></span></p>

                                        </div>
                                    </div>

                                    <div className='mx-auto w-75 text-center client-inactive-state '>
                                        <h5>You have no client, pleas invite one to get started</h5>
                                        <p className='py-2 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                                        <div className='py-2 btn-lg  create-button align-items-center w-75 '>
                                            {/* <HiPlus color='#2465ec' className='create-icon' /> */}
                                            <h6 className='mb-0 text-white'>
                                                Invite
                                            </h6>
                                        </div>

                                    </div>


                                </Card>
                            </Col>

                        </Row>


                    </div>
                </Col>
                <Col md='12' lg='12' sm='12' xxl='4' className='mb-3'>
                    <Card className='calendar-card overflow-auto'>
                        <div className='d-flex align-items-center calendar-header'>
                            <img src={icon1} width='16px' alt='calendar' className='mb-0' />
                            <h4 className='mx-3 card-header-text mb-0 mt-1'>Scheduled Posts</h4>
                        </div>
                        <Calendar
                            className='customize-calendar'
                            onClickDay={togglePostState}

                        />
                        <hr className='my-3' />
                        <div>
                            <h4 className='mx-3 upcoming-events-header  mb-0'>Upcoming Events</h4>
                            <div className='upcoming-event mb-2 d-flex justify-content-between flex-wrap align-items-center'>
                                <div className='event-icon'>
                                    <img src={icon1} width='30px' alt='icon' />
                                </div>
                                <div>
                                    <h4>April Fools day</h4>
                                    <p className='mb-0'>01/04/2021</p>
                                </div>
                                <div className='event-arrow-icon'>
                                    <HiArrowRight
                                        color='#49A8F8'
                                        size='25px'
                                        className='font-weight-bold'
                                        onClick={toggleEventState} />
                                </div>
                            </div>
                            <div className='upcoming-event mb-2 d-flex justify-content-between flex-wrap align-items-center'>
                                <div className='event-icon '>
                                    <img src={icon2} width='30px' alt='icon' />
                                </div>
                                <div>
                                    <h4>Good Friday</h4>
                                    <p className='mb-0'>02/04/2021</p>
                                </div>
                                <div className='event-arrow-icon'>
                                    <HiArrowRight
                                        color='#49A8F8'
                                        size='25px'
                                        className='font-weight-bold'
                                        onClick={toggleEventState} />
                                </div>
                            </div>
                        </div>
                    </Card>

                </Col>
            </Row>

            <CenteredModal
                position='centered'
                modalState={postState}
                setModalState={updatePostState}
            >
                <div className='post'>
                    <h2 className='post-title'>10th April 2021</h2>
                    <div className='py-3'>

                        <div className='post-details mb-0 '>
                            <Row className='gx-5'>
                                <Col sm='4'>
                                    <div className='post-img-wrapper' ><img className='post-img' src={postImg} alt='post' /></div>
                                </Col>

                                <Col sm='8' >
                                    <div className='pt-2'>
                                        <h3 className='post-text-header'>UK villages</h3>
                                        <p className='post-description'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sedLorem ipsum dolor sit ame.</p>
                                        <div className='d-flex'>
                                            <div className='client-section'>
                                                <h2 className='client-section-header-text'>Client</h2>
                                                <div className='client-details d-flex'>
                                                    <p className='client-logo'>10px</p>
                                                    <p className='client-name'>10px Socials</p>
                                                </div>
                                            </div>
                                            <div className='channel-section'>
                                                <h4 className='channel-section-header-text'>Channel</h4>
                                                <div className='tags d-flex'>
                                                    <p className='tag tag-1'>Blog</p>
                                                    <p className='tag tag-2'>Facebook</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div className='post-details mb-0 '>
                            <Row className='gx-5'>
                                <Col sm='4'>
                                    <div className='post-img-wrapper'><img className='post-img' src={postImg} alt='post' /></div>
                                </Col>

                                <Col sm='8'>
                                    <div className='pt-2'>
                                        <h3 className='post-text-header'>UK villages</h3>
                                        <p className='post-description'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sedLorem ipsum dolor sit ame.</p>
                                        <div className='d-flex'>
                                            <div className='client-section'>
                                                <h2 className='client-section-header-text'>Client</h2>
                                                <div className='client-details d-flex'>
                                                    <p className='client-logo'>10px</p>
                                                    <p className='client-name'>10px Socials</p>
                                                </div>
                                            </div>
                                            <div className='channel-section'>
                                                <h4 className='channel-section-header-text'>Channel</h4>
                                                <div className='tags d-flex'>
                                                    <p className='tag tag-1'>Blog</p>
                                                    <p className='tag tag-2'>Facebook</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div className='post-details mb-0 '>
                            <Row className='gx-5'>
                                <Col sm='4'>
                                    <div className='post-img-wrapper'><img className='post-img' src={postImg} alt='post' /></div>
                                </Col>

                                <Col sm='8' className=''>
                                    <div className='pl-3 pt-2'>
                                        <h3 className='post-text-header'>UK villages</h3>
                                        <p className='post-description'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sedLorem ipsum dolor sit ame.</p>
                                        <div className='d-flex'>
                                            <div className='client-section'>
                                                <h4 className='client-section-header-text'>Client</h4>
                                                <div className='client-details d-flex'>
                                                    <p className='client-logo'>10px</p>
                                                    <p className='client-name'>10px Socials</p>
                                                </div>
                                            </div>
                                            <div className='channel-section'>
                                                <h4 className='channel-section-header-text'>Channel</h4>
                                                <div className='tags d-flex'>
                                                    <p className='tag tag-1'>Blog</p>
                                                    <p className='tag tag-2'>Facebook</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='mx-auto post-button-wrapper'>
                        <Button className='py-3 mx-auto post-button'>
                            View All Posts
                        </Button>
                    </div>

                </div>
            </CenteredModal>

            <CenteredModal position='centered'
                modalState={eventState}
                setModalState={updateEventState}
            >
                <div className='upcoming-event-modal'>
                    <div>
                        <div className='event-img-wrapper '>
                            <img src={event} className='event-img' alt='event' />
                        </div>
                        <div className='text-center'>
                            <h1 className='event-header-title mb-0'>April Fools Day</h1>
                            <p className='event-description'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sedLorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed</p>
                            <div className='mx-auto event-button-wrapper'>
                                <Button className='py-3 mx-auto event-button'>
                                    Create Content
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CenteredModal>
        </div>
    )
}

export default Dashboard;