import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'reactstrap'
import { FiArrowRight } from 'react-icons/fi';
import Table from '../../../components/Table';
import ontriv from '../../../assets/img/ontriv.png';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiPlus } from 'react-icons/hi';
import facebook from '../../../assets/img/facebook.png'
import twitter from '../../../assets/img/twitter.png'
import instagram from '../../../assets/img/instagram.png'
import linkedin from '../../../assets/img/linkedin.png'
import Calendar from 'react-calendar';
import { CenteredModal as Modal } from '../../../components/Modal'







const clients = [
    {
        id: 1,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 2,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 3,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 4,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 5,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 6,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 7,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 8,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 9,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 10,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 11,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },

    {
        id: 13,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
    {
        id: 14,
        name: 'March Inoice',
        invoiceNo: '#101',
        createDate: '03/03/21',
        amount: '$1000.00',
        status: 'Paid',
    },
];

const ClientDetails = () => {

    const [websiteState, setWebsiteState] = useState(false);
    const [hashtagState, setHashtagState] = useState(false);


    const cols = React.useMemo(
        () => [
            {
                Header: 'Invoice',
                accessor: 'name',
                cellClass: 'invoice-data-item pt-4',
                Cell: (props) => <p>{props.value}</p>,
            },
            {
                Header: 'Date',
                accessor: 'createDate',
                cellClass: 'pt-4 invoice-data-item',
                Cell: (props) => <p>{props.value}</p>,
            },
            {
                Header: 'Inv No',
                accessor: 'invoiceNo',
                cellClass: 'pt-4 invoice-data-item ',
                Cell: (props) => <p>{props.value}</p>,
            },
            {
                Header: 'Amount',
                accessor: 'amount',
                cellClass: 'pt-4 invoice-data-item-bold ',
                Cell: (props) => <p>{props.value}</p>,
            },
            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'pt-3 invoice-data-item text-center d-flex',
                Cell: (props) => <div className='invoice-status  '>
                    <GoPrimitiveDot color='' className='mb-1 ml-2' />
                    {props.value}

                </div>,
            },

        ],
        []
    );


    return (
        <div className="client-details">
            <Row className=' mb-3'>
                <Col sm='12'>
                    <Row >
                        <Col sm='12' md='6'>
                            {/* <div className='client-profile-section'> */}
                            <Card className='client-profile-card '>
                                <div className='d-flex justify-content-between '>
                                    <div className='client-img-wrapper'>
                                        <img src={ontriv} alt='client-logo' />
                                    </div>
                                    <div className=''>
                                        <h1 className='client-name'>Digital Seed</h1>
                                        <p className='client-project'>Content Calendar</p>
                                    </div>
                                    <div className='project-timeline'>
                                        <h1>Project Timeline</h1>
                                        <p>6 Months</p>
                                    </div>
                                    <div className='client-portal'>
                                        <h1>Client Portal</h1>
                                        <p>Send Invite <FiArrowRight size='18px' /></p>
                                    </div>

                                </div>

                            </Card>
                            <Card className='client-basic-information my-3'>
                                <h2 className=''>Client Information</h2>
                                <div>
                                    <Row>
                                        <Col sm='6' xl='4' >
                                            <div className='client-information-item d-flex align-items-center justify-content-between'
                                                onClick={() => {
                                                    setWebsiteState(!websiteState)
                                                }}
                                            >
                                                <h2>Website</h2>
                                                <IoIosCheckmarkCircle className='information-icon' color='#00D67D' />
                                            </div>
                                        </Col>
                                        <Col sm='6' xl='4' >
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>Brand color</h2>
                                                <IoIosCheckmarkCircle className='information-icon' color='#00D67D' />
                                            </div>
                                        </Col><Col sm='6' xl='4' >
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>Brand font</h2>
                                                <IoIosCheckmarkCircle className='information-icon' color='#00D67D' />
                                            </div>
                                        </Col>

                                        <Col sm='6' xl='4' >
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>Preferred tone</h2>
                                                <IoIosCheckmarkCircle className='information-icon' color='#00D67D' />
                                            </div>
                                        </Col><Col sm='6' xl='4' >
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>Target audience</h2>
                                                <IoIosCheckmarkCircle className='information-icon' color='#00D67D' />
                                            </div>
                                        </Col>
                                        <Col sm='6' xl='4' >
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>Main goal</h2>
                                                {/* <IoIosCheckmarkCircle className='information-icon' color='#00D67D' /> */}
                                                {' '}
                                            </div>
                                        </Col>
                                        <Col sm='2' md='4'>
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>USP</h2>
                                                {/* <IoIosCheckmarkCircle className='information-icon' color='#00D67D' /> */}
                                                {' '}
                                            </div>
                                        </Col>
                                        <Col sm='2' md='4'>
                                            <div className='client-information-item d-flex align-items-center justify-content-between'
                                                onClick={() => {
                                                    setHashtagState(!hashtagState)
                                                }}
                                            >
                                                <h2>Hashtag Sets</h2>
                                                {/* <IoIosCheckmarkCircle className='information-icon' color='#00D67D' /> */}
                                                {' '}
                                            </div>
                                        </Col>
                                        <Col sm='2' md='4'>
                                            <div className='client-information-item d-flex align-items-center justify-content-between'>
                                                <h2>Note</h2>
                                                {/* <IoIosCheckmarkCircle className='information-icon' color='#00D67D' /> */}
                                                {' '}
                                            </div>
                                        </Col>

                                    </Row>
                                </div>


                            </Card>

                            {/* </div> */}
                        </Col>
                        <Col sm='12' md='6' >
                            <Card className='content-calendar'>
                                <Row>
                                    <Col sm='10' className='first-section'>
                                        <h2 className=''>Content Calendar</h2>
                                        <Calendar className='w-100' />

                                    </Col>
                                    <Col sm='2' className='second-section text-center'>
                                        <p className='month active'>JAN</p>
                                        <p className='month'>FEB</p>
                                        <p className='month'>MAR</p>
                                        <p className='month'>APR</p>
                                        <p className='month'>MAY</p>
                                        <p className='month'>JUN</p>
                                        <p className='month'>JUL</p>
                                        <p className='month'>AUG</p>
                                        <p className='month'>SEP</p>
                                        <p className='month'>OCT</p>
                                        <p className='month'>NOV</p>
                                        <p className='month'>DEC</p>


                                    </Col>
                                </Row>
                            </Card>


                        </Col>
                    </Row>


                </Col>
            </Row>

            <Row>
                <Col sm='12'>
                    <Row>
                        <Col sm='12' md='6'>
                            {/* <div className='client-profile-section'> */}


                            <Card className='client-invoices'>
                                <h2 className='mb-0'>Invoices</h2>
                                <div className="mb-0 mt-2">
                                    <Table columns={cols} data={clients} defaultPageSize={2} pagePosition='left' />
                                </div>
                            </Card>


                            {/* </div> */}
                        </Col>
                        <Col sm='12' md='6'>

                            <Card className='client-connected-account-card '>
                                <div className='d-flex justify-content-between align-items-center mb-5'>
                                    <h2 className='mb-0'>Connected accounts</h2>
                                    <div className='btn-lg  schedule-post-button align-items-center' >
                                        <h6 className='mb-0'>
                                            <HiPlus color='#2465ec' className='post-icon' />
                                            Schedule Post
                                        </h6>
                                    </div>

                                </div>
                                <Row className='client-accounts'>
                                    {/* <Col className='d-flex'> */}
                                    <Col md='6'>
                                        <div className='account justify-content-between align-items-center d-flex'>
                                            <div>
                                                <img src={instagram} alt='instagram' />
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <p>Instagram</p>
                                                <div className='icon-container'>
                                                    <IoIosCheckmarkCircle color='#00D67D' />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='account justify-content-between align-items-center d-flex'>
                                            <div>
                                                <img src={facebook} alt='facebook' />
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <p>Facebook</p>
                                                <div className='icon-container'>
                                                    <IoIosCheckmarkCircle color='#00D67D' />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='account justify-content-between align-items-center d-flex'>
                                            <div>
                                                <img src={twitter} alt='twitter' />
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <p>Twitter</p>
                                                <div className='icon-container'>
                                                    <IoIosCheckmarkCircle color='#00D67D' />
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='account justify-content-between align-items-center d-flex'>
                                            <div className=''>
                                                <img src={linkedin} alt='linkedin' />
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <p>Linkedin</p>
                                                <div className='icon-container'>
                                                    <IoIosCheckmarkCircle color='#00D67D' />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>


                                    {/* </div> */}
                                    {/* <div className='d-flex'> */}


                                    {/* </div> */}
                                </Row>

                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Modal
                modalState={websiteState}
                setModalState={setWebsiteState}
            >
                <div className='client-details-settings-modal text-center'>
                    <h1>Website</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <input placeholder='https://www.website.com' vtype='text' />
                    </div>
                    <div>
                        <Button className='py-4'>
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>

            <Modal
                modalState={hashtagState}
                setModalState={setHashtagState}
            >
                <div className='client-details-settings-modal text-center'>
                    <h1>Hashtag sets</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <input placeholder='Hashtag sets' vtype='text' />
                    </div>
                    <div>
                        <Button className='py-4'>
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ClientDetails;