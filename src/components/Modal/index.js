import React from 'react';
import { Modal } from 'reactstrap';
import { TiTimes } from 'react-icons/ti'


export const CenteredModal = ({ className, modalState, setModalState, size, children }) => {
    // const [modalState, setModalState] = useState(true);
    const toggle = () => {
        setModalState(!modalState);
    }

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal
                isOpen={modalState}
                toggle={toggle}
                modalClassName='cstm-modal'
                size={size}
                className={`${className} modal-dialog-centered`} >
                <div className='modal-cstm-button text-center' onClick={toggle}>
                    <TiTimes size='25px' />
                </div>
                {children}
            </Modal>
        </div>
    );
}
export const TopRightModal = ({ modalState, setModalState, size, children }) => {
    const toggle = () => {
        setModalState(!modalState);
    }

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal
                isOpen={modalState}
                toggle={toggle}
                modalClassName='modal-dialog-topRight'
                size={size}
                className={`modal-dialog-topRight`} >
                {children}
            </Modal>
        </div>
    );
}