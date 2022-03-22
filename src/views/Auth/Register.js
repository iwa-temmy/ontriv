import React, { useState, useEffect, useMemo } from 'react';
import {
    Container,
    Row,
    Card,
    // Input,
    Form,
    Col,
    Button
} from 'reactstrap';
import Steps, { Step } from "rc-steps";
import { ThreeDots } from 'react-loader-spinner';
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io';
import { connect } from 'react-redux';
import logo from '../../assets/img/logo.png'
import { useForm } from 'react-hook-form';
import { registerUser } from "../../redux/actions";
import createNotification from '../../utils/Notification';
import Select from 'react-select'
import countryList from 'react-select-country-list'



const Signup = ({
    registerUser,
    registrationError,
    message,
    loading
}) => {

    const [value, setValue] = useState('')
    const [roleValue, setRoleValue] = useState("");
    const [informationValue, setInformationValue] = useState("");

    const options = useMemo(() => countryList().getData(), [])
    const roleOptions = [{
        label: "Founder/CEO",
        value: 'Founder/CEO'
    }, {
        label: "Marketing Manager",
        value: 'Marketing Manager'
    },
    {
        label: "Account Manager",
        value: 'Account Manager'
    },
    {
        label: "Directors of operations",
        value: 'Directors of operations'
    }]

    const informationOptions = [{
        label: "Search Engine (Google,Yahoo, etc)",
        value: 'Search Engine (Google,Yahoo, etc)'
    }, {
        label: "Recommended by a friend or colleague",
        value: 'Recommended by a friend or colleague'
    },
    {
        label: "Social media",
        value: 'Social media'
    },
    {
        label: "Blog or publications",
        value: 'Blog or publications'
    }]
    // console.log(options);

    const [activeState, setActiveState] = useState(0);
    const [inputType1, setInputType1] = useState('password')
    const [inputType2, setInputType2] = useState('password')
    const [registrationForm, setRegistrationForm] = useState();

    const changeHandler = value => {
        console.log(value);
        setValue(value)
    }

    const handleRoleChange = value => {
        console.log(value);
        setRoleValue(value)
    }

    const handleInformationChange = value => {
        console.log(value);
        setInformationValue(value)
    }

    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    const handlePersonalDetails = (values) => {
        console.log(values);
        setRegistrationForm({ ...values, country: value.value });
        setActiveState(1)
    }

    const handleBusinessDetails = (values) => {
        // console.log(registrationForm)
        const {
            country,
            email,
            fullname,
            password,
        } = registrationForm
        // console.log(values);

        const { business_name,
            referral_code,
            website } = values

        const buz = [{
            business_name,
            referral_code,
            website,
            role: roleValue.value,
            information: informationValue.value
        }]

        const data = {
            country,
            email,
            fullname,
            password,
            buz
        }
        handleRegistrationForm(data);
    }

    const handleRegistrationForm = (data) => {
        // console.log(data)
        registerUser(data)
    }

    useEffect(() => {
        console.log(registrationError, message, loading)
        if (registrationError?.length > 0) {
            createNotification('error', registrationError)
        }
        if (message?.length > 0) {
            createNotification('info', message)
        }

    }, [registrationError, message, loading])

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

                                    <Card className='p-5 signup-form-card '>
                                        {/* <div >
                                            <Steps direction='horizontal' current={activeState} className='signup-step text-center mb-4'>
                                                <Step className='' title='Personal Details' description='Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed' />
                                                <Step title='Business Details' description='Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed' />
                                            </Steps>
                                        </div> */}
                                        {
                                            activeState === 0 ?
                                                <Form onSubmit={handleSubmit(handlePersonalDetails)}>
                                                    {errors.fullname && <span className='text-danger text-left'>Enter Full Name</span>}
                                                    <input
                                                        type='text'
                                                        placeholder='Full Name'
                                                        name="fullname"
                                                        className={`w-100 ${errors.fullname ? 'border-danger' : ""}`}
                                                        {...register('fullname'
                                                            , {
                                                                required: true,

                                                            }
                                                        )} />
                                                    {errors.email && <span className='text-danger text-left'>Enter a valid Email</span>}
                                                    <input
                                                        type='email'
                                                        name='email'
                                                        placeholder='Email Address'
                                                        className={`w-100 ${errors.email ? 'border-danger' : ""}`}
                                                        {...register('email'
                                                            , {
                                                                required: true,
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: "invalid email"
                                                                }
                                                            }
                                                        )}
                                                    />

                                                    {errors.country && <span className='text-danger text-left'>Select Country</span>}
                                                    <Select
                                                        options={options}

                                                        value={value}
                                                        onChange={(e) => changeHandler(e)}
                                                        name='country'
                                                        placeholder='Select Country'
                                                        className={`w-100 ${errors.country ? 'border-danger' : ""} mb-3`}

                                                    // {...register('country'
                                                    //     , {
                                                    //         required: true,

                                                    //     }
                                                    // )}
                                                    />
                                                    {/* <input
                                                        name='country'
                                                        placeholder='Select Country'
                                                        className={`w-100 ${errors.country ? 'border-danger' : ""}`}
                                                        {...register('country'
                                                            , {
                                                                required: true,

                                                            }
                                                        )}
                                                    /> */}

                                                    {errors.password && <span className='text-danger text-left'>Enter your password</span>}
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
                                                        <input
                                                            type={inputType1}
                                                            placeholder='Create password'
                                                            name='password'

                                                            {...register('password'
                                                                , {
                                                                    required: true,

                                                                }
                                                            )}
                                                            className={`w-100 ${errors.password ? 'border-danger' : ""}`}
                                                        />
                                                    </div>

                                                    {errors.confirmPassword && <span className='text-danger text-left'>{errors.confirmPassword?.message}</span>}
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
                                                        <input
                                                            type={inputType2}
                                                            name='confirmPassword'
                                                            placeholder='Confirm password'
                                                            className={`w-100 ${errors.confirmPassword ? 'border-danger' : ""}`}
                                                            {...register('confirmPassword'
                                                                , {
                                                                    required: true,
                                                                    validate: (val) => {
                                                                        if (watch('password') !== val) {
                                                                            return "Passwords do not match"
                                                                        }
                                                                    }

                                                                }
                                                            )}

                                                        />

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
                                                                type='submit'
                                                                className={`btn-${activeState === 0 ? 'primary' : ""}`
                                                                }
                                                                // onClick={() => {
                                                                //     setActiveState(1)
                                                                // }}
                                                                disabled={activeState === 1 || value.length <= 0}
                                                            >Next</Button>
                                                        </div>
                                                    </div>
                                                </Form> :
                                                <Form className='business-form' onSubmit={handleSubmit(handleBusinessDetails)}>
                                                    {errors.business_name && <span className='text-danger text-left'>Enter Business Name</span>}
                                                    <input
                                                        type='text'
                                                        placeholder='Business Name'
                                                        name="business_name"
                                                        className={`w-100 ${errors.business_name ? 'border-danger' : ""}`}
                                                        {...register('business_name'
                                                            , {
                                                                required: true,

                                                            }
                                                        )} />

                                                    {errors.website && <span className='text-danger text-left'>Enter Business Website</span>}
                                                    <input
                                                        type='text'
                                                        placeholder='Business Website'
                                                        name="website"
                                                        className={`w-100 ${errors.website ? 'border-danger' : ""}`}
                                                        {...register('website'
                                                            , {
                                                                required: true,

                                                            }
                                                        )} />

                                                    {errors.role && <span className='text-danger text-left'>Enter a role</span>}
                                                    <Select
                                                        options={roleOptions}
                                                        // placeholder='Role'
                                                        name="role"
                                                        value={roleValue}
                                                        onChange={(e) => handleRoleChange(e)}
                                                        // name='country'
                                                        placeholder='role'
                                                        className={`w-100 ${errors.role ? 'border-danger' : ""} mb-3`}

                                                    // {...register('country'
                                                    //     , {
                                                    //         required: true,

                                                    //     }
                                                    // )}
                                                    />
                                                    {/* <input
                                                        type='text'
                                                        placeholder='Role'
                                                        name="role"
                                                        className={`w-100 ${errors.role ? 'border-danger' : ""}`}
                                                        {...register('role'
                                                            , {
                                                                required: true,

                                                            }
                                                        )} /> */}

                                                    {errors.referral_code && <span className='text-danger text-left'>Enter a referral code</span>}
                                                    <input
                                                        type='text'
                                                        placeholder='Referral Code'
                                                        name="referral_code"
                                                        className={`w-100 ${errors.referral_code ? 'border-danger' : ""}`}
                                                        {...register('referral_code'
                                                            // , {
                                                            //     required: true,

                                                            // }
                                                        )} />

                                                    {errors.aboutUs && <span className='text-danger text-left'>Select an option</span>}
                                                    <Select
                                                        options={informationOptions}
                                                        // placeholder='Role'
                                                        name="information"
                                                        value={informationValue}
                                                        onChange={(e) => handleInformationChange(e)}
                                                        // name='country'
                                                        placeholder='How do you hear about us?'
                                                        className={`w-100 ${errors.information ? 'border-danger' : ""} mb-3`}

                                                    // {...register('country'
                                                    //     , {
                                                    //         required: true,

                                                    //     }
                                                    // )}
                                                    />
                                                    {/* <input
                                                        type='text'
                                                        placeholder='How do you hear about us?'
                                                        name="aboutUs"
                                                        className={`w-100 ${errors.aboutUs ? 'border-danger' : ""}`}
                                                        {...register('aboutUs'
                                                            // , {
                                                            //     required: true,

                                                            // }
                                                        )} /> */}

                                                    {/* <Input type='text' placeholder='Business Name' className='' />
                                                    <Input type='email' placeholder='Business website' className='' /> */}
                                                    {/* <Input type='email' placeholder='Role' className='' /> */}
                                                    {/* <div>
                                                        <Input type='password' placeholder='Referral Code' />
                                                    </div> */}
                                                    {/* <div>
                                                        <Input type='password' placeholder='How do you hear about us?' />
                                                    </div> */}
                                                    <div className='pt-2 pb-3'>
                                                        <Button className='w-100' type='submit'>
                                                            {loading ?
                                                                <div className='text-center w-100 align-items-center'>
                                                                    <ThreeDots color='white' height={'12px'} wrapperStyle={{ display: 'block' }} />
                                                                </div>
                                                                : 'Sign Up'}
                                                        </Button>
                                                    </div>
                                                </Form>
                                        }


                                    </Card>
                                    <div className='no-account mt-4 py-4 text-center'>
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

const mapStateToProps = ({ auth }) => {
    const { registrationError, message, loading } = auth
    return ({ registrationError, message, loading })
}
export default connect(mapStateToProps, { registerUser })(Signup)
// export default Signup