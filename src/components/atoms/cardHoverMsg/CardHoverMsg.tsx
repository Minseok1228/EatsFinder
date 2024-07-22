import { FeedOptionMenu } from '@/app/(auth)/profile/[userId]/_components/FeedOptionMenu';
import { MoreSVG } from '@/components/svg/MoreSVG';
import { useToggleHandler } from '@/hooks/useToggleHandler';
import { useState } from 'react';

export const CardHoverMsg = () => {
  const data = {
    title: '파스타 참 맛있는 집111111ㅊㅊㅊㅊㅊㅊ11',
    contents: `내 인생 파스타 집.. 참나물 꼭 드세요..\n
        진짜\n
        넘 맛있으니까... 두번 가세요..... 증말\n
        너무
        맛있어 아 근데 이거 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세`,
    date: '24.06.14',
  };
  const { handleValue: feedOptionHandler, value: feedOption } =
    useToggleHandler();
  return (
    <div className='absolute z-10 flex h-[408px] w-[250px] flex-col justify-between rounded-3xl bg-gray-900 bg-opacity-60 px-[10px] py-[15px] text-white'>
      <div className='relative'>
        <button
          className='absolute right-0 top-0 flex justify-end'
          onClick={feedOptionHandler}
        >
          <MoreSVG />
          {feedOption && <FeedOptionMenu />}
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='truncate subTitle-20'>{data.title}</p>
        <p className='line-clamp-3 body-16'>{data.contents}</p>
        <p className='body-12'>{data.date}</p>
      </div>
    </div>
  );
};
