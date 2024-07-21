'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AuthHeader } from '@/app/(auth)/_components/AuthHeader';
import { NavLink, ProfileImage } from '@/components/atoms';
import { LogoImgSVG } from '@/components/svg/LogoSVG';

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
        <Link href={'/profile/ss'}>
          <ProfileImage size={50} />
        </Link>
      </div>
    </header>
  );
};
