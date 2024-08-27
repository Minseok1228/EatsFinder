import { useState } from 'react';

export const useLogoutModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openLogoutModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const logoutButton = async (setIsLoggedIn: any) => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    setIsLoggedIn(false);
    console.log('res', res);
    // 비로그인 제한 페이지에서 로그아웃시 미들웨어실행
    // window.location.reload();
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return { isModalOpen, closeModal, openLogoutModal, logoutButton };
};
