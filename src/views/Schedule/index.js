import 'react-calendar/dist/Calendar.css';
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'
import FilterRound from './../../assets/img/post-filter-round-purple.svg'
import CalenderPurple from './../../assets/img/post-filter-calender-purple.svg'
import BlackArrow from './../../assets/img/black-arrow-down.svg'
import SearchIcon from './../../assets/img/nav-icon-(search).svg'
import ExamplePostImage from './../../assets/img/post-image.png'
import PostUserImage from './../../assets/img/post-user-img.png'
import MarkGreenPost from './../../assets/img/mark-green-post.svg'
import PublishedGreenIndicator from './../../assets/img/published-green-indicator.svg'
import PostBottomLine from './../../assets/img/post-bottom-line.svg'
import { Button, Col, Input, Row } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import barChart from "../../assets/img/barchart.png"
import ClientChart from './ClientChart';
import {clients} from "./data"
import { FaPlus } from "react-icons/fa";
import SocialChannels from './tabs';

const Schedule = () => {
  const [currentMenu, setCurrentMenu] = useState("all");
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
            <SocialChannels/>
          </div>
          </div>
        </Col>
      </Row>
      {/* <div className="row w-100 h-100">
        <div className="col-md-4 col-xl-3 chat">
          <div className="card mb-sm-3 mb-md-0 contacts_card">
            <div className="card-header">
              <div className="input-group d-inline-flex w-100">
                <img src={searchChat} className='ms-5' alt=""/>
                <input type="text" placeholder="Find view" name="" className="form-control search px-1" />
              </div>
            </div>
            
            <div className="card-footer"></div>
          </div>
        </div>
        <Col xl='9'>
          <div className='d-inline-flex w-100'>
            <h6 className='fs-5 fw-bold'>
              Posts
            </h6>
            <Link to="/NewPost" className='py-2 ms-auto px-5 send align-items-center '>
              <h6 className='mb-0'>
                Create Post
              </h6>
            </Link>
          </div>
          <div className='bg-white rounded-3 py-4  mt-4'>
            <div className='px-2'>
              <div className='d-inline-flex w-100 scheduled-post__menu__container py-0'>
                <h6 onClick={() => setCurrentMenu('all')} className={"scheduled-post__menu mx-4 mb-0 pb-3" + (currentMenu === 'all' ? ' scheduled-post__active': '')}>
                  All Content
                </h6>
                <h6 onClick={() => setCurrentMenu('video')} className={"scheduled-post__menu mx-4 mb-0 pb-3" + (currentMenu === 'video' ? ' scheduled-post__active': '')}>
                  Video
                </h6>
                <h6 onClick={() => setCurrentMenu('photo')} className={"scheduled-post__menu mx-4 mb-0 pb-3" + (currentMenu === 'photo' ? ' scheduled-post__active': '')}>
                  Photo
                </h6>
                <h6 onClick={() => setCurrentMenu('carousel')} className={"scheduled-post__menu mx-4 mb-0 pb-3" + (currentMenu === 'carousel' ? ' scheduled-post__active': '')}>
                  Carousel
                </h6>
                <h6 onClick={() => setCurrentMenu('stories')} className={"scheduled-post__menu mx-4 mb-0 pb-3" + (currentMenu === 'stories' ? ' scheduled-post__active': '')}>
                  Stories
                </h6>
                <h6 onClick={() => setCurrentMenu('tv')} className={"scheduled-post__menu mx-4 mb-0 pb-3" + (currentMenu === 'tv' ? ' scheduled-post__active': '')}>
                  IGTV
                </h6>
              </div>
              <div className='d-inline-flex px-3 mt-4'>
                <div className='scheduled-post__filters px-3 py-1' >
                  <img className='mx-2' src={FilterRound} alt=""/>
                  Post Status: ALL
                  <img className='mx-2' src={BlackArrow} alt=""/>
                </div>
                <div className='scheduled-post__filters-2 px-3 ms-4 py-1' >
                  <img className='mx-2' src={CalenderPurple} alt=""/>
                  All Time: JAN 1, 2009 - APR 15, 2021
                  <img className='mx-2' src={BlackArrow} alt=""/>
                </div>
                <div className='scheduled-post__search mx-4'>
                  <img src={SearchIcon} alt=""/>
                  <input type="text"/>
                </div>
              </div>
            </div>
            <div className='scheduled-post__table__header__container px-5 py-2'>
              <Row>
                <Col xl='6'>
                  <h6 className='scheduled-post__table__header__container__title pt-1'>Post</h6>
                </Col>
                <Col xl='2'>
                  <h6 className='scheduled-post__table__header__container__title pt-1'>Post Status</h6>
                </Col>
                <Col xl='2'>
                  <h6 className='scheduled-post__table__header__container__title pt-1'>Date</h6>
                </Col>
                <Col xl='2'>
                  <h6 className='scheduled-post__table__header__container__title pt-1'>Likes</h6>
                </Col>
              </Row>
            </div>
            <div className='ps-5 pe-1 py-2'>
              <Row className='py-3'>
                <Col xl='6' >
                  <div className='d-inline-flex'>
                    <img src={ExamplePostImage} alt=""/>
                    <div className='px-4'>
                      <h6 className='pt-1 scheduled-post__post__title'>
                        Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                      </h6>
                      <div className='d-inline-flex'>
                        <img src={PostUserImage} alt=""/>
                        <h6 className='scheduled-post__post__user my-auto ps-2'>
                          John Dan
                        </h6>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl='2'>
                  <div className='d-inline-flex mt-4'>
                    <img src={PublishedGreenIndicator} alt=""/>
                    <h6 className='scheduled-post__post__published my-auto ms-2'>
                      Published
                    </h6>
                  </div>
                </Col>
                <Col xl='2'>
                  <h6 className='scheduled-post__post__date mt-3'>
                    14/04/2021 <br/>
                    06:00 PM
                  </h6>
                </Col>
                <Col xl='1'>
                  <h6 className='scheduled-post__post__date mt-3'>
                    16
                  </h6>
                </Col>
                <Col xl='1'>
                  <img src={MarkGreenPost} className='scheduled-post__post__green-mark-post' alt=""/>
                </Col>
              </Row>
              <img src={PostBottomLine} alt=""/>
              <Row className='py-3'>
                <Col xl='6' >
                  <div className='d-inline-flex'>
                    <img src={ExamplePostImage} alt=""/>
                    <div className='px-4'>
                      <h6 className='pt-1 scheduled-post__post__title'>
                        Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed
                      </h6>
                      <div className='d-inline-flex'>
                        <img src={PostUserImage} alt=""/>
                        <h6 className='scheduled-post__post__user my-auto ps-2'>
                          John Dan
                        </h6>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl='2'>
                  <div className='d-inline-flex mt-4'>
                    <img src={PublishedGreenIndicator} alt=""/>
                    <h6 className='scheduled-post__post__published my-auto ms-2'>
                      Published
                    </h6>
                  </div>
                </Col>
                <Col xl='2'>
                  <h6 className='scheduled-post__post__date mt-3'>
                    14/04/2021 <br/>
                    06:00 PM
                  </h6>
                </Col>
                <Col xl='1'>
                  <h6 className='scheduled-post__post__date mt-3'>
                    16
                  </h6>
                </Col>
                <Col xl='1'>
                  <img src={MarkGreenPost} className='scheduled-post__post__green-mark-post' alt=""/>
                </Col>
              </Row>
              <img src={PostBottomLine} alt=""/>
            </div>
          </div>
        </Col>
      </div> */}
    </div>
  )
}

export default Schedule;
