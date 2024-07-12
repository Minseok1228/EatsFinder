'use client';
import { useState } from 'react';
import Image from 'next/image';
import { NextButton, PrevButton } from '@/components/atoms';
import { customTwMerge } from '@/utils/customTwMerge';

const example = [
  {
    src: 'https://images.unsplash.com/photo-1695221087406-257eca10a2e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '0',
  },
  {
    src: 'https://images.unsplash.com/photo-1720623606537-05c9fd614192?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '1',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1719955774018-5cf1d8a19d1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '2',
  },
  {
    src: 'https://images.unsplash.com/photo-1720692393334-c2301df7e0c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3',
  },
  {
    src: 'https://images.unsplash.com/photo-1720649718712-dff5514d5534?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '4',
  },
];

const Dot = ({ active, onClick }: { active: boolean; onClick: () => void }) => {
  return (
    <div
      className={customTwMerge(
        'h-[10px] w-[10px] cursor-pointer rounded-full bg-gray-300',
        active && 'bg-primary-400',
      )}
      onClick={onClick}
    />
  );
};

export const ImageCarousel = ({ images = example }) => {
  const [curIndex, setCurIndex] = useState(0);

  const handleNextClick = () => {
    setCurIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurIndex(index);
  };

  return (
    <div className='h-80 w-80'>
      <div className='relative h-full w-full'>
        <div className='absolute right-1/2 top-6 z-50 flex translate-x-1/2 gap-6'>
          {images.map((it, idx) => (
            <Dot
              key={it.alt}
              active={idx === curIndex}
              onClick={() => {
                handleDotClick(idx);
              }}
            />
          ))}
        </div>
        <div className='h-full w-full overflow-hidden'>
          <div
            className='flex h-full w-full transition-transform duration-500'
            style={{ transform: `translate3d(${-curIndex * 100}%, 0, 0)` }}
          >
            {images.map((it) => (
              <div className='relative h-full w-full shrink-0' key={it.alt}>
                <Image
                  className='object-cover'
                  src={it.src}
                  alt={it.alt}
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className={customTwMerge('absolute left-6 top-1/2 -translate-y-1/2')}
        >
          <PrevButton onClick={handlePrevClick} />
        </div>
        <div
          className={customTwMerge('absolute right-6 top-1/2 -translate-y-1/2')}
        >
          <NextButton onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};
