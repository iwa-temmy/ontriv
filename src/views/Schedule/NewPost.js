import 'react-calendar/dist/Calendar.css';
import InfoPencilIcon from './../../assets/img/create-post-info-pencil.png'
import SocialChannelArrow from './../../assets/img/social-channel-arrow.svg'
import IGColored from './../../assets/img/instagram-colored.svg'
import FBColored from './../../assets/img/facebook-colored.png'
import TwitterColored from './../../assets/img/twitter-colored.svg'
import LinkedinColored from './../../assets/img/linkedin-colored.svg'
import DotsSocialChannels from './../../assets/img/dots-social-channels.svg'
import FileGreyIcon from './../../assets/img/file-gray-icon.svg'
import FileGreyIcon2 from './../../assets/img/channel-file-2.svg'
import PictureGreyIcon from './../../assets/img/pictures-gray.svg'
import CameraGreyIcon from './../../assets/img/camera-gray.png'
import DownloadGray from './../../assets/img/download-gray.svg'
import SmileyGray from './../../assets/img/smilie-grey.svg'
import HashtagBlue from './../../assets/img/hashtage-blue.svg'
import LinkAttachment from './../../assets/img/link-attachment.svg'
import instagramExample from './../../assets/img/instagramExample.png'
import FBExample from './../../assets/img/fb-example.png'
import TWExample from './../../assets/img/tweet-example.png'
import LKExample from './../../assets/img/LinkedInExample.png'
import {Button, Col, Input, Row} from "reactstrap";
import React, {useState} from "react";
import {Linkedin} from "react-feather";
import {CenteredModal as Modal} from "../../components/Modal";

