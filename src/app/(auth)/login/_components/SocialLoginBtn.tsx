'use client';
import {
  SocialGoogleSVG,
  SocialKakaoSVG,
  SocialNaverSVG,
} from '@/components/svg/SocialSVG';
import React, { ComponentProps, ReactNode } from 'react';
import { RecentLoginMsg } from './RecentLoginMsg';
import Link from 'next/link';
interface SocialLoginBtnProps extends ComponentProps<'button'> {
  icon: ReactNode;
  provider: string;
  recentLogin: boolean;
}
const SocialLoginBtn = ({
  icon,
  recentLogin,
  provider,
  ...props
}: SocialLoginBtnProps) => {
  const href = 'NAVER'
    ? `${process.env.NEXT_PUBLIC_NODE_SERVER}/auth/login/${provider}`
    : `${process.env.NEXT_PUBLIC_KOTIL_SERVER}/auth/login/${provider}`;
  return (
    <div className='relative flex flex-col items-center'>
      <Link href={href}>{icon}</Link>
      <RecentLoginMsg recentLogin={recentLogin} />
    </div>
  );
};
export const SocialLoginBtnGroup = () => {
  return (
    <div className='mb-[120px] flex justify-center gap-6'>
      <SocialLoginBtn
        provider='NAVER'
        icon={<SocialNaverSVG />}
        recentLogin={true}
      />
      <SocialLoginBtn
        provider='KAKAO'
        icon={<SocialKakaoSVG />}
        recentLogin={false}
      />
      <SocialLoginBtn
        provider='GOOGLE'
        icon={<SocialGoogleSVG />}
        recentLogin={false}
      />
    </div>
  );
};
