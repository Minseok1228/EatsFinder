import { Button } from '@/components/atoms';
import { Spacer } from '@/components/atoms/button/Spacer';
import { SocialLoginBtnGroup } from './SocialLoginBtn';

export const LoginPage = () => {
  return (
    <div>
      <Spacer y={32} />
      <Button size={'large'}>로그인 하기</Button>
      <Spacer y={32} />
      <SocialLoginBtnGroup />
      <Spacer y={120} />
      <Button size={'large'} variant={'stroke'}>
        회원가입하기
      </Button>
    </div>
  );
};