const NewPost = () => {
  const [currentMenu, setCurrentMenu] = useState(4);
  const [socialMediaPostTab, setSocialMediaPostTab] = useState("ig");
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <div className='dashboard dashboard-wrapper'>
        <div className="row w-100 h-100">
          <div className="col-md-4 col-xl-3 chat">
            <div className="card mb-sm-3 mb-md-0 contacts_card p-4">
              <div className='d-inline-flex scheduled-post__post__new__steps__container py-3'>
                <h6 className={'scheduled-post__post__new__steps_number my-auto px-2' + (currentMenu > 0 ? ' scheduled-post__post__new__steps_number__active': '')}>
                  1
                </h6>
                <h6 className={'scheduled-post__post__new__steps my-auto ms-2' + (currentMenu > 0 ? ' scheduled-post__post__new__steps__active': '')}>
                  Set Post Details
                </h6>
              </div>
              <div className='d-inline-flex scheduled-post__post__new__steps__container py-3'>
                <h6 className={'scheduled-post__post__new__steps_number my-auto px-2' + (currentMenu > 1 ? ' scheduled-post__post__new__steps_number__active': '')}>
                  2
                </h6>
                <h6 className={'scheduled-post__post__new__steps my-auto ms-2' + (currentMenu > 1 ? ' scheduled-post__post__new__steps__active': '')}>
                  Select Social Channels
                </h6>
              </div>
              <div className='d-inline-flex scheduled-post__post__new__steps__container py-3'>
                <h6 className={'scheduled-post__post__new__steps_number my-auto px-2' + (currentMenu > 2 ? ' scheduled-post__post__new__steps_number__active': '')}>
                  3
                </h6>
                <h6 className={'scheduled-post__post__new__steps my-auto ms-2' + (currentMenu > 2 ? ' scheduled-post__post__new__steps__active': '')}>
                  Define Generic Content
                </h6>
              </div>
              <div className='d-inline-flex scheduled-post__post__new__steps__container py-3'>
                <h6 className={'scheduled-post__post__new__steps_number my-auto px-2' + (currentMenu > 3 ? ' scheduled-post__post__new__steps_number__active': '')}>
                  4
                </h6>
                <h6 className={'scheduled-post__post__new__steps my-auto ms-2' + (currentMenu > 3 ? ' scheduled-post__post__new__steps__active': '')}>
                  Fine-tune Each Channel
                </h6>
              </div>
              <div className='d-inline-flex scheduled-post__post__new__steps__container py-3'>
                <h6 className={'scheduled-post__post__new__steps_number my-auto px-2' + (currentMenu > 4 ? ' scheduled-post__post__new__steps_number__active': '')}>
                  5
                </h6>
                <h6 className={'scheduled-post__post__new__steps my-auto ms-2' + (currentMenu > 4 ? ' scheduled-post__post__new__steps__active': '')}>
                  Create Post
                </h6>
              </div>
            </div>
          </div>
          <Col xl='9'>
            {
              currentMenu < 4 ? <Row className=''>
                  <Col xl='2'>
                  </Col>
                  <Col xl='8'>
                    {
                      currentMenu === 1? <div className='bg-white rounded-container'>
                        <div className='add-client-wrapper text-center p-5'>
                          <div className='add-client-text text-center'>
                            <h3>Post Details</h3>
                          </div>
                          <form className='business-form mt-4'>
                            <Input type='phone' placeholder="Scheduled Date & Time  " className='w-100 my-0 mx-auto' />
                            <div className='d-inline-flex w-100 mt-1'>
                              <img src={InfoPencilIcon} height="11px" className='my-auto' alt=""/>
                              <h6 className='scheduled-post__post__input__info-text ms-1 my-auto'>Define Scheduling Slots</h6>
                            </div>
                            <Input type='phone' placeholder="Subject (Only Ontrive reference)" className='w-100 my-3 mx-auto' />
                            <Input type='phone' placeholder="Labels" className='w-100 my-0 mx-auto' />
                            <div className='d-inline-flex w-100 mt-1'>
                              <img src={InfoPencilIcon} height="11px" className='my-auto' alt=""/>
                              <h6 className='scheduled-post__post__input__info-text ms-1 my-auto'>Manage Labels</h6>
                            </div>
                            <div className='pt-2 my-3 pb-3'>
                              <Button onClick={() => setCurrentMenu(2)} className='px-5 w-100'>Next</Button>
                            </div>
                          </form>
                        </div>
                      </div>: null
                    }
                    {
                      currentMenu === 2? <div className='bg-white rounded-container'>
                        <div className='add-client-wrapper text-center p-5'>
                          <div className='add-client-text text-center'>
                            <h3>Social Channels</h3>
                          </div>
                          <Row>
                            <Col xl='6'>
                              <div className='scheduled-post__post__new__social_channel p-3'>
                                <div className='d-inline-flex w-100'>
                                  <img src={IGColored} alt=""/>
                                  <h6 className='scheduled-post__post__new__social_channel__text my-auto ms-3'>
                                    Instagram
                                  </h6>
                                  <img src={SocialChannelArrow} className='ms-auto' alt=""/>
                                </div>
                              </div>
                            </Col>
                            <Col xl='6'>
                              <div className='scheduled-post__post__new__social_channel p-3'>
                                <div className='d-inline-flex w-100'>
                                  <img src={FBColored} alt=""/>
                                  <h6 className='scheduled-post__post__new__social_channel__text my-auto ms-3'>
                                    Facebook
                                  </h6>
                                  <img src={SocialChannelArrow} className='ms-auto' alt=""/>
                                </div>
                              </div>
                            </Col>
                            <Col xl='6'>
                              <div className='scheduled-post__post__new__social_channel p-3'>
                                <div className='d-inline-flex w-100'>
                                  <img src={TwitterColored} alt=""/>
                                  <h6 className='scheduled-post__post__new__social_channel__text my-auto ms-3'>
                                    Twitter
                                  </h6>
                                  <img src={SocialChannelArrow} className='ms-auto' alt=""/>
                                </div>
                              </div>
                            </Col>
                            <Col xl='6'>
                              <div className='scheduled-post__post__new__social_channel p-3'>
                                <div className='d-inline-flex w-100'>
                                  <img src={LinkedinColored} alt=""/>
                                  <h6 className='scheduled-post__post__new__social_channel__text my-auto ms-3'>
                                    Linkedin
                                  </h6>
                                  <img src={SocialChannelArrow} className='ms-auto' alt=""/>
                                </div>
                              </div>
                            </Col>
                            <div className='d-inline-flex w-100'>
                              <div className='d-inline-flex mx-auto'>
                                <div className='pt-2 my-3 pb-3'>
                                  <h6 onClick={() => setCurrentMenu(3)} className=' gray-bg-button p-2 w-100'>Save draft</h6>
                                </div>
                                <img src={DotsSocialChannels} className='mx-4' alt=""/>
                                <div className='pt-2 my-3 pb-3'>
                                  <h6 onClick={() => setCurrentMenu(3)} className=' blue-bg-button p-2 w-100'>Next</h6>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </div>
                      </div>: null
                    }
                    {
                      currentMenu === 3? <div className='bg-white rounded-container'>
                        <div className='add-client-wrapper text-center p-5'>
                          <div className='add-client-text text-center'>
                            <h3>Define base content for social accounts</h3>
                          </div>
                          <Row>
                            <div className=''>
                              <textarea name="" id="" className='w-100 scheduled-post__post__new__textarea' rows="10"></textarea>
                              <div className='d-inline-flex w-100'>
                                <img src={FileGreyIcon} className='mx-1' alt=""/>
                                <img src={FileGreyIcon2} className='mx-1' alt=""/>
                                <img src={PictureGreyIcon} className='mx-1' alt=""/>
                                <img src={CameraGreyIcon} height='15px' width='20px' className='mx-1 my-auto' alt=""/>
                                <img src={DownloadGray} className='ms-1 me-auto' alt=""/>
                                <img src={SmileyGray} className='mx-1' alt=""/>
                                <img src={HashtagBlue} className='mx-1' alt=""/>
                                <img src={LinkAttachment} className='mx-1' alt=""/>
                                <h6 className='green-info-text my-auto'>
                                  Shorten URLS
                                </h6>
                              </div>
                            </div>
                            <Button onClick={() => setCurrentMenu(4)} className='px-5 my-2 w-100'>Next</Button>
                          </Row>
                        </div>
                      </div>: null
                    }
                  </Col>
                  <Col xl='2'>
                  </Col>
                </Row>:
                <Row className=''>
                  <Col xl='12'>
                    {
                      currentMenu === 4? <div className=''>
                        <div className='px-3'>
                          <Row className='gap-2'>
                            <Col onClick={() => setSocialMediaPostTab('ig')} className={'social-tabs d-inline-flex w-100 p-3 ' + (socialMediaPostTab === 'ig' ? 'social-tabs-active': null)}>
                              <img src={IGColored}  alt=""/>
                              <h6 className='my-auto ms-3'>
                                Instagram
                              </h6>
                            </Col>
                            <Col onClick={() => setSocialMediaPostTab('fb')} className={'social-tabs d-inline-flex w-100 p-3 ' + (socialMediaPostTab === 'fb' ? 'social-tabs-active': null)}>
                              <img src={FBColored} alt=""/>
                              <h6 className='my-auto ms-3'>
                                Facebook
                              </h6>
                            </Col>
                            <Col onClick={() => setSocialMediaPostTab('twitter')} className={'social-tabs d-inline-flex w-100 p-3 ' + (socialMediaPostTab === 'twitter' ? 'social-tabs-active': null)}>
                              <img src={FBColored} alt=""/>
                              <h6 className='my-auto ms-3'>
                                Twitter
                              </h6>
                            </Col>
                            <Col onClick={() => setSocialMediaPostTab('linkedin')} className={'social-tabs d-inline-flex w-100 p-3 ' + (socialMediaPostTab === 'linkedin' ? 'social-tabs-active': null)}>
                              <img src={FBColored} alt=""/>
                              <h6 className='my-auto ms-3'>
                                Linkedin
                              </h6>
                            </Col>
                          </Row>
                        </div>
                        <div className='add-client-wrapper bg-white text-center p-5'>
                          {
                            socialMediaPostTab === 'ig' ? <Row>
                              <Col xl='6' className='bg-gray p-4'>
                                <h6 className='text-center'>
                                  Instagram Preview
                                </h6>
                                <img src={instagramExample} alt=""/>
                                <div className='example-text p-4 mt-4'>
                                  <h6 className='text-left'>
                                    Instagram Post Optimization Tips
                                  </h6>
                                  <h6 className='text-left'>
                                    Image Your Pin does not contain any image: make sure you upload one.
                                  </h6>
                                  <h6 className='text-left'>
                                    Time That is not the optimal time to post on Pinterest: you would get better results at night.
                                  </h6>
                                  <h6 className='text-left'>
                                    Copy - Length 200-character descriptions are the most repinnable: yours is a bit short.
                                  </h6>
                                  <h6 className='text-left'>
                                    Date Friday is a great day to post on Pinterest!
                                  </h6>
                                </div>
                              </Col>
                              <Col xl='6' className='ps-5'>
                                <Input type='phone' placeholder="Instagram Date & Time  " className='w-100 my-3 mx-auto mt-3' />
                                <textarea name="" id="" placeholder='Text & Media' className='w-100 scheduled-post__post__new__textarea p-4 mt-3' rows="10"></textarea>
                                <Input type='phone' placeholder="First comment" className='w-100 my-3 mx-auto mt-3' />
                                <Input type='phone' placeholder="Type a location (optional)" className='w-100 my-3 mx-auto mt-3' />
                                <Button onClick={() => setShowSettings(true)} className='px-5 my-2 w-100'>Next</Button>
                              </Col>
                            </Row>: null
                          }
                          {
                            socialMediaPostTab === 'fb' ? <Row>
                              <Col xl='6' className='bg-gray p-4'>
                                <h6 className='text-center'>
                                  Facebook Preview
                                </h6>
                                <img src={FBExample} alt=""/>
                                <div className='example-text p-4 mt-4'>
                                  <h6 className='text-left'>
                                    Facebook Post Optimization Tips
                                  </h6>
                                  <h6 className='text-left'>
                                    Image Your Pin does not contain any image: make sure you upload one.
                                  </h6>
                                  <h6 className='text-left'>
                                    Time That is not the optimal time to post on Pinterest: you would get better results at night.
                                  </h6>
                                  <h6 className='text-left'>
                                    Copy - Length 200-character descriptions are the most repinnable: yours is a bit short.
                                  </h6>
                                  <h6 className='text-left'>
                                    Date Friday is a great day to post on Pinterest!
                                  </h6>
                                </div>
                              </Col>
                              <Col xl='6' className='ps-5'>
                                <Input type='text' placeholder="Facebook Date & Time  " className='w-100 my-3 mx-auto mt-3' />
                                <textarea name="" id="" placeholder='Text & Media' className='w-100 scheduled-post__post__new__textarea p-4 mt-3' rows="10"></textarea>
                                <Input type='text' placeholder="Type a location" className='w-100 my-3 mx-auto mt-3' />
                                <Button onClick={() => setShowSettings(true)} className='px-5 my-2 w-100'>Next</Button>
                              </Col>
                            </Row>: null
                          }
                          {
                            socialMediaPostTab === 'twitter' ? <Row>
                              <Col xl='6' className='bg-gray p-4'>
                                <h6 className='text-center'>
                                  Twitter Preview
                                </h6>
                                <img src={TWExample} alt=""/>
                                <div className='example-text p-4 mt-4'>
                                  <h6 className='text-left'>
                                    Twitter Post Optimization Tips
                                  </h6>
                                  <h6 className='text-left'>
                                    Image Your Pin does not contain any image: make sure you upload one.
                                  </h6>
                                  <h6 className='text-left'>
                                    Time That is not the optimal time to post on Pinterest: you would get better results at night.
                                  </h6>
                                  <h6 className='text-left'>
                                    Copy - Length 200-character descriptions are the most repinnable: yours is a bit short.
                                  </h6>
                                  <h6 className='text-left'>
                                    Date Friday is a great day to post on Pinterest!
                                  </h6>
                                </div>
                              </Col>
                              <Col xl='6' className='ps-5'>
                                <Input type='text' placeholder="Twitter Date & Time  " className='w-100 my-3 mx-auto mt-3' />
                                <textarea name="" id="" placeholder='Text & Media' className='w-100 scheduled-post__post__new__textarea p-4 mt-3' rows="10"></textarea>
                                <Input type='text' placeholder="Type a location" className='w-100 my-3 mx-auto mt-3' />
                                <Button onClick={() => setShowSettings(true)} className='px-5 my-2 w-100'>Next</Button>
                              </Col>
                            </Row>: null
                          }
                          {
                            socialMediaPostTab === 'linkedin' ? <Row>
                              <Col xl='6' className='bg-gray p-4'>
                                <h6 className='text-center'>
                                  Linkedin Preview
                                </h6>
                                <img src={LKExample} alt=""/>
                                <div className='example-text p-4 mt-4'>
                                  <h6 className='text-left'>
                                    Linkedin Post Optimization Tips
                                  </h6>
                                  <h6 className='text-left'>
                                    Image Your Pin does not contain any image: make sure you upload one.
                                  </h6>
                                  <h6 className='text-left'>
                                    Time That is not the optimal time to post on Pinterest: you would get better results at night.
                                  </h6>
                                  <h6 className='text-left'>
                                    Copy - Length 200-character descriptions are the most repinnable: yours is a bit short.
                                  </h6>
                                  <h6 className='text-left'>
                                    Date Friday is a great day to post on Pinterest!
                                  </h6>
                                </div>
                              </Col>
                              <Col xl='6' className='ps-5'>
                                <Input type='text' placeholder="Linkedin Date & Time  " className='w-100 my-3 mx-auto mt-3' />
                                <textarea name="" id="" placeholder='Text & Media' className='w-100 scheduled-post__post__new__textarea p-4 mt-3' rows="10"></textarea>
                                <Input type='text' placeholder="Type a location" className='w-100 my-3 mx-auto mt-3' />
                                <Button onClick={() => setShowSettings(true)} className='px-5 my-2 w-100'>Next</Button>
                              </Col>
                            </Row>: null
                          }
                        </div>
                      </div>: null
                    }
                    {
                      currentMenu === 5 ? <div className='bg-white rounded-container'>
                        <div className='add-client-wrapper text-center p-5'>
                          <div className='add-client-text text-center mb-5'>
                            <h5>Creating your post</h5>
                          </div>
                          <Row>
                            <Col xl='4'>
                              <h6 className='blue-gradient-button p-3'>
                                Submit for Approval
                              </h6>
                            </Col>
                            <Col xl='4'>
                              <h6 className='blue-gradient-button p-3'>
                                Schdule
                              </h6>
                            </Col>
                            <Col xl='4'>
                              <h6 className='blue-border-btn text-center p-3'>
                                Save to drafts
                              </h6>
                            </Col>
                          </Row>
                        </div>
                      </div>: null
                    }
                  </Col>
                </Row>
            }

          </Col>
        </div>
      </div>
      <Modal
        modalState={showSettings}
        setModalState={setShowSettings}
      >
        <div className='add-client-wrapper text-center '>
          <div className='add-client-text text-center'>
            <h5>Creating your post</h5>
          </div>
          <div className='modal-text-description text-left'>
            <p>
              Once you're happy with your post, select one of the following options:
            </p>
            <p>
              Save as draft <br/>
              Save your post as draft so you can return to it later for editing.
            </p>
            <p>
              Submit for approval <br/>
              If you have collaborators, submit your post for approval to signal it is ready for review. You can assign your post to collaborators on the next page (Post View).
            </p>
            <p>
              Schedule <br/>
              If your post doesn't need approval or has already been approved, schedule it. Loomly will natively publish it at the scheduled date & time for you.
            </p>
            <p>
              Publish Now <br/>
              Ready to publish your post right now? Select this option to have Loomly publish it immediately for you.
            </p>
            <Button onClick={() => {
              setCurrentMenu(5);
              setShowSettings(false)
            }} className='px-5 my-2 w-100'>Next</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default NewPost;
