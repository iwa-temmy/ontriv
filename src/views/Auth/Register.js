import React, { useState } from 'react';
import {
    Container,
    Row,
    Card,
    Input,
    Form,
    Col,
    Button
} from 'reactstrap';
import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io'
import logo from '../../assets/img/logo.png'






const Signup = () => {
    const [activeState, setActiveState] = useState(0);
    const [inputType1, setInputType1] = useState('password')
    const [inputType2, setInputType2] = useState('password')

    return (
        <div className='auth'>
            <Row className='gx-0'>
                <Col lg='3' sm='12' className='pr-0'>
                    <div className='signup-left'>
                        <div className='signup-text text-white  mx-auto'>
                            <Container>

                                <h2 className=' mt-5 mb-3'>
                                    Sign up to Ontriv
                                </h2>
                                <p className=''>
                                    Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetur adipiscing elit, sed ctetur adipiscing elit, sed
                                </p>
                            </Container>

                        </div>
                    </div>
                </Col>
                <Col lg='9' sm='12' className='pl-0'>
                    <div className='signup-right'>
                        <div className='signup-form-wrapper mx-auto'>
                            {/* <div className='mx-auto w-75 d-flex'> */}
                            <div className='signin-logo text-center mb-5 mt-5'>
                                <img src={logo} alt='ontriv-logo' />
                            </div>
                            <Row className='gx-0' >
                                <Col sm='12' md='6'>
                                    <Card className='card-1'>
                                        <Steps direction='vertical' current={activeState}>
                                            <Step className='' title='Personal Details' description='Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed' />
                                            <Step title='Business Details' description='Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed' />
                                        </Steps>
                                    </Card>
                                </Col>
                                <Col sm='12' md='6'>

                                    <Card className='p-5 signup-form-card text-center'>
                                        {/* <div >
                                            <Steps direction='horizontal' current={activeState} className='signup-step text-center mb-4'>
                                                <Step className='' title='Personal Details' description='Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed' />
                                                <Step title='Business Details' description='Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed' />
                                            </Steps>
                                        </div> */}
                                        {
                                            activeState === 0 ?
                                                <Form>
                                                    <Input type='text' placeholder='First name' className='' />
                                                    <Input type='email' placeholder='Email address' className='' />
                                                    <Input type='email' placeholder='Select Country' className='' />
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
                                                                inputType1 === 'password' ?
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
                                                    <div className=' py-3 d-flex justify-content-between align-items-center mx-auto wizard-control-buttons'>
                                                        <div className='mb-0'>
                                                            <Button className={`btn-${activeState === 1 ? 'primary' : ""}`
                                                            }
                                                                onClick={() => {
                                                                    setActiveState(0)
                                                                }}
                                                                disabled={activeState === 0}
                                                            >Prev</Button>
                                                        </div>
                                                        {/* <div className='mb-0'> */}
                                                        <span className={`dot bg-${activeState === 0 ? 'primary' : ""}`}
                                                            onClick={() => { setActiveState(0) }}
                                                        />
                                                        {/* </div> */}
                                                        {/* <div className='mb-0'> */}
                                                        <span className={`dot bg-${activeState === 1 ? 'primary' : ""}`}
                                                            onClick={() => { setActiveState(1) }}
                                                        />
                                                        {/* </div> */}
                                                        <div className='mb-0'>
                                                            <Button
                                                                className={`btn-${activeState === 0 ? 'primary' : ""}`
                                                                }
                                                                onClick={() => {
                                                                    setActiveState(1)
                                                                }}
                                                                disabled={activeState === 1}
                                                            >Next</Button>
                                                        </div>
                                                    </div>
                                                </Form> :
                                                <Form className='business-form'>
                                                    <Input type='text' placeholder='Business Name' className='' />
                                                    <Input type='email' placeholder='Business website' className='' />
                                                    <Input type='email' placeholder='Role' className='' />
                                                    <div>
                                                        <Input type='password' placeholder='Referral Code' />
                                                    </div>
                                                    <div>
                                                        <Input type='password' placeholder='How do you about us?' />
                                                    </div>
                                                    <div className='pt-2 pb-3'>
                                                        <Button className='w-100'>Sign Up</Button>
                                                    </div>
                                                </Form>
                                        }


                                    </Card>
                                    <div className='no-account my-4 py-4 text-center'>
                                        <p className='mb-0'>Already have an account yet?
                                            <span className='register-link'>
                                                <a href='/auth/login'> Sign In</a>
                                            </span>
                                        </p>

                                    </div>

                                </Col>

                            </Row>




                            {/* </div> */}

                        </div>


                    </div>
                </Col>
            </Row>

        </div>
    )
}
export default Signup