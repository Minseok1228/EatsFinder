'use client';
import { Button, ProfileImage } from '@/components/atoms';
import { ProfileInfo } from './ProfileInfo';
import { UserProfileStats } from './UserProfileStats';
import { ProfileEdit } from './ProfileEdit';
import { useToggleHandler } from '@/hooks/useToggleHandler';
import { Profile } from './Profile';
import { ProfilePageProps } from '@/types/authType';

export const UserProfile = ({ userData }: ProfilePageProps) => {
  const { value: isEdit, handleValue: editHandler } = useToggleHandler();
  return (
    <>
      {isEdit ? (
        <ProfileEdit handler={editHandler} userData={userData} />
      ) : (
        <Profile handler={editHandler} userData={userData} />
      )}
    </>
  );
};
