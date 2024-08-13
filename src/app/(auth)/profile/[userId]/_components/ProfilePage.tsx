import { ProfilePageProps, UserData } from '@/types/authType';
import { ProfileContents } from './ProfileContents';
import { UserProfile } from './UserProfile';
import { Suspense } from 'react';
import { Loading } from '@/app/(auth)/_components/Loading';
import { cookies } from 'next/headers';
import { getUserInfo } from '@/utils/getUserInfo';

export const ProfilePage = ({ userData }: ProfilePageProps) => {
  return (
    <div className='flex flex-col gap-20'>
      <Suspense fallback={<Loading />}>
        <UserProfile userData={userData} />
        <ProfileContents />
      </Suspense>
    </div>
  );
};
