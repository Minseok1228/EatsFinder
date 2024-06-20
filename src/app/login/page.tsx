import { Button } from '@/components/atoms';
import { SocialLoginBtnGroup } from './_components/SocialLoginBtn';
import { Spacer } from '@/components/atoms/button/Spacer';

export default function LoginPage() {
  return (
    <div>
      <Spacer y={32} />
      <Button size={'large'}>로그인 하기</Button>
      <Spacer y={32} />
      <SocialLoginBtnGroup />
      <Button size={'large'} variant={'stroke'}>
        회원가입하기
      </Button>
    </div>
  );
}
11;
