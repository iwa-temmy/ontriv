import { HiUser } from 'react-icons/hi';
import { Input, Button} from 'reactstrap'
import { CenteredModal as Modal } from '../../../components/Modal';

const AddNewMember = ({ addState, setAddState }) => {

    return (
        <Modal
            modalState={addState}
            setModalState={setAddState}
        >
            <div className='add-member-wrapper text-center pb-5 pt-2 '>
                <div className='text-center user-icon-container '>
                    <HiUser
                        className=' text-center'
                        color="#49A8F8"
                        size='45px'
                    />
                </div>
                <div className='add-member-text text-center'>
                    <h3 className='my-2'>Add a team member</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <form className='business-form'>

                    <Input type='email' placeholder='Email Address' className='' />
                    <Input type='phone' placeholder='Role' className='' />

                    <div className='pt-2 pb-5'>
                        <Button className='w-100'>Send Invite</Button>
                    </div>
                </form>

            </div>

        </Modal>
    )

}

export default AddNewMember;