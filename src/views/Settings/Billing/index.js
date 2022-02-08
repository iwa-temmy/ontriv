import { Row, Col, Card, Button } from "reactstrap";
import billing from '../../../assets/img/billingIcon.png';
import MasterCard from '../../../assets/img/Mastercard.svg';
import visa from '../../../assets/img/visa-logo.svg';
import { IoIosCheckmarkCircle } from 'react-icons/io';



const Billing = () => {
    return (
        <div className="billing-section mt-5">

            <Row>
                <Col xl='6' className="px-3 mb-2">
                    <div className="d-flex mt-5">
                        <div className="">
                            <img src={billing} alt='bill' />
                        </div>
                        <div className="billing-text px-4 mt-4">
                            <h1>Billing Info</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xl='6'>
                    <Card className="account-setup-card  ">
                        <div className="billing-info-card mb-3 d-flex align-items-center justify-content-evenly ">
                            <img src={MasterCard} alt='mastercard' />
                            <p className="card-info mb-0 semi-bold">Master card</p>
                            <p className="card-info mb-0 semi-bold">4620</p>
                            <p className="card-info mb-0">0722</p>
                            <div className="">
                                <IoIosCheckmarkCircle className='icon-wrapper' size='20px' color='#00D67D' />
                            </div>
                        </div>

                        <div className="billing-info-card mb-3 d-flex align-items-center justify-content-evenly">
                            <img src={visa} alt='visa-card' />
                            <p className="card-info mb-0 semi-bold">vis card</p>
                            <p className="card-info mb-0 semi-bold">4620</p>
                            <p className="card-info mb-0">0722</p>
                            <div className="pt-3">
                                {""}
                            </div>
                        </div>
                        <Button className=" mt-4 ">
                            Add Payment Method
                        </Button>
                    </Card>
                </Col>
            </Row>



        </div>
    )
}
export default Billing;