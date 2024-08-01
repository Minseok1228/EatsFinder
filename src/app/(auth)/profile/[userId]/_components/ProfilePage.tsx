import { ProfilePageProps } from '@/types/authType';
import { ProfileContents } from './ProfileContents';
import { UserProfile } from './UserProfile';
import { Suspense } from 'react';
import { Loading } from '@/app/(auth)/_components/Loading';
import { cookies } from 'next/headers';

export const ProfilePage = ({ userData }: ProfilePageProps) => {
  const data = cookies().get('userInfo');
  if (!data) {
    return;
  }
  const userInfo = JSON.parse(data.value);
  return (
    <div className='flex flex-col gap-20'>
      <Suspense fallback={<Loading />}>
        <UserProfile userData={userInfo} />
        <ProfileContents />
      </Suspense>
    </div>
  );
};
