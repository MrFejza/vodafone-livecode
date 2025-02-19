import React, { useState } from 'react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, closeButton } from "../../UI/Modal";




function TestModal() {

    const [isModalOpen, setIsModalOpen] = useState(false)   

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    
  return (
    <div>
    <button
    onClick={openModal}
    className="px-6 py-2 bg-blue-600  text-white rounded-md hover:bg-blue-700 focus:outline-none"
  >
    Open Modal
  </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1>Modal Header</h1>
          </ModalHeader>
          <ModalBody>
            <p>Modal Body</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={closeModal}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>    
  )
}

export default TestModal