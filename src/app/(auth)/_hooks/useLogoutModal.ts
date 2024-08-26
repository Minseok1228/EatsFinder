import { useState } from 'react';

export const useLogoutModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openLogoutModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const logoutButton = () => {};
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return { isModalOpen, closeModal, openLogoutModal, logoutButton };
};
