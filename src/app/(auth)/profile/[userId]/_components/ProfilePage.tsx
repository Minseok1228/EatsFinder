import { ProfilePageProps } from '@/types/authType';
import { ProfileContents } from './ProfileContents';
import { UserProfile } from './UserProfile';
import { Suspense } from 'react';
import { Loading } from '@/app/(auth)/_components/Loading';
import { cookies } from 'next/headers';
import { getUserInfo } from '@/utils/getUserInfo';

export const ProfilePage = async () => {
  const userInfo = await getUserInfo();

  return (
    <div className='flex flex-col gap-20'>
      <Suspense fallback={<Loading />}>
        <UserProfile />
        <ProfileContents />
      </Suspense>
    </div>
  );
};
