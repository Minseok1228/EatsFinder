import { Button, MoreButton } from '@/components/atoms';
import { OptionButton } from '@/components/atoms/button/OptionButton';
import React from 'react';

export const FeedOptionMenu = () => {
  return (
    <div className='absolute z-20 flex w-40 flex-col overflow-hidden rounded-3xl bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]'>
      <OptionButton>수정하기</OptionButton>
      <OptionButton>삭제하기</OptionButton>
    </div>
  );
};
