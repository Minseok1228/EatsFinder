'use client';
import { CardHoverMsg } from '@/components/atoms/cardHoverMsg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const MyFeedCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className='relative h-[408px] w-[250px]'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        className='rounded-3xl object-cover'
        src='https://images.unsplash.com/photo-1719861032503-225fac307c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
        fill={true}
        alt='my feed card'
        priority={true}
        sizes='(max-width: 250px) 100vw, 250px'
      />
      {isHover && <CardHoverMsg />}
    </div>
  );
};
