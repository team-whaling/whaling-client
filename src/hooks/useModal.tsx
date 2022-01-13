import React, { useState } from 'react';
const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    toggleModal,
  };
};
export default useModal;
