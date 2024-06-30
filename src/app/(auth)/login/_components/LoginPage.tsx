import { Button } from '@/components/atoms';
import { Spacer } from '@/components/atoms/spacer/Spacer';
import { SocialLoginBtnGroup } from './SocialLoginBtn';
import Link from 'next/link';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  return (
    <>
      <h2 className='text-gray-800 title-30'>로그인</h2>
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
