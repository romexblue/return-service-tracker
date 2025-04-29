import React from 'react'
import Modal from './Modal'

type Props = {
    visible: boolean;
    onClose: () => void;
};

const CreateActivityModal = ({visible, onClose}:Props) => {
  return (
    <Modal modalTitle='Create Activity' visible={visible} onClose={onClose}>
        Hello bro
    </Modal>
  )
}

export default CreateActivityModal