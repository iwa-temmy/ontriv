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
import { usePaystackPayment } from 'react-paystack';


const Subscription = () => {
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
                                    <Card className='analytics-card px-5 pt-3 pb-5'>
                                        <div className='d-flex w-full mt-4 mb-4'>
                                          <h6 className='subscription__step__number d-flex'>
                                            <span className='mx-auto my-auto'>1</span>
                                          </h6>
                                          <h6 className='subscription__step__text ml-4'>
                                            Select Plan
                                          </h6>
                                        </div>
                                        <Row>
                                          <Col onClick={() => {togglePlanState('basic')}} md='4' className='sub'>
                                            <div className='subscription__card__border'>
                                              <div className={`subscription__card__content px-4 py-4 ${planState === 'basic' ? "subscription__card__content__active": ""}`}>
                                              <div className='d-flex' style={{"width": "100%"}}>
                                                  <button className='subscription__card__content__btn subscription__card__content__btn1 px-5 me-auto py-2'>
                                                    Basic
                                                  </button>
                                                {
                                                  planState === 'basic' ?
                                                    <img src={greenMark} style={{"height": "50px"}} className='my-auto' alt=""/>:
                                                    <img src={greyMark} style={{"height": "50px"}} className='my-auto' alt=""/>
                                                }
                                                </div>
                                                <h6 className='subscription__card__content__regular-text mt-4'>
                                                  1 user
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  3 Clients
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  10 Social Accounts
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Unlimited invoicing
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Unlimited Content Calendars
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Access to all templates
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  100 Scheduled posts
                                                </h6>
                                                <h6 className='subscription__card__content__price-text mt-4'>
                                                  Free
                                                </h6>
                                              </div>
                                            </div>
                                          </Col>
                                          <Col onClick={() => {togglePlanState('pro')}} md='4' className='sub'>
                                            <div className='subscription__card__border'>
                                              <div className={`subscription__card__content px-4 py-4 ${planState === 'pro' ? "subscription__card__content__active": ""}`}>
                                                <div className='d-flex' style={{"width": "100%"}}>
                                                  <button className='subscription__card__content__btn subscription__card__content__btn2 px-5 me-auto py-2'>
                                                    Pro
                                                  </button>
                                                  {
                                                    planState === 'pro' ?
                                                      <img src={greenMark} style={{"height": "50px"}} className='my-auto' alt=""/>:
                                                      <img src={greyMark} style={{"height": "50px"}} className='my-auto' alt=""/>
                                                  }
                                                </div>
                                                <h6 className='subscription__card__content__regular-text mt-4'>
                                                  1 user
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  3 Clients
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  10 Social Accounts
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Unlimited invoicing
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Unlimited Content Calendars
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Access to all templates
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  100 Scheduled posts
                                                </h6>
                                                <h6 className='subscription__card__content__price-text mt-4'>
                                                  $19/<span className='subscription__card__content__price-text__duration'>Month</span>
                                                </h6>
                                              </div>
                                            </div>
                                          </Col>
                                          <Col onClick={() => {togglePlanState('team')}} md='4' className='sub'>
                                            <div className='subscription__card__border'>
                                              <div className={`subscription__card__content px-4 py-4 ${planState === 'team' ? "subscription__card__content__active": ""}`}>
                                              <div className='d-flex' style={{"width": "100%"}}>
                                                  <button className='subscription__card__content__btn subscription__card__content__btn3 px-5 me-auto py-2'>
                                                    Team
                                                  </button>
                                                {
                                                  planState === 'team' ?
                                                    <img src={greenMark} style={{"height": "50px"}} className='my-auto' alt=""/>:
                                                    <img src={greyMark} style={{"height": "50px"}} className='my-auto' alt=""/>
                                                }
                                                </div>
                                                <h6 className='subscription__card__content__regular-text mt-4'>
                                                  1 user
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  3 Clients
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  10 Social Accounts
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Unlimited invoicing
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Unlimited Content Calendars
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  Access to all templates
                                                </h6>
                                                <h6 className='subscription__card__content__regular-text mt-1'>
                                                  100 Scheduled posts
                                                </h6>
                                                <h6 className='subscription__card__content__price-text mt-4'>
                                                  $49/<span className='subscription__card__content__price-text__duration'>Month</span>
                                                </h6>
                                              </div>
                                            </div>
                                          </Col>
                                        </Row>
                                      {

                                      }
                                      <div>
                                        <div className='d-flex w-full mt-5 mb-4'>
                                          <h6 className='subscription__step__number d-flex'>
                                            <span className='mx-auto my-auto'>2</span>
                                          </h6>
                                          <h6 className='subscription__step__text ml-4'>
                                            Choose your billing
                                          </h6>
                                        </div>
                                        <Row >
                                          <Col onClick={() => {toggleDurationState('year')}} md='5' className='sub'>
                                            <div className='subscription__card__border'>
                                              <div className={`subscription__card__content subscription__card__content__plan px-4 ${durationState === 'year' ? "subscription__card__content__active": ""}`}>
                                                <div className='d-flex py-2' style={{"width": "100%"}}>
                                                  {
                                                    durationState === 'year' ?
                                                      <img src={greenMark} className='mt-2' style={{ height: "40px"}} alt=""/>:
                                                      <img src={greyMark} className='mt-2' style={{ height: "40px"}} alt=""/>
                                                  }
                                                  <h6 className='subscription__card__content__price-text mt-2 me-auto'>
                                                    Year
                                                  </h6>
                                                  <h6 className='subscription__card__content__price-text mt-2'>
                                                    ${ ((pricing.plan[planState] * 12) * 0.8).toFixed(2) }/<span className='subscription__card__content__price-text__duration'>Year</span> <br/>
                                                    <span className='subscription__card__content__price-text__subscript ml-auto'>Save  20%</span>
                                                  </h6>
                                                </div>
                                              </div>
                                            </div>
                                          </Col>
                                          <Col md='2'></Col>
                                          <Col onClick={() => {toggleDurationState('month')}} md='5' className='sub'>
                                            <div className='subscription__card__border'>
                                              <div className={`subscription__card__content subscription__card__content__plan px-4 ${durationState === 'month' ? "subscription__card__content__active": ""}`}>
                                                <div className='d-flex py-2' style={{"width": "100%"}}>
                                                  {
                                                    durationState === 'month' ?
                                                      <img src={greenMark} className='my-auto' style={{ height: "40px"}} alt=""/>:
                                                      <img src={greyMark} className='my-auto' style={{ height: "40px"}} alt=""/>
                                                  }
                                                  <h6 className='subscription__card__content__price-text my-auto me-auto'>
                                                    Month
                                                  </h6>
                                                  <h6 className='subscription__card__content__price-text my-auto'>
                                                    ${pricing.plan[planState]}/<span className='subscription__card__content__price-text__duration'>Month</span> <br/>
                                                    <span className='subscription__card__content__price-text__subscript ml-auto'>dfs</span>
                                                  </h6>
                                                </div>
                                              </div>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col>
                                          </Col>
                                          <Col>
                                            {
                                              planState === 'basic' ?
                                                null:
                                                <button onClick={() => togglePostState()} className='mt-5 mb-4 py-3 subscription__card__content__payment-button'>
                                                  <span className='mx-auto'>Make Payment</span>
                                                </button>
                                            }
                                          </Col>
                                          <Col>
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

export default Subscription;
