import {
  SocialGoogleSVG,
  SocialKakaoSVG,
  SocialNaverSVG,
} from '@/components/svg/SocialSVG';
import React, { ComponentProps, ReactNode } from 'react';
import { RecentLoginMsg } from './RecentLoginMsg';
interface SocialLoginBtnProps extends ComponentProps<'button'> {
  icon: ReactNode;
  recentLogin: boolean;
}
const SocialLoginBtn = ({
  icon,
  recentLogin,
  ...props
}: SocialLoginBtnProps) => {
  return (
    <div className='relative flex flex-col items-center'>
      <button {...props}>{icon}</button>
      <RecentLoginMsg recentLogin={recentLogin} />
    </div>
  );
};
export const SocialLoginBtnGroup = () => {
  return (
    <div className='mb-[120px] flex justify-center gap-6'>
      <SocialLoginBtn icon={<SocialNaverSVG />} recentLogin={true} />
      <SocialLoginBtn icon={<SocialKakaoSVG />} recentLogin={false} />
      <SocialLoginBtn icon={<SocialGoogleSVG />} recentLogin={false} />
    </div>
  );
};
