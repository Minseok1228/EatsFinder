import { MyFeedCard } from '@/components/molecules/myFeedCard';
import React from 'react';

export const MyFeed = () => {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '10', '23'];
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6'>
      {arr.map((i) => (
        <MyFeedCard uniqueKey={i} />
      ))}
    </div>
  );
};
