import { Tab } from '@/components/atoms/button/Tab';
import React from 'react';

export const ProfileContents = () => {
  return (
    <div className='flex'>
      <Tab active={true}>내 피드</Tab>
      <Tab active={false}>내 활동</Tab>
    </div>
  );
};
