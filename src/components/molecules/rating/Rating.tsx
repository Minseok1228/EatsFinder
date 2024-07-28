'use client';
import { useState } from 'react';
import { RatingstarSVG } from '@/components/svg/RatingstarSVG';
import { customTwMerge } from '@/utils/customTwMerge';

interface RatingProps {
  number: number;
  rating: number;
  onClick: (value: number) => void;
}

export const Rating = ({ number, rating, onClick }: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);

  return (
    <div className='flex gap-3' onMouseLeave={() => setHoverValue(null)}>
      {Array.from({ length: number }).map((_, idx) => {
        return (
          <label
            key={idx}
            className='cursor-pointer'
            onMouseEnter={() => setHoverValue(idx)}
          >
            <input
              type='radio'
              className='sr-only'
              onClick={() => onClick(idx + 1)}
              aria-label='rating'
            />
            <span
              className={customTwMerge(
                'fill-gray-300 [&>svg]:h-10 [&>svg]:w-10',
                (hoverValue !== null ? hoverValue >= idx : rating > idx) &&
                  'fill-primary-400',
              )}
            >
              <RatingstarSVG />
            </span>
          </label>
        );
      })}
    </div>
  );
};
