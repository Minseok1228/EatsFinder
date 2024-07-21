import { Button, ProfileImage } from '@/components/atoms';
import { TextField } from '@/components/atoms/textField';

export const ProfileEdit = () => {
  return (
    <div>
      <form className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-2'>
          <ProfileImage size={100} />
          <TextField label='닉네임' />
          <TextField label='전화번호' />
        </div>
        <div className='my-4 flex gap-2'>
          <Button size={'mini'} variant={'stroke'}>
            취소하기
          </Button>
          <Button size={'mini'}>수정하기</Button>
        </div>
      </form>
    </div>
  );
};
