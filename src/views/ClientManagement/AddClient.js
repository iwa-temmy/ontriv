import { HiUser } from 'react-icons/hi';
import { Input, Button, Row, Col } from 'reactstrap'
import { CenteredModal as Modal } from '../../components/Modal';

const AddNewClient = ({ addState, setAddState }) => {

    return (
        <Modal
            modalState={addState}
            setModalState={setAddState}
        >
            <div className='add-client-wrapper text-center '>
                <div className='text-center user-icon-container '>
                    <HiUser
                        className=' text-center'
                        color="#49A8F8"
                        size='45px'
                    />
                </div>
                <div className='add-client-text text-center'>
                    <h3>Add new client</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <form className='business-form'>
                    <Input type='text' placeholder='Business Name' className='' />
                    <Input type='email' placeholder='Email Address' className='' />
                    <Input type='phone' placeholder='Phone Number' className='' />
                    <Input type='phone' placeholder='Project Tag' className='' />

                    <Row>
                        <Col sm='12' md='6'>
                            <Input type='text' placeholder='Start ' className='' />
                        </Col>
                        <Col sm='12' md='6'>
                            <Input type='text' placeholder='End Date' className='' />
                        </Col>
                    </Row>

                    <div className='pt-2 pb-3'>
                        <Button className='w-100'>Add Client</Button>
                    </div>
                </form>

            </div>

        </Modal>
    )

}

export default AddNewClient;