'use client';
import { ProfileEdit } from './ProfileEdit';
import { useToggleHandler } from '@/hooks/useToggleHandler';
import { Profile } from './Profile';
import { UserData } from '@/types/authType';
type userProfileProps = {
  userData: UserData;
};
export const UserProfile = ({ userData }: userProfileProps) => {
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
