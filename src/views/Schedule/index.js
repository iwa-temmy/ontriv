import 'react-calendar/dist/Calendar.css';
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'
import { Button, Col, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import barChart from "../../assets/img/barchart.png"
import ClientChart from './ClientChart';
import {clients, socialPost} from "./data"
import { FaPlus } from "react-icons/fa";
import SocialChannels from './tabs';
import NoPostSchedule from './NoPostSchedule';

const Schedule = () => {

  return (
    <div className='dashboard dashboard-wrapper'>
      <Row>
        <Col
          xs="12"
          md="3"
          sm="12"
        >
          <div className='clientWrapper'>
            <div className="scheduleInputWrapper">
              <input
                id="searchClient"
                name="client"
                placeholder="Find View"
                type="text"
                className='' />
              <img src={searchChat} className='ms-5' alt="" />
            </div>
            <div className='my-4'>
              <h6 className='chat-titles mb-4'>
                Your Accounts
              </h6>
              <div>
                <div className="client-owner">
                  <div className='clientowner-IconHolder'>
                    <img src={barChart} alt="barChart" />
                  </div>
                  <div className='clientowner-NameHolder'>
                    <h6>Business Owner</h6>
                    <p>Content Calendar</p>
                  </div>
                  <div>
                    <img src={forwardChat} className='ms-auto' alt="" /></div>
                </div>
              </div>
            </div>
            <div>
              <div className='clientsHolder'>
                <h6 className='chat-titles mb-4'>
                  Clients
                </h6>
                {clients.length > 0 ? (<ClientChart item={clients}/>) : (<div className='no-clients'>
                  <p>You have no clients. Please invite one to get started  </p>
                  <div>
                    <Button type="button" color='' className='addclient'> 
                    <div className='plus'>
                    <FaPlus/>
                    </div>
                   <span> Add new Client</span>
                    </Button>
                  </div>
                </div>)}

              </div>
            </div>
          </div>
        </Col>
        <Col
          className="bg-light border"
          xs="12"
          md="9"
          sm="12"
        >
          <div className="postWrapper">
          <div className='topnav'>
            <h6 className=''>
              Posts
            </h6>
            <Link to="/NewPost" className=''>
              <h5 className='mb-0'>
                Create Post
              </h5>
            </Link>
          </div>
          <div className='socialChannelWrapper'>
            {socialPost.length < 0 ? (<NoPostSchedule/>):(<SocialChannels/>)}
          </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Schedule;
