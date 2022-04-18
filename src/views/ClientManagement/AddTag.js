import React, {
    // useState,
    useEffect
} from 'react';
import { HiUser } from 'react-icons/hi';
// import {
//     //  Input,
//     Button,
//     // Row,
//     // Col
// } from 'reactstrap'
import { CenteredModal as Modal } from '../../components/Modal';
import { ThreeDots } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
// import { createTag } from "../../redux/actions";
import createNotification from '../../utils/Notification';

const AddNewTag = ({
    addState,
    createTag,
    setAddState,
    creatingTagError,
    message,
    creatingTagLoading }) => {

    const { handleSubmit, register, formState: { errors } } = useForm();

    const handleTagCreation = values => {
        const { name } = values;
        const data = { name }
        console.log(data);
        // console.log(createTag)
        createTag(data);
    }

    useEffect(() => {
        console.log(creatingTagError, message, creatingTagLoading)
        if (creatingTagError.length > 0) {
            createNotification('error', creatingTagError)
        }
        if (message.length > 0) {
            createNotification('info', message)
        }

    }, [creatingTagError, message, creatingTagLoading])




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
                    <h3>Add new Tag</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <form className='business-form text-left' onSubmit={handleSubmit(handleTagCreation)}>
                    {errors.name && <span className='text-danger text-left'>Enter Tag name</span>}
                    <input
                        type='text'
                        name='name'
                        placeholder='Tag Name'
                        className={`w-100 ${errors.name ? 'border-danger' : ""}`}
                        {...register('name'
                            , {
                                required: true,

                            }
                        )}
                    />
                    <div className='pt-2 pb-3'>
                        <button className='w-100'
                            disabled={creatingTagLoading}>
                            {creatingTagLoading ?
                                <div className='text-center w-100 align-items-center'>
                                    <ThreeDots color='white' height={'12px'} wrapperStyle={{ display: 'block' }} />
                                </div>
                                : 'Add Tag'}

                        </button>
                    </div>
                </form>

            </div>

        </Modal>
    )

}

const mapStateToProps = ({ client }) => {
    const { creatingTagError, message, creatingTagLoading } = client
    return ({ creatingTagError, message, creatingTagLoading })
}
export default connect(mapStateToProps, null)(AddNewTag);
