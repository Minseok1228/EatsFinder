import { useState } from 'react';

export const useLogoutModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openLogoutModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const logoutButton = async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    console.log('res', res);
    window.location.reload();
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return { isModalOpen, closeModal, openLogoutModal, logoutButton };
};
