'use client';
import { useState } from 'react';
import { Rating } from '@/components/molecules';
import { PostFormLabel } from './PostFormLabel';

export const PostFormLeftSection = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className='flex flex-col gap-12'>
      <div>
        <PostFormLabel>추천 맛집</PostFormLabel>
        <div className='flex h-[50px] cursor-pointer items-center rounded border border-gray-100 px-[10px] text-gray-200 body-16'>
          클릭해서 추천 맛집을 찾아보세요
        </div>
        {/* <div className='mt-3 min-h-[540px] rounded-3xl px-5 py-6 shadow-[0_0_20px_rgba(0,0,0,0.1)]'>
          <Search />
        </div> */}
      </div>
      <div>
        <PostFormLabel>사용자 별점</PostFormLabel>
        <Rating
          number={5}
          rating={rating}
          onClick={(index) => {
            setRating(index);
          }}
        />
      </div>
      <div className='flex flex-col'>
        <PostFormLabel>나의 후기</PostFormLabel>
        <textarea
          className='h-[250px] resize-none rounded border border-gray-100 p-3 outline-none placeholder:text-gray-200'
          placeholder='내가 먹은 메뉴나 가게 분위기 등을 자유롭게 써주세요'
        ></textarea>
      </div>
      <div>
        <PostFormLabel>추천 메뉴 등록 (최대 5개)</PostFormLabel>
        <div className='h-[50px] rounded border border-gray-100 p-3 body-16'>
          <input
            className='outline-none placeholder:text-gray-200'
            type='text'
            placeholder='메뉴를 등록해보세요'
          ></input>
        </div>
      </div>
    </div>
  );
};
