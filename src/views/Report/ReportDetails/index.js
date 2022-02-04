import { useState } from 'react';
import {
    Row,
    Col,
    Card,
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar'
import chart from '../../../assets/img/Chart Body.svg'
import topTweet from '../../../assets/img/topTweet.png'
import impressionChart from '../../../assets/img/imprChart.png'
import link from '../../../assets/img/links.svg'
import { CenteredModal } from '../../../components/Modal'





const ReportDetails = () => {
    const [activeTab, setActiveTab] = useState('Twitter');
    const [exportState, setExportState] = useState(false);


    return (
        <div className="report-details">
            <div className='mt-2 mb-4 d-flex flex-wrap justify-content-between align-items-center report-details-header'>
                <h1>UK Villages</h1>
                <div>
                    <Button
                        onClick={() => {
                            setExportState(true)
                        }}>
                        Export Report
                    </Button>
                </div>
            </div>
            <Card className='report-details-card '>
                <div>
                    <Nav className='border-bottom mb-3' >
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'Twitter' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('Twitter')}
                                to="#"
                            >
                                Twitter
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'Facebook' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('Facebook')}
                                to="#"
                            >
                                Facebook
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${activeTab === 'Instagram' ? 'active-tab' : ""}`}
                                onClick={() => setActiveTab('Instagram')}
                                to="#"
                            >
                                Instagram
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="Twitter">
                            <Row className='mt-1 mb-3'>
                                <Col sm='12' lg='4' className='h-100'>
                                    <Card className='avg-engagement-card'>
                                        <div className='card-header-wrapper'>
                                            <p className='card-title'>Average Engagement Rate</p>
                                            <p>24.3%</p>
                                        </div>

                                        <div className='chart-container text-center mx-auto'>
                                            <img src={chart} alt='chart' height='65px' width='130%' className='mx-auto' />

                                        </div>

                                    </Card>
                                </Col>
                                <Col sm='12' lg='4' className='h-100'>
                                    <Card className='links-clicked'>
                                        <div className='card-header-wrapper'>
                                            <p className='card-title'>Links Clicked</p>
                                            <p>2,343</p>
                                        </div>

                                        <div className='chart-container'>
                                            <img src={link} alt='chart' />

                                        </div>
                                    </Card>
                                </Col>
                                <Col sm='12' lg='4' className='h-100'>
                                    <Card className='likes'>
                                        <div className='card-header-wrapper'>
                                            <p className='card-title'>Likes</p>
                                            <p>2,343</p>
                                        </div>

                                        <div className='chart-container'>
                                            <img src={link} alt='chart' />

                                        </div>
                                    </Card>
                                </Col>
                            </Row>



                            <Row className='my-3 gx-3 h-100'>
                                <Col sm='12' lg='6'>
                                    <Row className='mb-3 gx-3 align-items-stretch'>
                                        <Col className=''>
                                            <Card className='impression-card mb-3 h-100'>
                                                <h3>Impressions</h3>
                                                <p>100,000</p>

                                            </Card>
                                        </Col>
                                        <Col className=''>
                                            <Card className='tweet-card mb-3 h-100'>
                                                <h3>Tweets</h3>
                                                <p>100,000</p>
                                            </Card>
                                        </Col>
                                        <Col className=''>
                                            <Card className='followers-card mb-3 h-100'>
                                                <h3>New Followers</h3>
                                                <p>100,000</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className='my-3'>
                                        <Col>
                                            <Card className='impression-chart-card'>
                                                <h3 className='mb-3'>Impressions</h3>
                                                <img src={impressionChart} alt='chart' />
                                            </Card>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Card className='tweet-text-card mb-3 '>
                                                <p className='text-center mb-0'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id turpis malesuada nibh.
                                                </p>
                                            </Card>
                                        </Col>
                                    </Row>


                                </Col>
                                <Col sm='12' lg='6'>
                                    <Row>
                                        <Col>
                                            <Card className='top-3-tweet-card h-100'>
                                                <h3 className='text-left mb-3'>Top 3 tweets</h3>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#855CF8'
                                                            customLabel='Machine 8'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={100}
                                                            labelSize='10px'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#A07FF2'
                                                            customLabel='Slicer BH100'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={95}
                                                            barContainerClassName='barContainer'
                                                            labelSize='10px'
                                                        />
                                                    </Col>
                                                    <Col sm='3' className='justify-self-end'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#B498F5'
                                                            customLabel='Packer5000'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={90}
                                                            barContainerClassName='barContainer'
                                                            labelSize='10px'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#BDA5F5'
                                                            customLabel='Machine 2'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={70}
                                                            barContainerClassName='barContainer'
                                                            labelSize='10px'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#C6B2F7'
                                                            customLabel='BOBST'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={60}
                                                            labelSize='10px'
                                                            barContainerClassName='barContainer'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#D0BFF8'
                                                            customLabel='PH8'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={50}
                                                            labelSize='10px'
                                                            barContainerClassName='barContainer'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#DCDEDF'
                                                            customLabel='Roto...'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={40}
                                                            labelSize='10px'
                                                            barContainerClassName='barContainer'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>

                                                <Row className='mb-0'>
                                                    <Col sm='9'>
                                                        <ProgressBar
                                                            bgColor='#E9EAEB'
                                                            customLabel='M...'
                                                            borderRadius='0'
                                                            labelColor='#fff'
                                                            completed={30}
                                                            barContainerClassName='barContainer'
                                                            labelSize='10px'
                                                        />
                                                    </Col>
                                                    <Col sm='3'>
                                                        <h2 className='progress-count'>
                                                            100,000
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card className='top-tweet-card my-3 h-100'>
                                                <h3>Top Tweets</h3>
                                                <div className='d-flex top-tweet-wrapper align-items-center bg-white'>
                                                    <img src={topTweet} alt='top-tweet-img' />
                                                    <div className=''>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id turpis malesuada nibh.F
                                                        </p>

                                                    </div>
                                                </div>

                                            </Card>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane tabId="Facebook">
                            <h1>Facebook</h1>
                        </TabPane>
                        <TabPane tabId="Instagram">
                            <h1>Instagram</h1>
                        </TabPane>
                    </TabContent>
                </div>
            </Card >

            <CenteredModal
                modalState={exportState}
                setModalState={setExportState}
            >
                <div className='export-report-wrapper'>
                    <h1 className=''>
                        Export Campaign Report
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <Button className='py-3 '>
                        Download PDF
                    </Button>

                </div>
            </CenteredModal>
        </div >
    )
}
export default ReportDetails;