import {
  SocialGoogleSVG,
  SocialKakaoSVG,
  SocialNaverSVG,
} from '@/components/svg/SocialSVG';
import React, { ComponentProps, ReactNode } from 'react';
interface SocialLoginBtnProps extends ComponentProps<'button'> {
  icon: ReactNode;
}
const SocialLoginBtn = ({ icon, ...props }: SocialLoginBtnProps) => {
  return <button {...props}>{icon}</button>;
};

export const SocialLoginBtnGroup = () => {
  return (
    <div className='flex justify-center gap-6'>
      <SocialLoginBtn icon={<SocialNaverSVG />} />
      <SocialLoginBtn icon={<SocialKakaoSVG />} />
      <SocialLoginBtn icon={<SocialGoogleSVG />} />
    </div>
  );
};
