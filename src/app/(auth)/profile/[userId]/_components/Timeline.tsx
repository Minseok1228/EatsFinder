import { UserTimeline } from '@/components/atoms/userTimeline';
import React from 'react';

export const Timeline = () => {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '10', '23'];

  return (
    <>
      {arr.map((arr) => (
        <UserTimeline key={arr} />
      ))}
    </>
  );
};
