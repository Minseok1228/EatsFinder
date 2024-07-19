import { CardHoverMsg } from '@/components/atoms/cardHoverMsg';
import { UserTimeline } from '@/components/atoms/userTimeline';
import { Card, FeedCard, FollowCard } from '@/components/molecules';
import { MyFeedCard } from '@/components/molecules/myFeedCard';

export const ProfilePage = () => {
  return (
    <div>
      ProfilePage
      <UserTimeline />
      <UserTimeline />
      <UserTimeline />
      <UserTimeline />
      <MyFeedCard />
    </div>
  );
};
