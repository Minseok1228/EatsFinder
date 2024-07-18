import { CardHoverMsg } from '@/components/atoms/cardHoverMsg';
import { Card, FeedCard, FollowCard } from '@/components/molecules';
import { MyFeedCard } from '@/components/molecules/myFeedCard';

export const ProfilePage = () => {
  return (
    <div>
      ProfilePage
      <MyFeedCard />
      <FeedCard />
      <Card />
      <FollowCard />
    </div>
  );
};
