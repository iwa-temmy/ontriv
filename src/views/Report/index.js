import { Link } from 'react-router-dom';
import { Row, Col, Card, } from 'reactstrap';

const Report = () => {
    return (
        <div className='report-section'>
            <Row>
                <Col>
                    <Card className='client-report-card'>
                        <div className='report-card-header mb-3 d-flex justify-content-between align-items-center justify-content-between flex-wrap'>
                            <h1 className='client-name'>
                                10x Social Calendar
                            </h1>
                            <div>
                                <Link to='/client-report' className='report-link'>
                                    View More Details
                                </Link>
                            </div>
                        </div>
                        <Row>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 avg-engagement-card'>
                                    <p className='card-title'>Average Engagement Rate</p>
                                    <p>24.3%</p>

                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 links-clicked'>
                                    <p className='card-title'>Links Clicked</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 likes'>
                                    <p className='card-title'>Likes</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className='client-report-card'>
                        <div className='report-card-header mb-3 d-flex justify-content-between align-items-center justify-content-between flex-wrap'>
                            <h1 className='client-name'>
                                10x Social Calendar
                            </h1>
                            <div>
                                <Link to='/client-report' className='report-link'>
                                    View More Details
                                </Link>
                            </div>
                        </div>
                        <Row>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 avg-engagement-card'>
                                    <p className='card-title'>Average Engagement Rate</p>
                                    <p>24.3%</p>

                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 links-clicked'>
                                    <p className='card-title'>Links Clicked</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 likes'>
                                    <p className='card-title'>Likes</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row><Row>
                <Col>
                    <Card className='client-report-card'>
                        <div className='report-card-header mb-3 d-flex justify-content-between align-items-center justify-content-between flex-wrap'>
                            <h1 className='client-name'>
                                10x Social Calendar
                            </h1>
                            <div>
                                <Link to='/client-report' className='report-link'>
                                    View More Details
                                </Link>
                            </div>
                        </div>
                        <Row>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 avg-engagement-card'>
                                    <p className='card-title'>Average Engagement Rate</p>
                                    <p>24.3%</p>

                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 links-clicked'>
                                    <p className='card-title'>Links Clicked</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 likes'>
                                    <p className='card-title'>Likes</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row><Row>
                <Col>
                    <Card className='client-report-card'>
                        <div className='report-card-header mb-3 d-flex justify-content-between align-items-center justify-content-between flex-wrap'>
                            <h1 className='client-name'>
                                10x Social Calendar
                            </h1>
                            <div>
                                <Link to='/client-report' className='report-link'>
                                    View More Details
                                </Link>
                            </div>
                        </div>
                        <Row>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 avg-engagement-card'>
                                    <p className='card-title'>Average Engagement Rate</p>
                                    <p>24.3%</p>

                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 links-clicked'>
                                    <p className='card-title'>Links Clicked</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                            <Col sm='12' md='4' className='mb-2'>
                                <Card className='h-100 likes'>
                                    <p className='card-title'>Likes</p>
                                    <p>2,343</p>
                                </Card>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Report;