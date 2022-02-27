import { Input, Button } from 'reactstrap'
import { CenteredModal as Modal } from '../../components/Modal';

const AddNewClient = ({ addState, setAddState }) => {

    return (
        <Modal
            modalState={addState}
            setModalState={setAddState}
        >
            <div className='add-client-wrapper text-center '>
                <div className='add-client-text text-center'>
                    <h3>Request Payment</h3>
                </div>
                <form className='business-form mt-4'>
                    <label className='text-left w-100'>
                      Account Balance
                    </label>
                    <Input type='phone' placeholder='$0.00' className='' />
                    <label className='text-left w-100'>
                      Bank Name
                    </label>
                    <select name="" className='bank-select w-100 px-3 py-3 mb-2' id="">
                      <option value="">
                        Select bank
                      </option>
                      <option value="">
                        First bank
                      </option>
                      <option value="">
                        Gtb bank
                      </option>
                    </select>
                    <label className='text-left w-100'>
                      Account Number
                    </label>
                    <Input type='phone' placeholder='' className='' />
                    <div className='pt-2 pb-3'>
                        <Button className='px-5'>Submit</Button>
                    </div>
                </form>
              <div className='add-client-text text-center'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

            </div>

        </Modal>
    )

}

export default AddNewClient;
