import { Button } from '@/components/atoms';
import { SocialLoginBtnGroup } from './_components/SocialLoginBtn';

export default function LoginPage() {
  return (
    <div>
      <Button size={'large'}>로그인 하기</Button>
      <SocialLoginBtnGroup />
      <Button size={'large'} variant={'stroke'}>
        회원가입하기
      </Button>
    </div>
  );
}
