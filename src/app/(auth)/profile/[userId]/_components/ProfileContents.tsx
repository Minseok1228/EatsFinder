'use client';
import { Tab } from '@/components/atoms/button/Tab';
import { useTabHandler } from '@/hooks/useTabHandler';
import React from 'react';
import { MyFeed } from './MyFeed';
import { Timeline } from './Timeline';
export const ProfileContents = () => {
  const tabLabels = ['내 피드', '내 활동'];
  const { activeIndex, handleTabClick } = useTabHandler();
  const contents = () => {
    if (activeIndex === 0) {
      return <MyFeed />;
    } else if (activeIndex === 1) {
      return <Timeline />;
    }
  };
  return (
    <div className='flex w-[1368px] flex-col gap-6'>
      <div className='flex'>
        {tabLabels.map((label, i) => {
          return (
            <Tab
              key={i}
              active={activeIndex === i}
              onClick={() => handleTabClick(i)}
            >
              {label}
            </Tab>
          );
        })}
      </div>
      {contents()}
    </div>
  );
};
