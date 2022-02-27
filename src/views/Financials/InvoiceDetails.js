import { Row, Col } from 'reactstrap'
import { CenteredModal as Modal } from '../../components/Modal';
import React, {useState} from "react";
import boxIcon from '../../assets/img/box-icon-finance.svg';
import TitleModalLogoHere from '../../assets/img/TitleModalLogoHere.svg';
import GreenMark from '../../assets/img/green-mark-modal.svg';
import HrInvoice from '../../assets/img/hr-invoice.svg';

const InvoiceDetails = ({value}) => {
    const [showModal, setShowModal] = useState(false);
    return (
      <div>
        <img src={boxIcon} alt='client-logo'
             onClick={() => { setShowModal(true) }}
        />
        <Modal
            modalState={showModal}
            setModalState={setShowModal}
          >
            <div className='add-client-wrapper-2 text-center '>
              <div className='d-inline-flex' style={{ width: "100%"}}>
                <img className='me-auto' src={TitleModalLogoHere} alt=""/>
                <h6 className='invoice-modal__title'>
                  INV-057
                </h6>
              </div>
              <Row>
                <Col xl='6'>
                  <h6 className='invoice-modal__light text-left mb-3'>
                    4945  Forest Avenue, New York, 10004, United States
                  </h6>
                  <h6 className='invoice-modal__bold text-left mb-3'>
                    27 March, 2020
                  </h6>
                  <div className=''>
                    <h6 className='invoice-modal__light text-left'>
                      Due Date
                    </h6>
                    <h6 className='invoice-modal__bold text-left'>
                      04 April, 2020
                    </h6>
                  </div>
                </Col>
                <Col xl='6'>
                  <div className='' style={{ textAlign: 'right' }}>
                    <h6 className='invoice-modal__light text-right' style={{ textAlign: 'right' }}>
                      Billed to,
                    </h6>
                    <h6 className='invoice-modal__bold text-right' style={{ fontSize: '14px', fontWeight: '500' }}>
                      Terry Baptista
                    </h6>
                    <h6 className='invoice-modal__light text-right' style={{ textAlign: 'right' }}>
                      3455  Geraldine Lane,
                    </h6>
                    <h6 className='invoice-modal__light text-right' style={{ textAlign: 'right' }}>
                      New York
                    </h6>
                    <h6 className='invoice-modal__light text-right' style={{ textAlign: 'right' }}>
                      10013
                    </h6>
                    <h6 className='invoice-modal__light text-right' style={{ textAlign: 'right' }}>
                      United States
                    </h6>
                  </div>
                </Col>
              </Row>
              <div className='d-inline-flex w-100'>
                <img className='ms-auto' src={GreenMark} alt=""/>
                <h6 className='invoice-modal__paid mt-3'>
                  PAID
                </h6>
              </div>
              <img src={HrInvoice} className='w-100' alt=""/>
              <div className='mt-5 invoice-modal__grey-section w-100 py-4 px-4'>
                <Row style={{ textAlign: 'left' }}>
                  <Col xl='3'>
                    <h6 className='invoice-modal__qty '>
                      Qty
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      01
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      01
                    </h6>
                  </Col>
                  <Col xl='3'>
                    <h6 className='invoice-modal__qty'>
                      Qty
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      Item Name
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      Item Name
                    </h6>
                  </Col>
                  <Col xl='3'>
                    <h6 className='invoice-modal__qty'>
                      Qty
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      3,000.00
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      3,000.00
                    </h6>
                  </Col>
                  <Col xl='3'>
                    <h6 className='invoice-modal__qty'>
                      Qty
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      3,000.00
                    </h6>
                    <h6 className='invoice-modal__qty'>
                      3,000.00
                    </h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col className='ms-auto' xl='11'>
                  <div className='mt-5 invoice-modal__grey-section py-4 px-4'>
                    <Row>
                      <Col xl='6'>
                        <h6 className='invoice-modal__qty '>
                          Sub Total
                        </h6>
                        <h6 className='invoice-modal__qty'>
                          VAT(10%)
                        </h6>
                      </Col>
                      <Col xl='6'>
                        <h6 className='invoice-modal__qty '  style={{ textAlign: 'right' }}>
                          $ 4,500.00
                        </h6>
                        <h6 className='invoice-modal__qty'  style={{ textAlign: 'right' }}>
                          $450.00
                        </h6>
                      </Col>
                    </Row>
                    <Row className='invoice-modal__blue-section py-3'>
                      <div className='d-inline-flex w-100'>
                        <h6 className='invoice-modal__qty my-auto' style={{ textAlign: 'left'}}>
                          Total (USD)
                        </h6>
                        <h6 className='invoice-modal__total ms-auto my-auto' style={{ textAlign: 'right' }}>
                          $ 4,950.00
                        </h6>
                      </div>
                    </Row>
                  </div>
                </Col>
              </Row>

            </div>

          </Modal>
      </div>
    )

}

export default InvoiceDetails;
