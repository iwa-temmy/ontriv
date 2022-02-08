import React, { useState } from 'react';
import { Row, Col, Card, Input,Button } from 'reactstrap';
import bluePlus from '../../../assets/img/blue-plus-bus-icon.svg'
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io'

const PersonalDetails = () => {
    const [inputType1, setInputType1] = useState('password')
    const [inputType2, setInputType2] = useState('password')
    return (
        <div className='personal-details mt-4'>
            <Row>
                <Col xl='6' className='mt-3 mb-3'>
                    <Card className='upload-picture-container mb-4'>
                        <div className='d-flex '>
                            <div className='img-container'>

                            </div>
                            <div className='upload-text-wrapper'>
                                <h1>Upload Profile Picture</h1>
                                <p className='mb-0'>Image format with max size of 3mb</p>
                                <div className='d-flex'>
                                    <img src={bluePlus} alt="" />
                                    <h6 className='pt-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue'>
                                        Upload new photo
                                    </h6>
                                    {/* <input type='file' className='w-100 file-upload-button' /> */}
                                </div>
                            </div>

                        </div>


                    </Card>
                    <div>
                        <Card className='personal-details-form-card'>
                            <h1>Profile Details</h1>
                            <Input type='text' placeholder='First name' className='' />
                            <Input type='email' placeholder='Email address' className='' />
                            <Input type='email' placeholder='Phone Number' className='' />
                            <Button className='w-50'>
                                Update
                            </Button>
                        </Card>
                    </div>
                </Col>
                <Col xl='6' className='mb-2'>
                 <div>
                        <Card className='personal-details-form-card reset-password-form'>
                            <h1>Reset Password</h1>
                            <div className='password-container'>
                                    <div className='password-icon'>
                                    {
                                            inputType1 === 'password' ?
                                                <TiEye
                                                    color='#E5E9F2'
                                                    size='30px'
                                                    onClick={() => { setInputType1('text') }}
                                                /> :
                                                <IoMdEyeOff
                                                    color='#000'
                                                    size='25px'
                                                    onClick={() => { setInputType1('password') }}
                                                />


                                        }
                                    </div>
                                    <Input type={inputType1} placeholder='Create password' />
                                </div>

                                <div className='password-container'>
                                    <div className='password-icon'>
                                        {
                                            inputType2 === 'password' ?
                                                <TiEye
                                                    color='#E5E9F2'
                                                    size='30px'
                                                    onClick={() => { setInputType2('text') }}
                                                /> :
                                                <IoMdEyeOff
                                                    color='#000'
                                                    size='25px'
                                                    onClick={() => { setInputType2('password') }}
                                                />


                                        }

                                    </div>
                                    <Input type={inputType2} placeholder='Confirm password' />

                                </div>

                            <Button className='w-50'>
                                Update
                            </Button>
                        </Card>
                    </div>

                </Col>

            </Row>
        </div>
    )
}
export default PersonalDetails;