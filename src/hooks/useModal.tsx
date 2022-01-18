import React, { useState } from 'react';
const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setOverflowAttr();
  };

  const setOverflowAttr = () => {
    if (isOpen) document.body.style.overflow = 'unset';
    else document.body.style.overflow = 'hidden';
  };

  return {
    isOpen,
    toggleModal,
  };
};
export default useModal;
