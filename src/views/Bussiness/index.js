import { useState } from 'react'
import { Row, Col, Card, Button } from 'reactstrap';
import 'react-calendar/dist/Calendar.css';
import {CenteredModal} from '../../components/Modal'
import greenMark from '../../assets/img/green-icon.svg'
import greyMark from '../../assets/img/gray-icon-mark.svg'
import paystackIcon from '../../assets/img/paystack-icon.svg'
import paymentForward from '../../assets/img/payment-forward-arrow.svg'
import stripeIcon from '../../assets/img/strip-icon.svg'
import bankIcon from '../../assets/img/bank-icon.svg'
import successConfeti from '../../assets/img/success-confeti.svg'
import businessIcon from '../../assets/img/bussiness-icon.svg'
import blankImage from '../../assets/img/blank-img.png'
import bluePlus from '../../assets/img/blue-plus-bus-icon.svg'
import facebook from '../../assets/img/facebook.svg'
import twitter from '../../assets/img/twitter.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import blueArrow from '../../assets/img/forward-blue-arrow.svg'
import { usePaystackPayment } from 'react-paystack';


const SetUpBussiness = () => {
    const [postState, updatePostState] = useState(false)
    const [planState, updatePlanState] = useState("basic")
    const [payState, updatePayState] = useState(false)
    const [paymentStatus, updatePaymentStatus] = useState(false)
    const [durationState, updateDurationState] = useState("month")
    const [pricing, updatePricingState] = useState({
      plan: {
        basic: 0,
        pro: 19,
        team: 49
      },
      billing: {
        month: 1,
        year: 12
      },
      promo: {
        month: 1,
        year: 0.8
      }
    })
  let config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: ((pricing.plan[planState] * pricing.billing[durationState]) * pricing.promo[durationState] ) *100 ,
    publicKey: 'pk_test_37e4cadaa4625c995cd9ec9b5cebe0fc78c83d82',
  };
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    updatePaymentStatus(!paymentStatus)
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert('closed')
  }
  const initializePayment = usePaystackPayment(config)

    const togglePayState=()=>{
      updatePayState(!payState)
    }

    const togglePaymentStatus=()=>{
      updatePaymentStatus(!paymentStatus)
    }

    const togglePlanState=(newPlan)=>{
      updatePlanState(newPlan)
    }

    const toggleDurationState=(newDuration)=>{
      updateDurationState(newDuration)
    }

    const togglePostState=()=>{
        updatePostState(!postState)
    }

    return (
        <div className='dashboard dashboard-wrapper'>
            <Row>
                <Col md='16' sm='16' lg='16' xxl='16' className='mb-3'>
                    <div >
                        <Row>
                            <Col md='16'>
                                <div className='dashboard-analytics'>
                                    <Card className='analytics-card px-5 py-0'>
                                        <div className=''>
                                          <Row>
                                            <Col md='6' className='business__right-section px-5'>
                                              <Row className='mb-5 pr-5'>
                                                <Col md='3'>
                                                  <img src={businessIcon} alt=""/>
                                                </Col>
                                                <Col md='9'>
                                                  <h6 className='subscription__card__content__modal__title text-left'>Set up business
                                                    Information
                                                  </h6>
                                                  <h6 className='subscription__card__content__modal__subtext text-left'>Set up business
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                  </h6>
                                                </Col>
                                              </Row>
                                              <Row className='mb-5'>
                                                <div className='business__right-section__image-upload-placeholder px-3 py-3'>
                                                  <Row>
                                                    <Col md='4' className=''>
                                                      <img src={blankImage} alt=""/>
                                                    </Col>
                                                    <Col md='8' className='md-8'>
                                                      <h6 className='business__right-section__image-upload-placeholder__title text-left'>
                                                        Upload Logo Here
                                                      </h6>
                                                      <h6 className='subscription__card__content__modal__subtext text-left'>
                                                        Image format with max size of 3mb
                                                      </h6>
                                                      <div className='d-flex'>
                                                        <img src={bluePlus} alt=""/>
                                                        <h6 className='pt-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue'>
                                                          Upload new photo
                                                        </h6>
                                                      </div>
                                                    </Col>
                                                  </Row>
                                                </div>
                                              </Row>
                                            </Col>
                                            <Col md='6' className='px-5 py-5'>
                                              <div className='px-5'>
                                                <h6 className='mt-5 business__address-title'>
                                                  Enter Business address
                                                </h6>
                                                <input
                                                  className='business__left-section__input w-100 py-3 mt-4 px-3'
                                                  placeholder='Address'
                                                  type="text"/>
                                                <h6 className='mt-5 business__address-title'>
                                                  Add social media accounts
                                                </h6>
                                                <Row>
                                                  <Col md='6'>
                                                    <div className='business__left-section__social-container d-flex px-3 py-3'>
                                                      <img src={instagram} alt=""/>
                                                      <h6 className='business__left-section__social-container__text ms-2 mt-2'>Instagram</h6>
                                                      <img src={blueArrow} style={{ width: '14px' }} className='ms-auto' alt=""/>
                                                    </div>
                                                  </Col>
                                                  <Col md='6' >
                                                    <div className='business__left-section__social-container d-flex px-3 py-3'>
                                                      <img src={facebook} alt=""/>
                                                      <h6 className='business__left-section__social-container__text ms-2 mt-2'>Facebook</h6>
                                                      <img src={blueArrow} style={{ width: '14px' }} className='ms-auto' alt=""/>
                                                    </div>
                                                  </Col>
                                                  <Col md='6'>
                                                    <div className='business__left-section__social-container d-flex px-3 py-3 mt-4'>
                                                      <img src={twitter} alt=""/>
                                                      <h6 className='business__left-section__social-container__text ms-2 mt-2'>Twitter</h6>
                                                      <img src={blueArrow} style={{ width: '14px' }} className='ms-auto' alt=""/>
                                                    </div>
                                                  </Col>
                                                  <Col md='6'>
                                                    <div className='business__left-section__social-container d-flex px-3 py-3 mt-4'>
                                                      <img src={linkedin} alt=""/>
                                                      <h6 className='business__left-section__social-container__text ms-2 mt-2'>Linkedin</h6>
                                                      <img src={blueArrow} style={{ width: '14px' }} className='ms-auto' alt=""/>
                                                    </div>
                                                  </Col>
                                                </Row>
                                                <Row className='px-4'>
                                                  <button onClick={() => togglePostState()} className='mt-5 mb-4 py-3 business__left-section__done-btn'>
                                                    <span className='mx-auto'>Done</span>
                                                  </button>
                                                </Row>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <CenteredModal
                position='centered'
                modalState={postState}
                setModalState={updatePostState}
            >
                <div className='post'>
                    <h2 className='post-title'></h2>
                    <div className='py-5'>

                        <div className='post-details mb-0 '>
                            <Row className='gx-5'>
                              {
                                paymentStatus ?
                                <Col  sm='12' className='d-flex'>
                                  <img src={successConfeti} className='mx-auto' alt=""/>
                                </Col>:null
                              }
                              <Col sm='12' className='d-flex'>
                                {
                                  paymentStatus ?
                                    <h6 className='mx-auto subscription__card__content__modal__title'>
                                      Payment Successful
                                    </h6>:
                                    <h6 className='mx-auto subscription__card__content__modal__title'>
                                      Make a Payment
                                    </h6>
                                }
                                </Col>
                              {
                               paymentStatus ?
                                 <Col sm='12' className='d-flex'>
                                   <h6 className='mx-auto subscription__card__content__modal__subtext'>
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                   </h6>
                                 </Col>:
                               <div>
                                 <Col onClick={() => initializePayment(onSuccess, onClose)} sm='12' className='d-flex'>
                                   <div className='mx-auto justify-content-between py-3 px-4 subscription__card__content__modal__payment__option-container mt-5'>
                                     <img src={paystackIcon} className='' alt=""/><span className='subscription__card__content__modal__payment__name'>Pay with paystack</span>
                                     <img src={paymentForward} className='' alt=""/>
                                   </div>
                                 </Col>
                                 <Col sm='12' className='d-flex'>
                                   <div className='mx-auto justify-content-between py-3 px-4 subscription__card__content__modal__payment__option-container mt-3'>
                                     <img src={stripeIcon} className='' alt=""/><span className='subscription__card__content__modal__payment__name'>Pay with Stripe</span>
                                     <img src={paymentForward} className='' alt=""/>
                                   </div>
                                 </Col>
                                 <Col sm='12' className='d-flex'>
                                   <div className='mx-auto justify-content-between py-3 px-4 subscription__card__content__modal__payment__option-container mt-3'>
                                     <img src={bankIcon} className='' alt=""/><span className='subscription__card__content__modal__payment__name'>Pay via bank transfer</span>
                                     <img src={paymentForward} className='' alt=""/>
                                   </div>
                                 </Col>
                               </div>
                              }
                              <Col>
                                {
                                  paymentStatus ?
                                    <button onClick={() => updatePostState(!postState)} className='mt-5 mb-4 py-3 subscription__card__content__payment-button'>
                                      <span className='mx-auto'>Done</span>
                                    </button>: null
                                }
                              </Col>
                            </Row>
                        </div>
                    </div>

                </div>
            </CenteredModal>
        </div>
    )
}

export default SetUpBussiness;
