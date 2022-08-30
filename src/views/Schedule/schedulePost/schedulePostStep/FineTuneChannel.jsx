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

const FineTuneChannel = ({ socialMedia, next, prev }) => {

  const [isOpenCreatePost, setIsOpenCreatePost] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  // toggle(tab) {
  //   if (this.state.activeTab !== tab) {
  //     this.setState({
  //       activeTab: tab
  //     });
  //   }
  // }

  { console.log(socialMedia) }

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  // const [socialChannel, setSocialChannel] =
  //   useState(socialMedia[0]?.toUpperCase());

  // const onChangeWalletTransaction = (value) => {
  //   console.log(value)
  //   const selectedValue = value;
  //   setSocialChannel(selectedValue);
  // };

  // const socialChannelData = {
  //   INSTAGRAM: (<FineTuneInstagram socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} />),
  //   FACEBOOK: (<FineTuneFacebook />),
  //   TWITTER: (<FineTuneTwitter />),
  //   LINKEDIN: (<FineTuneLinkedin />),
  // };

  // const socialChannelData1 = {
  //   instagram: (<FineTuneInstagram />),
  //   facebook: <h1>facebook</h1>,
  //   twitter: <h1>twitter</h1>,
  //   linkedin: <h1>linkedin</h1>
  // };

  // const socialChannelLabel = socialMedia.map((item, index) => {
  //   return {
  //     label: item,
  //     value: item?.toUpperCase()
  //   }
  // })

  // const onOpenCreatPost = () => {
  //   setIsOpenCreatePost(true)
  // }


  return (
    <div>
      <CenteredModal modalState={isOpenCreatePost} setModalState={setIsOpenCreatePost}>
        <GotItModal closeModal={setIsOpenCreatePost} />
      </CenteredModal>


      <div>
        <Nav tabs>
          {
            socialMedia.map((item, index) => (<>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === index + 1 })}
                  onClick={() => toggle(index + 1)}
                >
                 <div className='socialTab'>
                 
                  {item === "instagram" ? <img src={instagram} alt="" /> : item === "twitter" ? <img src={twitter} /> : item === "facebook" ? <img src={facebook} /> : item === "linkedin" ? <img src={linkedin} alt="" />:null}
                  <p> {item}</p>
                 </div>
                </NavLink>
              </NavItem>
            </>))
          }
        </Nav>
        <TabContent activeTab={activeTab}>
          {socialMedia.map((item, index) => (<>
            <TabPane tabId={index + 1}>
              {item === "instagram" ? <FineTuneInstagram socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab}/> : item === "facebook" ? <FineTuneFacebook socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab}/> : item === "twitter" ? <FineTuneTwitter socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab}/> : item === "linkedin" ? <FineTuneLinkedin socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost} activeTab={activeTab} setActiveTab={setActiveTab}/> : ""}
              {/* {socialChannelData1[item]} */}

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