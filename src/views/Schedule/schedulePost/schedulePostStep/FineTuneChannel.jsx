import React, { useState } from 'react'
import HorizontalTab from '../../../../components/horizontaltab';
import { CenteredModal } from '../../../../components/Modal';
import GotItModal from '../schedulePostModal';
import FineTuneFacebook from './fineTuneChannel/Facebook';
import FineTuneInstagram from './fineTuneChannel/Instagram';
import FineTuneLinkedin from './fineTuneChannel/Linkedin';
import FineTuneTwitter from './fineTuneChannel/Twitter';
import twitter from "../../../../assets/img/twitter.png";
import instagram from "../../../../assets/img/instagram.png";
import facebook from "../../../../assets/img/facebook.png";
import linkedin from "../../../../assets/img/linkedin.png";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Navigate, useNavigate } from 'react-router-dom';

const FineTuneChannel = ({ socialMedia, next, prev ,postDate, baseCaption}) => {

  const [isOpenCreatePost, setIsOpenCreatePost] = useState(false)
  const [iGText, setiGText] = useState()
  const [iGDate, setiGDate] = useState()
  const [facebookText, setFacebookText] = useState()
  const [facebookDate, setFacebookDate] = useState()
  const [linkedinText, setlinkedinText] = useState()
  const [linkedinDate, setlinkedinDate] = useState()
  const [activeTab, setActiveTab] = useState(1)

  const navigate = useNavigate()

  if(!socialMedia.length) {
    alert('No social Channel selected')
    navigate('/Schedule')
  }


  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const InstagramData = (iGCaption,iGDate) => {
    setiGText(iGCaption)
    setiGDate(iGDate)
    console.log(iGCaption,iGDate,'igg')
  }

  const facebookData = (fbCaption,fbDate) => {
    setFacebookText(fbCaption)
    setFacebookDate(fbDate)
    console.log(fbCaption,fbDate,'igg')
  }

  const linkedinData = (lnCaption,lnDate) => {
    setlinkedinText(lnCaption)
    setlinkedinDate(lnDate)
  }


  return (
    <div>
      <CenteredModal modalState={isOpenCreatePost} setModalState={setIsOpenCreatePost}>
        <GotItModal closeModal={setIsOpenCreatePost} next={() => next(iGText,iGDate,facebookText,facebookDate,linkedinText,linkedinDate)}/>
      </CenteredModal>


      <div>
        <Nav tabs>
          {
            socialMedia.map((item, index) => (<>
              <NavItem key={index}>
                <NavLink
                  className={classnames({ active: activeTab === index + 1 })}
                  onClick={() => toggle(index + 1)}
                >
                 <div className='socialTab'>
                 
                  {item === "instagram" ? <img src={instagram} alt="instagram" /> : item === "twitter" ? <img src={twitter} alt={'twitter'} /> : item === "facebook" ? <img src={facebook} alt={'facebook'} /> : item === "linkedin" ? <img src={linkedin} alt="linkedin" />:null}
                  <p> {item}</p>
                 </div>
                </NavLink>
              </NavItem>
            </>))
          }
        </Nav>
        <TabContent activeTab={activeTab}>
          {socialMedia.map((item, index) => (<>
            <TabPane tabId={index + 1} key={index}>
              {item === "instagram" ? <FineTuneInstagram postDate={postDate} caption={baseCaption} socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab} instagramData={InstagramData}/> : item === "facebook" ? <FineTuneFacebook socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab} facebookData={facebookData} postDate={postDate} caption={baseCaption}/> : item === "twitter" ? <FineTuneTwitter socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab}/> : item === "linkedin" ? <FineTuneLinkedin socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab} linkedinData={linkedinData} postDate={postDate} caption={baseCaption}/> : ""}
            </TabPane>
          </>))}
        </TabContent>
      </div>


      {/* <div>
        <HorizontalTab
         options={socialChannelLabel}
         onChange={onChangeWalletTransaction}
         defaultValue="NODOCUMENTAPPROVED"
       />
            <div>{socialChannelData[socialChannel]}</div>
        </div> */}
      {/* {socialMedia[0]}hj
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
        <button onClick={onOpenCreatPost}>open modal</button> */}
    </div>
  )
}

export default FineTuneChannel