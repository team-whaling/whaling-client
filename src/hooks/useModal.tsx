import React, { useState } from 'react';
const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log('click');
  };
  return {
    isOpen,
    toggleModal,
  };
};
export default useModal;
