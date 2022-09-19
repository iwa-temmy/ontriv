import 'react-calendar/dist/Calendar.css';
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'
import { Button, Col, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import barChart from "../../assets/img/barchart.png"
import ClientChart from './ClientChart';
import { clients, socialPost } from "./data"
import { FaPlus } from "react-icons/fa";
import SocialChannels from './tabs';
import NoPostSchedule from './NoPostSchedule';

//redux

import { connect, useDispatch, useSelector } from 'react-redux';
import { getAllClient } from '../../redux/actions';
import { useEffect } from 'react';
import { useState } from 'react';
import { getOneClientPost } from '../../redux/actions';
import ListAllClient from './ListAllClient';
import ListAllClientDrawer from './ListAllClientDrawer';
import BarLoader from '../../components/Loaders/BarLoader';

const Schedule = ({ getAllClient, getAllClientDetails, getAllClientLoading }) => {

  const [activeId, setActiveId] = useState(0);
  const [showClient, setShowClient] = useState(false);
  const dispatch = useDispatch();
  let businessOwner = useSelector((state) => state?.auth?.currentUser);


  let clientPost = useSelector((state) => state?.getClientPost?.getOneClientPost);
  // console.log(businessOwner,)
  console.log(clientPost, 'client')

  // const getScheduledpost = (clientId) => {
  //   console.log(clientId)
  //   //dispatch(getOneClientPost(clientId))
  // }

  useEffect(() => {
    getAllClient();
  }, [getAllClient])
  console.log(getAllClientDetails, "gggg")

  return (
    <div className='dashboard dashboard-wrapper schedule-post-wrapper'>
      {showClient && <ListAllClientDrawer businessOwner={businessOwner?.business_name} businessLogo={businessOwner?.business_logo} setShowClient={setShowClient} getAllClientDetails={getAllClientDetails} activeId={activeId} setActiveId={setActiveId} />}
      <Row gap={2}>
        <Col
          xs="12"
          md="3"
          sm="12"
          className='fee'
        >
         { getAllClientLoading ? <BarLoader height="50" width="50"/> : <ListAllClient businessOwner={businessOwner?.business_name} businessLogo={businessOwner?.business_logo} getAllClientDetails={getAllClientDetails} activeId={activeId} setActiveId={setActiveId} />}
        </Col>
        {!showClient && <Col
          className="bg-light"
          xs="12"
          md="9"
          sm="12"
        >
          <div className='showclient-wrapper'>
            <h5 className='showclient' onClick={() => setShowClient(true)}>showclient</h5>
          </div>
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
              {clientPost.user_instagram_post?.length <= 0 && clientPost.user_facebook_post?.length <= 0 && clientPost.user_linkedin_post?.length <= 0 ? (<NoPostSchedule />) : (<SocialChannels />)}
            </div>
          </div>
        </Col> }
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  const { schedule} = state
  // console.log(getClientPost)
  return {
    getAllClientDetails: schedule?.getAllClientDetails,
    getAllClientLoading: schedule?.getAllClientLoading,
  };
};

export default connect(mapStateToProps, { getAllClient })(Schedule);
