import { ProfileImage } from '@/components/atoms';
import { CardHoverMsg } from '@/components/atoms/cardHoverMsg';
import { UserTimeline } from '@/components/atoms/userTimeline';
import { Card, FeedCard, FollowCard } from '@/components/molecules';
import { MyFeedCard } from '@/components/molecules/myFeedCard';
import { ProfileEdit } from './ProfileEdit';
import { MyFeed } from './MyFeed';
import { FeedOptionMenu } from './FeedOptionMenu';
import { ProfileContents } from './ProfileContents';

export const ProfilePage = () => {
  return (
    <div>
      <FeedOptionMenu />
      <ProfileEdit />
      <ProfileContents />
      <UserTimeline />
      <UserTimeline />
      <UserTimeline />
      <UserTimeline />
      <MyFeed />
    </div>
  );
};
