import { Button } from '@/components/atoms';
import { Spacer } from '@/components/atoms/button/Spacer';
import { SocialLoginBtnGroup } from './SocialLoginBtn';
import Link from 'next/link';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  return (
    <>
      {/**로그인 폰트 size lingheigt 임의로 지정
       * config에 따로 저장할지 고려
       */}
      <h2 className='h-[41px] w-[78px] text-2xl font-extrabold leading-snug text-gray-800'>
        로그인
      </h2>
      <Spacer y={24} />
      <LoginForm />
      <Spacer y={32} />
      <SocialLoginBtnGroup />
      <Spacer y={120} />
      <Link href='/signup'>
        <Button size={'large'} variant={'stroke'}>
          회원가입하기
        </Button>
      </Link>
    </>
  );
};
