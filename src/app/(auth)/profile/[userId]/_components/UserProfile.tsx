'use client';
import { ProfileProps } from '@/types/authType';
import { Profile } from './Profile';
import { ProfileContents } from './ProfileContents';
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/api/profile';

export const UserProfile = ({
  userId,
  loggedInUserId,
  isOwnProfile,
}: ProfileProps) => {
  const { data: userProfileData, isLoading } = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => getUserProfile(userId),
  });

  console.log('vmfhvlfvpdlwl', typeof userId);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (userProfileData?.isSuccess) {
    return (
      <>
        <Profile
          loggedInUserId={loggedInUserId}
          userData={userProfileData.data}
          isOwnProfile={isOwnProfile}
        />
        <ProfileContents
          userData={userProfileData.data}
          isOwnProfile={isOwnProfile}
        />
      </>
    );
  } else {
    return <div>찾으시는 유저가 없습니다.</div>;
  }
};
