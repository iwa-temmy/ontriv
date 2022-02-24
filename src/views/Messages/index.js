import { useState } from 'react'
import {
  Row, Col, Card,
  // Button
} from 'reactstrap';
import 'react-calendar/dist/Calendar.css';
import { CenteredModal } from '../../components/Modal'
import greenMark from '../../assets/img/green-icon.svg'
import greyMark from '../../assets/img/gray-icon-mark.svg'
import paystackIcon from '../../assets/img/paystack-icon.svg'
import paymentForward from '../../assets/img/payment-forward-arrow.svg'
import stripeIcon from '../../assets/img/strip-icon.svg'
import bankIcon from '../../assets/img/bank-icon.svg'
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'
import { usePaystackPayment } from 'react-paystack';


const Messages = () => {
  const [postState, updatePostState] = useState(false)
  const [planState, updatePlanState] = useState("basic")
  const [payState, updatePayState] = useState(false)
  const [paymentStatus, updatePaymentStatus] = useState(false)
  const [durationState, updateDurationState] = useState("month")
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
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: ((pricing.plan[planState] * pricing.billing[durationState]) * pricing.promo[durationState]) * 100,
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
  // eslint-disable-next-line
  const togglePayState = () => {
    updatePayState(!payState)
  }
  // eslint-disable-next-line
  const togglePaymentStatus = () => {
    updatePaymentStatus(!paymentStatus)
  }

  const togglePlanState = (newPlan) => {
    updatePlanState(newPlan)
  }

  const toggleDurationState = (newDuration) => {
    updateDurationState(newDuration)
  }

  const togglePostState = () => {
    updatePostState(!postState)
  }

  return (
    <div className='dashboard dashboard-wrapper'>
      <div className="row w-100 h-100">
        <div className="col-md-4 col-xl-3 chat">
          <div className="card mb-sm-3 mb-md-0 contacts_card">
            <div className="card-header">
              <div className="input-group d-inline-flex w-100">
                <img src={searchChat} className='ms-5' alt=""/>
                <input type="text" placeholder="Find view" name="" className="form-control search px-1" />
              </div>
            </div>
            <div className="card-body contacts_body px-4">
              <h6 className='chat-titles mb-4'>
                Clients
              </h6>
              <ui className="contacts">
                <li className="active">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont d-flex">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                           className=" user_img px-2 py-2 my-auto"/>
                    </div>
                    <div className="user_info my-auto mt-2 ms-0">
                        <span>Digital Seed</span>
                        <p>Content Calendar</p>
                    </div>
                    <img src={forwardChat} className='ms-auto' alt=""/>
                  </div>
                </li>
                <li className="">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont d-flex">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                           className=" user_img px-2 py-2 my-auto"/>
                    </div>
                    <div className="user_info my-auto mt-2 ms-0">
                        <span>Digital Seed</span>
                        <p>Content Calendar</p>
                    </div>
                    <img src={forwardChat} className='ms-auto' alt=""/>
                  </div>
                </li>
                <li className="">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont d-flex">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                           className=" user_img px-2 py-2 my-auto"/>
                    </div>
                    <div className="user_info my-auto mt-2 ms-0">
                        <span>Digital Seed</span>
                        <p>Content Calendar</p>
                    </div>
                    <img src={forwardChat} className='ms-auto' alt=""/>
                  </div>
                </li>
                <li className="">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont d-flex">
                      <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                           className=" user_img px-2 py-2 my-auto"/>
                    </div>
                    <div className="user_info my-auto mt-2 ms-0">
                        <span>Digital Seed</span>
                        <p>Content Calendar</p>
                    </div>
                    <img src={forwardChat} className='ms-auto' alt=""/>
                  </div>
                </li>
              </ui>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="col-md-8 col-xl-9 chat">
          <div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="user_info">
                  <h6 className='chat-titles'>Conversations</h6>
                </div>
              </div>
            </div>
            <div className="card-body msg_card_body">
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                       className="rounded-circle user_img_msg"/>
                  <span className="online_icon"></span>
                </div>
                <div className="msg_cotainer">
                  <h6 >
                    Hi, how are you samim?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  <h6>
                    Hi Khalid i am good tnx how about you?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time_send ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                       className="rounded-circle user_img_msg"/>
                  <span className="online_icon"></span>
                </div>
                <div className="msg_cotainer">
                  <h6 >
                    Hi, how are you samim?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  <h6>
                    Hi Khalid i am good tnx how about you?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time_send ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                       className="rounded-circle user_img_msg"/>
                  <span className="online_icon"></span>
                </div>
                <div className="msg_cotainer">
                  <h6 >
                    Hi, how are you samim?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  <h6>
                    Hi Khalid i am good tnx how about you?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time_send ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                       className="rounded-circle user_img_msg"/>
                  <span className="online_icon"></span>
                </div>
                <div className="msg_cotainer">
                  <h6 >
                    Hi, how are you samim?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  <h6>
                    Hi Khalid i am good tnx how about you?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time_send ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                       className="rounded-circle user_img_msg"/>
                  <span className="online_icon"></span>
                </div>
                <div className="msg_cotainer">
                  <h6 >
                    Hi, how are you samim?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  <h6>
                    Hi Khalid i am good tnx how about you?
                  </h6>
                  <div className=" w-100 d-flex">
                    <p className='msg_time_send ms-auto'>8:40 AM, Today</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <div className="input-group-append">
                  <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                </div>
                <textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
                <div className="input-group-append">
                  <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages;
