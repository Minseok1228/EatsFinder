import Image from 'next/image';
import React from 'react';
type ActivityType = 'comments' | 'like' | 'share' | 'follow';

interface Data {
  pic: string;
  nickname: string;
  type: ActivityType;
  message?: string;
  date: string;
}
export const UserTimeline = () => {
  const data: Data = {
    pic: 'data:image/jpeg;base64,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',
    nickname: 'abc',
    type: 'follow',
    message:
      '여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.여기 진짜 맛있엇어요..! 다음에 꼭 다시 갈거에요.',
    date: '2024.06.18',
  };
  const typeMessages: Record<ActivityType, string> = {
    comments: '님의 게시물에 남긴 댓글',
    like: '님의 게시물에 좋아요를 눌렀어요.',
    share: '님의 게시물을 공유했어요.',
    follow: '님을 팔로우 했어요',
  };

  return (
    <div className='flex w-[1368px] items-center border-b-[1px] border-b-gray-50 px-5 pb-[25px] pt-5'>
      <div className='flex w-full items-center gap-3'>
        <div className='flex items-center gap-1'>
          <div className='flex items-center gap-3'>
            <div className='relative flex h-[70px] w-[70px] items-center'>
              <Image
                className='rounded-full'
                src={data.pic}
                fill={true}
                alt='user profile'
              />
            </div>
            <p className='text-gray-600 subTitle-18'>{data.nickname}</p>
          </div>
          <p className='text-gray-500 body-16'>{typeMessages[data.type]}</p>
        </div>
        {data.message && (
          <p className='flex-1 truncate text-gray-800 subTitle-20'>
            {data.message}
          </p>
        )}
        <p className='text-gray-500 body-16'>{data.date}</p>
      </div>
    </div>
  );
};
