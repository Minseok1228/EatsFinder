import { Button, ProfileImage } from '@/components/atoms';
import { TextField } from '@/components/atoms/textField';
import { EditSVG } from '@/components/svg/EditSVG';
import { UserData } from '@/types/authType';
type ProfileEditProps = {
  handler: () => void;
  userData: UserData;
};
export const ProfileEdit = ({ handler, userData }: ProfileEditProps) => {
  const { nickname, phoneNumber, profileImage } = userData;
  return (
    <div>
      <form
        className='flex flex-col items-center'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex flex-col items-center gap-2'>
          <button className='relative'>
            <ProfileImage src={profileImage} size={100} />
            <div className='absolute bottom-1 right-1'>
              <EditSVG x='20' y='20' />
            </div>
          </button>
          <TextField label='닉네임' value={nickname} />
          <TextField label='전화번호' value={phoneNumber} />
        </div>
        <div className='my-4 flex gap-2'>
          <Button
            type='button'
            size={'mini'}
            variant={'stroke'}
            onClick={handler}
          >
            취소하기
          </Button>
          <Button type='button' size={'mini'} onClick={handler}>
            수정하기
          </Button>
        </div>
      </form>
    </div>
  );
};
