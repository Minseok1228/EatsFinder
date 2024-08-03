import { getUserInfo } from '@/utils/getUserInfo';
import { AccountInfo } from './AccountInfo';
import { AccountForm } from './AccountForm';

export const MyAccountPage = async () => {
  const userInfo = await getUserInfo();
  //3,75rem = 60 p-9 = 36 96 = 24 / 84

  return (
    <div className='mb-[84px] mt-6 flex flex-col items-center gap-9'>
      <h3 className='text-gray-700 subTitle-28'>내 계정</h3>
      <AccountInfo name={userInfo!.nickname} email={userInfo!.email} />
      <div className='flex flex-col items-center gap-1'>
        <AccountForm />
        <button className='text-gray-100 underline body-16'>탈퇴하기</button>
      </div>
    </div>
  );
};
