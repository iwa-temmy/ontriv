import 'react-calendar/dist/Calendar.css';
import { Col, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialChannels from './tabs';
import NoPostSchedule from './NoPostSchedule';

//redux

import { connect, useSelector } from 'react-redux';
import { getAllClient } from '../../redux/actions';
import { useEffect } from 'react';
import { useState } from 'react';
import ListAllClient from './ListAllClient';
import ListAllClientDrawer from './ListAllClientDrawer';
import BarLoader from '../../components/Loaders/BarLoader';
import Button from '../../components/Button';

const Schedule = ({ getAllClient, getAllClientDetails, getAllClientLoading,}) => {

  const [activeId, setActiveId] = useState(0);
  const [showClient, setShowClient] = useState(false);
  let businessOwner = useSelector((state) => state?.auth?.currentUser);
  const [allClient, setAllClient] = useState(getAllClientDetails)
  const [id, setId] = useState(getAllClientDetails[0]?.client)

  let navigate = useNavigate()

  let clientPost = useSelector((state) => state?.postSchedule?.getOneClientPost);

  const newPost = () => {
    navigate(`/NewPost/${id}`)
  }

  useEffect(() => {
    getAllClient();
  }, [getAllClient])

  return (
    <div className='dashboard dashboard-wrapper schedule-post-wrapper'>
      {showClient && <ListAllClientDrawer businessOwner={businessOwner?.business_name} businessLogo={businessOwner?.business_logo} setShowClient={setShowClient} getAllClientDetails={getAllClientDetails} activeId={activeId} setActiveId={setActiveId} allClient={allClient} setAllClient={setAllClient} />}
      <Row gap={2}>
        <Col
          xs="12"
          md="3"
          sm="12"
          className='fee'
        >
          {getAllClientLoading ? <BarLoader height="50" width="50" /> : <ListAllClient businessOwner={businessOwner?.business_name} businessLogo={businessOwner?.business_logo} getAllClientDetails={getAllClientDetails} activeId={activeId} setActiveId={setActiveId} id={id} setId={setId} allClient={allClient} setAllClient={setAllClient}/>}
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
<div>
<Button text={'Create Post'} className={"Button_Wrap"} btnstyle={{background:'#2062F4',fontSize:'14px',width:'180px'}} onButtonClick={newPost}/>
</div>
            </div>
            <div className='socialChannelWrapper'>
              {clientPost?.user_instagram_post?.length <= 0 && clientPost?.user_facebook_post?.length <= 0 && clientPost?.user_linkedin_post?.length <= 0 ? (<NoPostSchedule text={'Get started by scheduling a post'} button buttonProps={<><button>
                <Link to="/NewPost">
                  Create Post
                </Link>
              </button></>} />) : (<SocialChannels />)}
            </div>
          </div>
        </Col>}
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { schedule } = state
  return {
    getAllClientDetails: schedule?.getAllClientDetails,
    getAllClientLoading: schedule?.getAllClientLoading,
  };
};

export default connect(mapStateToProps, { getAllClient })(Schedule);
