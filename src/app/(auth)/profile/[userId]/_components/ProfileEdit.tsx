'use client';
import { useProfileEdit } from '@/app/(auth)/_hooks/useFormData';
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
  const { register, watch, handleSubmit, errors } = useProfileEdit();
  console.log(watch());
  return (
    <div>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center gap-2'>
          <button className='relative'>
            <ProfileImage src={profileImage} size={100} />
            <div className='absolute bottom-1 right-1'>
              <EditSVG x='20' y='20' />
            </div>
          </button>
          <TextField
            label='닉네임'
            defaultValue={nickname}
            {...register('nickname')}
            errormessage={errors.nickname?.message}
          />
          <TextField
            label='전화번호'
            defaultValue={phoneNumber}
            {...register('phoneNumber')}
            errormessage={errors.phoneNumber?.message}
          />
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
          <Button type='submit' size={'mini'}>
            수정하기
          </Button>
        </div>
      </form>
    </div>
  );
};
