import { getUserInfo } from '@/utils/getUserInfo';
import { AccountInfo } from './AccountInfo';
import { AccountForm } from './AccountForm';

export const MyAccountPage = async () => {
  const userInfo = await getUserInfo();
  return (
    <div className='mb-[84px] mt-6 flex flex-col items-center gap-9'>
      <h3 className='text-gray-700 subTitle-28'>내 계정</h3>
      <AccountInfo name={userInfo!.nickname} email={userInfo!.email} />
      <div className='flex flex-col items-center gap-1'>
        {userInfo!.userType === 'LOCAL' && <AccountForm />}
        <button className='text-gray-100 underline body-16'>탈퇴하기</button>
      </div>
    </div>
  );
};
