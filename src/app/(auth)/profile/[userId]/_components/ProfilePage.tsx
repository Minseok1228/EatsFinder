import { ProfileContents } from './ProfileContents';
import { UserProfile } from './UserProfile';

export const ProfilePage = () => {
  return (
    <div className='flex flex-col gap-20'>
      <UserProfile />
      <ProfileContents />
    </div>
  );
};
