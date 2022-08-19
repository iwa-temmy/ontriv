import { useState } from 'react'
import {
  Row,
  Col,
  Card
  //  Button
} from 'reactstrap'
import 'react-calendar/dist/Calendar.css'
import { CenteredModal } from '../../components/Modal'
// import greenMark from '../../assets/img/green-icon.svg'
// import greyMark from '../../assets/img/gray-icon-mark.svg'
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
import { usePaystackPayment } from 'react-paystack'
import axios from '../../utils/Axios'
import notification from '../../utils/Notification'
import { ThreeDots } from 'react-loader-spinner'

const SetUpBussiness = () => {
  const [postState, updatePostState] = useState(false)
  const [planState, updatePlanState] = useState('basic')
  const [payState, updatePayState] = useState(false)
  const [paymentStatus, updatePaymentStatus] = useState(false)
  const [durationState, updateDurationState] = useState('month')
  const [logo, setLogo] = useState(null)
  const [display, setDisplay] = useState(null)
  const [address, setAddress] = useState(null)
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
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
    reference: new Date().getTime().toString(),
    email: 'user@example.com',
    amount:
      pricing.plan[planState] *
      pricing.billing[durationState] *
      pricing.promo[durationState] *
      100,
    publicKey: 'pk_test_37e4cadaa4625c995cd9ec9b5cebe0fc78c83d82'
  }
  const onSuccess = reference => {
    // Implementation for whatever you want to do with reference and after success call.
    updatePaymentStatus(!paymentStatus)
  }

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert('closed')
  }
  const initializePayment = usePaystackPayment(config)
  // eslint-disable-next-line
  const togglePayState = () => {
    updatePayState(!payState)
  }
  // eslint-disable-next-line
  const togglePaymentStatus = () => {
    updatePaymentStatus(!paymentStatus)
  }
  // eslint-disable-next-line
  const togglePlanState = newPlan => {
    updatePlanState(newPlan)
  }
  // eslint-disable-next-line
  const toggleDurationState = newDuration => {
    updateDurationState(newDuration)
  }

  const togglePostState = () => {
    updatePostState(!postState)
  }

  const handlePictureUpload = e => {
    setLogo(e.target.files[0])
    setDisplay(URL.createObjectURL(e.target.files[0]))
    console.log(URL.createObjectURL(e.target.files[0]))
    // handleFileUpload(e.target.files[0])
  }

  const handleBusinessSetup = async () => {
    setLoading(true)
    try {
      if (address && logo) {
        const user = JSON.parse(localStorage.getItem('ontrivCurrentUser'))
        const { country } = user
        const formData = new FormData()
        formData.append('address', address)
        formData.append('logo', logo)
        formData.append('country', country)
        const response = await axios.patch('/business/api/v1/business/', formData)
        setLoading(false)
        console.log(response)
        notification('success', 'Business setup succesful')
        window.location.href = '/overview'
      }
    } catch (err) {
      setLoading(false)
      console.log(err.response)
    }
  }

  return (
    <div className='dashboard dashboard-wrapper'>
      <Row>
        <Col md='16' sm='16' lg='16' xxl='16' className='mb-3'>
          <div>
            <Row>
              <Col md='16'>
                <div className='dashboard-analytics'>
                  <Card className='analytics-card px-3 py-0'>
                    <div className=''>
                      <Row>
                        <Col md='6' className='business__right-section px-5'>
                          <Row className='mb-5 pr-5'>
                            <Col md='3'>
                              <img src={businessIcon} alt='' />
                            </Col>
                            <Col md='9'>
                              <h6 className='subscription__card__content__modal__title text-left'>
                                Set up business Information
                              </h6>
                              {/* <h6 className='subscription__card__content__modal__subtext text-left'>Set up business
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                  </h6> */}
                            </Col>
                          </Row>
                          <Row className='mb-5'>
                            <label
                              className='business__right-section__image-upload-placeholder px-3 py-3'
                              for='logo'
                            >
                              <Row>
                                <Col md='4' className=''>
                                  {display ? (
                                    <div
                                      className='overflow-hidden'
                                      style={{
                                        width: '111px',
                                        height: '107px',
                                        borderRadius: '10px'
                                      }}
                                    >
                                      <img
                                        src={display}
                                        style={{
                                          width: '111px',
                                          height: '107px',
                                          borderRadius: '10px',
                                          objectFit: 'cover'
                                        }}
                                        alt='business_logo'
                                      />
                                    </div>
                                  ) : (
                                    <img src={blankImage} alt='' />
                                  )}
                                </Col>
                                <Col md='8' className='md-8'>
                                  <h6 className='business__right-section__image-upload-placeholder__title text-left'>
                                    Upload Logo Here
                                  </h6>
                                  <h6 className='subscription__card__content__modal__subtext text-left '>
                                    Image format with max size of 3mb
                                  </h6>
                                  <div
                                    className='d-flex align-items-center'
                                    role='button'
                                  >
                                    <img src={bluePlus} alt='' />
                                    <label
                                      for='logo'
                                      className='pt-2 pb-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue'
                                    >
                                      Upload new photo
                                    </label>
                                    <input
                                      type='file'
                                      className='d-none'
                                      id='logo'
                                      htmlFor='logo'
                                      onChange={e => {
                                        handlePictureUpload(e)
                                      }}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </label>
                          </Row>
                        </Col>
                        <Col md='6' className='px-2 pt-2 pb-5'>
                          <div className='px-5'>
                            <h6 className='mt-5 business__address-title'>
                              Enter Business address
                            </h6>
                            <input
                              className='business__left-section__input w-100 py-3 mt-4 px-3'
                              placeholder='Address'
                              type='text'
                              onChange={e => {
                                setAddress(e.target.value)
                              }}
                            />
                            <h6 className='mt-5 business__address-title'>
                              Add social media accounts
                            </h6>
                            <Row>
                              <Col md='6'>
                                <div className='business__left-section__social-container d-flex px-3 py-3'>
                                  <img src={instagram} alt='' />
                                  <h6 className='business__left-section__social-container__text ms-2 mt-2'>
                                    Instagram
                                  </h6>
                                  <img
                                    src={blueArrow}
                                    style={{ width: '14px' }}
                                    className='ms-auto'
                                    alt=''
                                  />
                                </div>
                              </Col>
                              <Col md='6'>
                                <div className='business__left-section__social-container d-flex px-3 py-3'>
                                  <img src={facebook} alt='' />
                                  <h6 className='business__left-section__social-container__text ms-2 mt-2'>
                                    Facebook
                                  </h6>
                                  <img
                                    src={blueArrow}
                                    style={{ width: '14px' }}
                                    className='ms-auto'
                                    alt=''
                                  />
                                </div>
                              </Col>
                              <Col md='6'>
                                <div className='business__left-section__social-container d-flex px-3 py-3 mt-4'>
                                  <img src={twitter} alt='' />
                                  <h6 className='business__left-section__social-container__text ms-2 mt-2'>
                                    Twitter
                                  </h6>
                                  <img
                                    src={blueArrow}
                                    style={{ width: '14px' }}
                                    className='ms-auto'
                                    alt=''
                                  />
                                </div>
                              </Col>
                              <Col md='6'>
                                <div className='business__left-section__social-container d-flex px-3 py-3 mt-4'>
                                  <img src={linkedin} alt='' />
                                  <h6 className='business__left-section__social-container__text ms-2 mt-2'>
                                    Linkedin
                                  </h6>
                                  <img
                                    src={blueArrow}
                                    style={{ width: '14px' }}
                                    className='ms-auto'
                                    alt=''
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className='px-4'>
                              <button
                                disabled={loading}
                                onClick={handleBusinessSetup}
                                // onClick={() => togglePostState()}
                                className='mt-5 mb-4 py-3 business__left-section__done-btn'
                                style={{}}
                              >
                                {loading ? (
                                  <div className='text-center w-100 align-items-center'>
                                    <ThreeDots
                                      color='white'
                                      height={'12px'}
                                      wrapperStyle={{ display: 'block' }}
                                    />
                                  </div>
                                ) : (
                                  <span className='mx-auto w-100 text-center'>
                                    Done
                                  </span>
                                )}
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
          {/* eslint-disable-next-line  */}
          <h2 className='post-title'></h2>
          <div className='py-5'>
            <div className='post-details mb-0 '>
              <Row className='gx-5'>
                {paymentStatus ? (
                  <Col sm='12' className='d-flex'>
                    <img src={successConfeti} className='mx-auto' alt='' />
                  </Col>
                ) : null}
                <Col sm='12' className='d-flex'>
                  {paymentStatus ? (
                    <h6 className='mx-auto subscription__card__content__modal__title'>
                      Payment Successful
                    </h6>
                  ) : (
                    <h6 className='mx-auto subscription__card__content__modal__title'>
                      Make a Payment
                    </h6>
                  )}
                </Col>
                {paymentStatus ? (
                  <Col sm='12' className='d-flex'>
                    <h6 className='mx-auto subscription__card__content__modal__subtext'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed
                    </h6>
                  </Col>
                ) : (
                  <div>
                    <Col
                      onClick={() => initializePayment(onSuccess, onClose)}
                      sm='12'
                      className='d-flex'
                    >
                      <div className='mx-auto justify-content-between py-3 px-4 subscription__card__content__modal__payment__option-container mt-5'>
                        <img src={paystackIcon} className='' alt='' />
                        <span className='subscription__card__content__modal__payment__name'>
                          Pay with paystack
                        </span>
                        <img src={paymentForward} className='' alt='' />
                      </div>
                    </Col>
                    <Col sm='12' className='d-flex'>
                      <div className='mx-auto justify-content-between py-3 px-4 subscription__card__content__modal__payment__option-container mt-3'>
                        <img src={stripeIcon} className='' alt='' />
                        <span className='subscription__card__content__modal__payment__name'>
                          Pay with Stripe
                        </span>
                        <img src={paymentForward} className='' alt='' />
                      </div>
                    </Col>
                    <Col sm='12' className='d-flex'>
                      <div className='mx-auto justify-content-between py-3 px-4 subscription__card__content__modal__payment__option-container mt-3'>
                        <img src={bankIcon} className='' alt='' />
                        <span className='subscription__card__content__modal__payment__name'>
                          Pay via bank transfer
                        </span>
                        <img src={paymentForward} className='' alt='' />
                      </div>
                    </Col>
                  </div>
                )}
                <Col>
                  {paymentStatus ? (
                    <button
                      onClick={() => updatePostState(!postState)}
                      className='mt-5 mb-4 py-3 subscription__card__content__payment-button'
                    >
                      <span className='mx-auto'>Done</span>
                    </button>
                  ) : null}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </CenteredModal>
    </div>
  )
}

export default SetUpBussiness
