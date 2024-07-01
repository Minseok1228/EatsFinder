import { LogoImgSVG } from '@/components/svg/LogoSVG';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-3 bg-gray-800 py-10 text-gray-100 body-12'>
      <div>
        <LogoImgSVG />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='subTitle-16'>OFFICE</p>
        <p>서울특별시 용산구 한강대로 405</p>
        <p>010-3456-7890</p>
        <p>abcdef@eatsfinder.co.kr</p>
        <p className='subTitle-16'>
          COPYRIGHT 2024 EATS-FINDER. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
