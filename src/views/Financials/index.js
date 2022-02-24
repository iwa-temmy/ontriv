import { useState } from 'react';
import {Card, Col, Offcanvas, Row} from 'reactstrap';
import GreenCircle  from '../../assets/img/finanace-green-circle.svg';
import YellowCircle  from '../../assets/img/finanace-yellow-circle.svg';
import BluePlus  from '../../assets/img/bg-blue-plust.svg';
import AddNewClient from './AddClient.js';
import GridView from './GridView.js'
import ListView from './ListView.js';
import ExpenseListView from './ExpenseView.js';

const Finances = () => {
    const [view, setView] = useState('list');
    const [addClient, setAddClient] = useState(false);
    const [invoiceTab, setInvoiceTab] = useState('invoice');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true);
    }



    return (
        <>
            <div className='dashboard dashboard-wrapper'>
              <Row >
                <Col md='7' sm='16' lg='7' xl='5' className='mb-3'>
                  <Card className='py-4 px-4 finances__top-cards'>
                    <Row>
                      <Col md='7' sm='16' lg='8' xl='8' className='finances__top-cards__left-half'>
                        <h6 className='finances__top-cards__title'>
                          Total Received
                        </h6>
                        <h6 className='finances__top-cards__amount-big mt-3'>
                          <span className='mr-2 finances__top-cards__currency'>$</span> 0.00
                        </h6>
                        <div>
                          <h6 className='finances__top-cards__bonus text-center py-0 mx-auto'>
                            +10% In the past month
                          </h6>
                        </div>
                      </Col>
                      <Col md='7' sm='16' lg='8' xl='4' className='px-3'>
                        <div className='finances__top-cards__title d-inline-flex w-100'>
                          <img src={GreenCircle} className='me-2' alt=""/>
                          <h6 className='my-auto mp-2'>
                            Received
                          </h6>
                        </div>
                        <h6 className='finances__top-cards__amount-small ms-3 ps-1'>
                          $0.00
                        </h6>
                        <div className='finances__top-cards__title d-inline-flex mt-3 w-100'>
                          <img src={YellowCircle} className='me-2' alt=""/>
                          <h6 className='my-auto mp-2'>
                            Pending
                          </h6>
                        </div>
                        <h6 className='finances__top-cards__amount-small ms-3 ps-1'>
                          $0.00
                        </h6>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md='7' sm='16' lg='9' xl='7' className='mb-3'>
                  <Row className='h-100'>
                    <Col xl='6'>
                      <Card className='py-4 px-4 h-100 finances__top-cards'>
                          <div md='7' sm='16' lg='8' xl='8' className=''>
                            <h6 className='my-auto mp-2'>
                              Payout
                            </h6>
                            <h6 className='finances__top-cards__amount-big mt-3'>
                              <span className='mr-2 finances__top-cards__currency'>$</span> 0.00
                            </h6>
                          </div>
                      </Card>
                    </Col>
                    <Col xl='6'>
                      <Card className='py-4 h-100 px-4 finances__top-cards'>
                        <div md='7' sm='16' lg='8' xl='8' className=''>
                          <h6 className='my-auto mp-2'>
                            Expenses
                          </h6>
                          <h6 className='finances__top-cards__amount-big mt-3'>
                            <span className='mr-2 finances__top-cards__currency'>$</span> 0.00
                          </h6>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex justify-content-between align-items-center my-4 flex-wrap">
                {
                  invoiceTab === 'invoice' ?
                    <div className='mr-auto cursor-pointer d-inline-flex'>
                      <div className='btn-lg  create-button align-items-center '
                           onClick={() => {
                             setInvoiceTab('invoice')
                           }}>
                        <h6 className='mb-0'>
                          Invoice Overview
                        </h6>
                      </div>
                      <div className='btn-lg  align-items-center '
                           onClick={() => {
                             setInvoiceTab('expenses')
                           }}>
                        <h6 className='mb-0'>
                          Expenses
                        </h6>
                      </div>
                    </div>:
                    <div className='mr-auto cursor-pointer d-inline-flex'>
                      <div className='btn-lg align-items-center '
                           onClick={() => {
                             setInvoiceTab('invoice')
                           }}>
                        <h6 className='mb-0'>
                          Invoice Overview
                        </h6>
                      </div>
                      <div className='btn-lg create-button align-items-center '
                           onClick={() => {
                             setInvoiceTab('expenses')
                           }}>
                        <h6 className='mb-0'>
                          Expenses
                        </h6>
                      </div>
                    </div>
                }
                {
                  invoiceTab === 'invoice'? <div className="d-flex justify-content-between align-items-center client-management-control">
                    <div className='d-inline-flex white-button py-1 px-4 me-4'>
                      <div className='btn-lg w-auto '
                           onClick={() => {
                             setAddClient(true)
                           }}>
                        <h6 className='mb-0'>
                          Request Payout
                        </h6>
                      </div>
                    </div>
                    <div className='d-inline-flex white-button py-1 px-4'>
                      <img src={BluePlus} alt=""/>
                      <div className='btn-lg w-auto '
                           onClick={handleShow}>
                        <h6  className='mb-0 cursor-pointer'>
                          Create a new Invoice
                        </h6>
                      </div>
                    </div>
                  </div>:
                  <div className="d-flex justify-content-between align-items-center client-management-control">
                    <div className='d-inline-flex white-button py-1 px-4'>
                      <img src={BluePlus} alt=""/>
                      <div className='btn-lg w-auto '
                           onClick={handleShow}>
                        <h6  className='mb-0 cursor-pointer'>
                          Add Expense
                        </h6>
                      </div>
                    </div>
                    <div className='d-inline-flex white-button py-1 px-4'>
                      <img src={BluePlus} alt=""/>
                      <div className='btn-lg w-auto '
                           onClick={handleShow}>
                        <h6  className='mb-0 cursor-pointer'>
                          Add Vendor
                        </h6>
                      </div>
                    </div>
                  </div>
                }

              </div>
                {invoiceTab === 'invoice' ?
                  view === 'list' ? <ListView /> :
                    <div className='client-inactive-state text-center'>
                      <Card className='client-inactive-state-card mx-auto'>
                        <h3 className='client-inactive-header-text mx-auto'>You currently have no client</h3>
                        <h3 className='client-inactive-header-text mx-auto'>you can add a new client.</h3>
                        <p className='client-inactive-subhead-text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className=' client-create-button '
                             onClick={() => {
                               setAddClient(true)
                             }}>
                          <h6 className='mb-0'
                          >
                            ADD A NEW CLIENT
                          </h6>
                        </div>

                      </Card>
                    </div> :
                    view === 'list' ? <ExpenseListView /> :
                      <div className='client-inactive-state text-center'>
                        <Card className='client-inactive-state-card mx-auto'>
                          <h3 className='client-inactive-header-text mx-auto'>You currently have no client</h3>
                          <h3 className='client-inactive-header-text mx-auto'>you can add a new client.</h3>
                          <p className='client-inactive-subhead-text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <div className=' client-create-button '
                               onClick={() => {
                                 setAddClient(true)
                               }}>
                            <h6 className='mb-0'
                            >
                              ADD A NEW CLIENT
                            </h6>
                          </div>

                        </Card>
                      </div>

                }

                {
                    addClient && <AddNewClient
                        addState={addClient}
                        setAddState={setAddClient}
                    />}

            </div>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
          </Offcanvas>

        </>
    )

}

export default Finances;
