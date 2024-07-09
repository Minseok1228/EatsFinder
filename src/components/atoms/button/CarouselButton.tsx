import { ButtonHTMLAttributes } from 'react';
import { RightSVG, LeftSVG } from '@/components/svg/ArrowSVG';
import { customTwMerge } from '@/utils/customTwMerge';

export const NextButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={customTwMerge(
        'flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)]',
        className,
      )}
      type='button'
      aria-label='next slide'
      {...props}
    >
      <div className='fill-primary-400 align-middle [&>svg]:h-10 [&>svg]:w-10'>
        <RightSVG />
      </div>
    </button>
  );
};

export const PrevButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={customTwMerge(
        'flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)]',
        className,
      )}
      type='button'
      aria-label='prev slide'
      {...props}
    >
      <div className='fill-primary-400 [&>svg]:h-10 [&>svg]:w-10'>
        <LeftSVG />
      </div>
    </button>
  );
};
