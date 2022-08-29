import React,{useState} from 'react'
import HorizontalTab from '../../../../components/horizontaltab';
import { CenteredModal } from '../../../../components/Modal';
import GotItModal from '../schedulePostModal';
import FineTuneFacebook from './fineTuneChannel/Facebook';
import FineTuneInstagram from './fineTuneChannel/Instagram';
import FineTuneLinkedin from './fineTuneChannel/Linkedin';
import FineTuneTwitter from './fineTuneChannel/Twitter';

const FineTuneChannel = ({socialMedia,next,prev}) => {

  const [isOpenCreatePost, setIsOpenCreatePost] = useState(false)

  const [socialChannel, setSocialChannel] =
    useState(socialMedia[0]?.toUpperCase());

  const onChangeWalletTransaction = (value) => {
    console.log(value)
    const selectedValue = value;
    setSocialChannel(selectedValue);
  };

  const socialChannelData = {
    INSTAGRAM: (<FineTuneInstagram socialchannel={socialMedia} setOpenModal={setIsOpenCreatePost}/>),
    FACEBOOK: (<FineTuneFacebook/>),
    TWITTER: (<FineTuneTwitter/>),
    LINKEDIN: (<FineTuneLinkedin/>),
  };

  const socialChannelLabel = socialMedia.map((item,index) =>{
    return {
      label:item,
      value:item?.toUpperCase()
    }
  })

  const onOpenCreatPost = () => {
    setIsOpenCreatePost(true)
  }


  return (
    <div>
      <CenteredModal modalState={isOpenCreatePost} setModalState={setIsOpenCreatePost}>
       <GotItModal closeModal={setIsOpenCreatePost}/>
      </CenteredModal>
        <div>
        <HorizontalTab
         options={socialChannelLabel}
         onChange={onChangeWalletTransaction}
         defaultValue="NODOCUMENTAPPROVED"
       />
            <div>{socialChannelData[socialChannel]}</div>
        </div>
        {/* {socialMedia[0]}hj
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
        <button onClick={onOpenCreatPost}>open modal</button> */}
      </div>
  )
}

export default FineTuneChannel