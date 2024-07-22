import { Button, ProfileImage } from '@/components/atoms';
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { UserProfileStats } from './UserProfileStats';
type ProfileProps = {
  handler: () => void;
};
export const Profile = ({ handler }: ProfileProps) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <ProfileImage size={100} />
      <ProfileInfo />
      <UserProfileStats />
      <Button size={'mini'} className='w-[124px]' onClick={handler}>
        내 프로필 수정하기
      </Button>
    </div>
  );
};
