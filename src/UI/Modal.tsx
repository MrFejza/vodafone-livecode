import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <ModalContext.Provider value={{ onClose }}>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

const ModalOverlay = () => {
  return <div className="fixed inset-0 bg-gray-800 bg-opacity-50 -z-10"></div>;
};

const ModalContent = ({ children }) => {
  return <div className="modal-content">{children}</div>;
};

const ModalHeader = ({ children }) => {
  return <div className="text-xl font-semibold mb-4">{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="flex justify-end">{children}</div>;
}

const closeButton = () => {
  const { onClose } = useContext(ModalContext);
  return (
    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
      Close
    </button>
  );
}

export { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, closeButton };