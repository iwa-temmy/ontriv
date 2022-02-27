import 'react-calendar/dist/Calendar.css';
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'

const Messages = () => {

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
                           className=" user_img px-2 py-2 my-auto" alt=''/>
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
                           className=" user_img px-2 py-2 my-auto" alt=''/>
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
                           className=" user_img px-2 py-2 my-auto" alt=''/>
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
                           className=" user_img px-2 py-2 my-auto" alt=''/>
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
                       className="rounded-circle user_img_msg" alt=''/>
                  <span className="online_icon"/>
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
                       className="rounded-circle user_img_msg" alt=''/>
                  <span className="online_icon"/>
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
                       className="rounded-circle user_img_msg" alt=''/>
                  <span className="online_icon"/>
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
                       className="rounded-circle user_img_msg" alt=''/>
                  <span className="online_icon"/>
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
                       className="rounded-circle user_img_msg" alt=''/>
                  <span className="online_icon"/>
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
