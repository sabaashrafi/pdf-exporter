import React from 'react'
import useModal from '../../hooks/useModal'
import Modal from '../base/Modal'
import FormModal from '../FormModal'

const header = () => {
  const { isOpen, toggle } = useModal()

  return (
    <>
      <div className='flex justify-between bg-orange-500 p-3 items-center'>
        <button
          onClick={toggle} className='bg-white p-2 rounded-lg'>
          Create a Form
        </button>
        <div className='text-stone-50 text-center text-xl font-bold'>Form Builder</div>
        <div />
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <FormModal hideModal={toggle} />
      </Modal>
    </>
  )
}
export default header
