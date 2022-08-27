import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'reactstrap'
import { FiArrowRight } from 'react-icons/fi'
import Table from '../../../components/Table'
// import ontriv from '../../../assets/img/ontriv.png'
import { connect } from 'react-redux'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { MdAddCircle } from 'react-icons/md'

import { GoPrimitiveDot } from 'react-icons/go'
// import { HiPlus } from 'react-icons/hi'
import facebook from '../../../assets/img/facebook.png'
import twitter from '../../../assets/img/twitter.png'
import instagram from '../../../assets/img/instagram.png'
import linkedin from '../../../assets/img/linkedin.png'
import cl from '../../../assets/img/cl.png'

// import Calendar from 'react-calendar';
import Calendar from '../../../components/Calendar'
import { CenteredModal as Modal } from '../../../components/Modal'
import { getClientDetails } from '../../../redux/actions'
import { useParams } from 'react-router-dom'

const clients = [
  {
    id: 1,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 2,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 3,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 4,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 5,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 6,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 7,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 8,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 9,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 10,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 11,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },

  {
    id: 13,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  },
  {
    id: 14,
    name: 'March Inoice',
    invoiceNo: '#101',
    createDate: '03/03/21',
    amount: '$1000.00',
    status: 'Paid'
  }
]

const ClientDetails = ({ getClientDetails, clientDetails }) => {
  const [details, setClientDetails] = useState({})
  const { id } = useParams()
  useEffect(() => {
    getClientDetails(id)
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log('---------------->>>>>', clientDetails)
    if (clientDetails) {
      console.log(id)
      const client = clientDetails.filter(el => el.id === Number(id))
      console.log(client)
      setClientDetails(client[0])
    }
    // eslint-disable-next-line
  }, [clientDetails])

  const [websiteState, setWebsiteState] = useState(false)
  const [hashtagState, setHashtagState] = useState(false)

  const cols = React.useMemo(
    () => [
      {
        Header: 'Invoice',
        accessor: 'name',
        cellClass: 'invoice-data-item pt-4',
        Cell: props => <p>{props.value}</p>
      },
      {
        Header: 'Date',
        accessor: 'createDate',
        cellClass: 'pt-4 invoice-data-item',
        Cell: props => <p>{props.value}</p>
      },
      {
        Header: 'Inv No',
        accessor: 'invoiceNo',
        cellClass: 'pt-4 invoice-data-item ',
        Cell: props => <p>{props.value}</p>
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        cellClass: 'pt-4 invoice-data-item-bold ',
        Cell: props => <p>{props.value}</p>
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'pt-3 invoice-data-item text-center d-flex',
        Cell: props => (
          <div className='invoice-status  '>
            <GoPrimitiveDot color='' className='mb-1 ml-2' />
            {props.value}
          </div>
        )
      }
    ],
    []
  )

  return (
    <div className='client-details'>
      <Row className=' mb-3'>
        <Col sm='12'>
          <Row>
            <Col sm='12' md='8'>
              {/* <div className='client-profile-section'> */}
              <Card className='client-profile-card '>
                <div className='d-flex justify-content-between align-items-center '>
                  <div className='client-details-img-wrapper d-flex justify-content-center align-items-center'>
                    <img
                      src={details?.profile_image}
                      alt='logo'
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                  </div>
                  <div className='mb-0'>
                    <h1 className='client-name'>{details?.fullname}</h1>
                    <p className='client-project mb-0'>Content Calendar</p>
                  </div>
                  <div className='project-timeline'>
                    <h1>Business category</h1>
                    <p className='mb-0'></p>
                  </div>
                  <div className='client-portal'>
                    <h1>Client Portal</h1>
                    <p className='mb-0'>
                      Send Invite <FiArrowRight size='18px' />
                    </p>
                  </div>
                </div>
              </Card>
              <Card className='client-basic-information my-4'>
                <h2 className=''>Client Information</h2>
                <div>
                  <Row>
                    <Col sm='6' xl='4'>
                      <div
                        className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'
                        onClick={() => {
                          setWebsiteState(!websiteState)
                        }}
                      >
                        <h2>Website</h2>
                        {/* <IoIosCheckmarkCircle
                          className='information-icon'
                          color='#00D67D'
                        /> */}
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />
                      </div>
                    </Col>
                    <Col sm='6' xl='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>Brand color</h2>
                        {/* <IoIosCheckmarkCircle
                          className='information-icon'
                          color='#00D67D'
                        /> */}
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />
                      </div>
                    </Col>
                    <Col sm='6' xl='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>Brand font</h2>
                        {/* <IoIosCheckmarkCircle
                          className='information-icon'
                          color='#00D67D'
                        /> */}
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />
                      </div>
                    </Col>

                    <Col sm='6' xl='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>Preferred tone</h2>
                        {/* <IoIosCheckmarkCircle
                          className='information-icon'
                          color='#00D67D'
                        /> */}
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />
                      </div>
                    </Col>
                    <Col sm='6' xl='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>Target audience</h2>
                        {/* <IoIosCheckmarkCircle
                          className='information-icon'
                          color='#00D67D'
                        /> */}
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />
                      </div>
                    </Col>
                    <Col sm='6' xl='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>Main goal</h2>
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />{' '}
                      </div>
                    </Col>
                    <Col sm='2' md='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>USP</h2>
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />{' '}
                      </div>
                    </Col>
                    <Col sm='2' md='4'>
                      <div
                        className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'
                        onClick={() => {
                          setHashtagState(!hashtagState)
                        }}
                      >
                        <h2>Hashtag Sets</h2>
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />{' '}
                      </div>
                    </Col>
                    <Col sm='2' md='4'>
                      <div className='client-information-item cursor-pointer d-flex align-items-center justify-content-between'>
                        <h2>Note</h2>
                        <MdAddCircle
                          className='information-icon'
                          color='#9DA8B6'
                        />{' '}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>

              <Col>
                {/* <div className='client-profile-section'> */}

                <Card className='client-invoices'>
                  <h2 className='mb-0'>Invoices</h2>
                  {/* <div className='mb-0 mt-2'>
                    <Table
                      columns={cols}
                      data={clients}
                      defaultPageSize={2}
                      pagePosition='left'
                    />
                  </div> */}
                  <div className='client-details-empty-invoice-state py-5'>
                    <div className='mb-2'>
                      <p
                        className='mb-0 text-center'
                        style={{
                          fontWeight: '400',
                          fontSize: '18px',
                          lineheight: '27px',
                          letterspacing: ' 0.374px',
                          color: '#04004D'
                        }}
                      >
                        This client does not have any invoices
                      </p>
                      <p
                        className='mb-0 text-center'
                        style={{
                          fontWeight: '400',
                          fontSize: '18px',
                          lineheight: '27px',
                          letterspacing: ' 0.374px',
                          color: '#04004D'
                        }}
                      >
                        created by you
                      </p>
                    </div>
                    <div className='pt-2 pb-2 mb-1 text-center '>
                      <button
                        className=' btn-primary btn py-3 w-50'
                        style={{
                          borderRadius: '16px',
                          border:"none",
                          background:
                            'linear-gradient(93.88deg, #49A8F8 6.88%, #0053F4 74.45%) !important'
                        }}
                        onClick={() => {
                          // toggleInvite()
                          // // setAddClient(false)
                          // setSuccessTitle('Invite Sent')
                        }}
                      >
                        Create New Invoice
                      </button>
                    </div>
                  </div>
                </Card>

                {/* </div> */}
              </Col>

              {/* </div> */}
            </Col>
            <Col sm='12' md='4'>
              <Card className='content-calendar'>
                <Row>
                  <Col sm='12' className='first-section'>
                    <h2 className=''>Scheduled Post</h2>
                    <div
                      className='p-3'
                      style={{
                        border: '1px solid #E5ECF2',
                        borderRadius: '24px'
                      }}
                    >
                      <Calendar />
                    </div>
                  </Col>
                  <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h2 className='mb-0'>Connected accounts</h2>
                  </div>
                  <Row className='client-accounts mb-5 gx-2'>
                    {/* <Col className='d-flex'> */}
                    <Col md='6'>
                      <div className='account justify-content-between align-items-center d-flex'>
                        <div
                          style={{
                            width: '22px',
                            height: '22px'
                          }}
                        >
                          <img
                            style={{
                              width: '22px',
                              height: '22px'
                            }}
                            src={instagram}
                            alt='instagram'
                          />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <p
                            style={{
                              fontSize: '13px',
                              fontWeight: '400',
                              marginLeft: '5px',
                              marginBottom: '0'
                            }}
                          >
                            Instagram
                          </p>
                          <div className='icon-img-container'>
                            {/* <IoIosCheckmarkCircle color='#00D67D' /> */}
                            {/* <img
                              src={cl}
                              alt='...'
                              height='16px'
                              width='16px'
                            /> */}
                            <MdAddCircle
                              className='information-icon'
                              color='#9DA8B6'
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md='6'>
                      <div className='account justify-content-between align-items-center d-flex'>
                        <div
                          style={{
                            width: '22px',
                            height: '22px'
                          }}
                        >
                          <img
                            style={{
                              width: '22px',
                              height: '22px'
                            }}
                            src={facebook}
                            alt='facebook'
                          />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <p
                            style={{
                              fontSize: '13px',
                              fontWeight: '400',
                              marginLeft: '5px',
                              marginBottom: '0'
                            }}
                          >
                            Facebook
                          </p>
                          <div className='icon-img-container'>
                            {/* <IoIosCheckmarkCircle color='#00D67D' /> */}
                            {/* <img
                              src={cl}
                              alt='...'
                              height='16px'
                              width='16px'
                            /> */}
                            <MdAddCircle
                              className='information-icon'
                              color='#9DA8B6'
                            />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md='6'>
                      <div className='account justify-content-between align-items-center d-flex'>
                        <div
                          style={{
                            width: '22px',
                            height: '22px'
                          }}
                        >
                          <img
                            style={{
                              width: '22px',
                              height: '22px'
                            }}
                            src={twitter}
                            alt='facebook'
                          />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <p
                            style={{
                              fontSize: '13px',
                              fontWeight: '400',
                              marginLeft: '5px',
                              marginBottom: '0'
                            }}
                          >
                            Twitter
                          </p>
                          <div className='icon-img-container'>
                            {/* <IoIosCheckmarkCircle color='#00D67D' /> */}
                            {/* <img
                              src={cl}
                              alt='...'
                              height='16px'
                              width='16px'
                            /> */}
                            <MdAddCircle
                              className='information-icon'
                              color='#9DA8B6'
                            />
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col md='6'>
                      <div className='account  align-items-center d-flex'>
                        <div className=''>
                          <img
                            style={{
                              marginRight: '0',
                              width: '22px',
                              height: '22px'
                            }}
                            src={linkedin}
                            alt='linkedin'
                          />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <p
                            style={{
                              fontSize: '13px',
                              fontWeight: '400',
                              marginLeft: '5px',
                              marginBottom: '0'
                            }}
                          >
                            Linkedin
                          </p>
                          <div className='icon-container'>
                            <MdAddCircle color='#9DA8B6' />
                          </div>
                        </div>
                      </div>
                    </Col>

                    {/* </div> */}
                    {/* <div className='d-flex'> */}

                    {/* </div> */}
                  </Row>

                  {/* <Col sm='2' className='second-section text-center'>
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


                                    </Col> */}
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal modalState={websiteState} setModalState={setWebsiteState}>
        <div className='client-details-settings-modal text-center'>
          <h1>Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <input placeholder='https://www.website.com' vtype='text' />
          </div>
          <div>
            <Button className='py-4'>Save</Button>
          </div>
        </div>
      </Modal>

      <Modal modalState={hashtagState} setModalState={setHashtagState}>
        <div className='client-details-settings-modal text-center'>
          <h1>Hashtag sets</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <input placeholder='Hashtag sets' vtype='text' />
          </div>
          <div>
            <Button className='py-4'>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = ({ client }) => {
  const { clientDetails } = client
  return { clientDetails }
}

export default connect(mapStateToProps, { getClientDetails })(ClientDetails)
