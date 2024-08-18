import { OptionButton } from '@/components/atoms/button/OptionButton';
import { Modal } from '@/components/organisms';
import Link from 'next/link';
import { useMemo, useState } from 'react';
type UserDropdownOptionProps = {
  label: string;
  href: string;
  slug?: string;
};
export const UserDropdownMenu = () => {
  const userId = '1234';
  const UserDropdownOptions = useMemo<UserDropdownOptionProps[]>(
    () => [
      { label: '내 프로필', href: '/profile/', slug: userId },
      { label: '내 계정', href: '/myaccount/', slug: userId },
      { label: '공지사항', href: '/notices' },
      { label: '기타 설정', href: '/settings' },
      { label: '1:1 문의하기', href: '/support' },
    ],
    [userId],
  );
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const button = () => {
  //   console.log('???');
  //   setIsModalOpen(true);
  // };
  // const a = () => {
  //   console.log('aa');
  // };
  return (
    <div className='w-300 absolute right-1/2 z-20 flex translate-x-[50%] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]'>
      {UserDropdownOptions.map((option, idx) => {
        const href = option.slug ? `${option.href}${option.slug}` : option.href;
        return (
          <Link href={href} key={idx}>
            <OptionButton className='w-[300px]'>{option.label}</OptionButton>
          </Link>
        );
      })}
      {/* <OptionButton onClick={button} className='w-[300px]'> */}
      <OptionButton className='w-[300px]'>로그아웃</OptionButton>
      {/* <Modal
        isOpen={true}
        onClose={a}
        title='로그아웃'
        description='로그아웃하시려면 확인을 눌러주세요.'
        subButton='취소'
        onMainClick={a}
        mainButton='확인'
      /> */}
    </div>
  );
};
/**
 *  
 <Modal
        title='타이틀'
        description='설명'
        onMainClick={() => {
          console.log('main');
        }}
        mainButton='메인버튼'
        isOpen={true}
        onClose={() => {
          console.log('닫힘');
        }}
        subButton='서브버튼'
      />
 */
