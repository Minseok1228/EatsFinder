'use client';
import { useState } from 'react';
import { RatingstarSVG } from '@/components/svg/RatingstarSVG';
import { customTwMerge } from '@/utils/customTwMerge';

export const Rating = ({
  number,
  rating,
  onClick,
}: {
  number: number;
  rating: number;
  onClick: () => void;
}) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);

  return (
    <div className='flex'>
      {Array.from({ length: number }).map((_, idx) => {
        return (
          <label
            key={idx}
            className='cursor-pointer'
            onMouseOver={() => setHoverValue(idx)}
            onMouseOut={() => setHoverValue(null)}
          >
            <input
              type='radio'
              className='sr-only'
              onClick={onClick}
              aria-label='rating'
            />
            <span
              className={customTwMerge(
                'fill-gray-300',
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
