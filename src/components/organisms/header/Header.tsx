'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AuthHeader } from '@/app/(auth)/_components/AuthHeader';
import { NavLink, ProfileImage } from '@/components/atoms';
import { LogoImgSVG } from '@/components/svg/LogoSVG';
import { UserDropdownMenu } from '@/components/molecules/userDropdownMenu/UserDropdownMenu';
import { useDropdownHandler } from '@/hooks/useDropdownHandler';
import { Modal } from '..';
import { useState } from 'react';
import { useLogoutModal } from '@/app/(auth)/_hooks/useLogoutModal';

const NAV_DATA = [
  {
    label: '홈',
    href: '/',
  },
  {
    label: '탐색피드',
    href: '/',
  },
  {
    label: 'MyEats',
    href: '/',
  },
  {
    label: '맛집정보',
    href: '/',
  },
];

export const Header = () => {
  const path = usePathname();
  if (path.startsWith('/login') || path.startsWith('/signup')) {
    return <AuthHeader />;
  }
  const { isDropdownOpen, dropdownHanlder, dropdownRef } = useDropdownHandler();

  const { closeModal, isModalOpen, logoutButton, openLogoutModal } =
    useLogoutModal();
  return (
    <header className='mb-[3.75rem] flex h-20 items-center justify-around'>
      <div className='flex w-full max-w-[1440px] items-center justify-between px-9'>
        <div>
          <Link href='/'>
            <LogoImgSVG />
          </Link>
        </div>
        <div>
          <ul className='flex gap-[60px]'>
            {NAV_DATA.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink className='w-[90px]' href={link.href}>
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className='relative cursor-pointer'
          ref={dropdownRef}
          onClick={dropdownHanlder}
        >
          <ProfileImage size={50} />
          {isDropdownOpen && (
            <UserDropdownMenu
              openLogoutModal={openLogoutModal}
              dropdownHanlder={dropdownHanlder}
            />
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={() => closeModal}
            title='로그아웃'
            description='로그아웃하시려면 확인을 눌러주세요.'
            subButton='취소'
            onMainClick={logoutButton}
            onSubClick={closeModal}
            mainButton='확인'
          />
        </div>
      </div>
    </header>
  );
};
