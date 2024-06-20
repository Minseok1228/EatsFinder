import React, { InputHTMLAttributes } from 'react';
import {
  CheckBoxCheckedSVG,
  CheckBoxBlankSVG,
} from '@/components/svg/CheckBoxSVG';
import {
  BookmarkDefaultSVG,
  BookmarkFillSVG,
} from '@/components/svg/BookmarkSVG';
import { FavDefaultSVG, FavFillSVG } from '@/components/svg/FavSVG';
import { twMerge } from 'tailwind-merge';

const icon = {
  default: [CheckBoxCheckedSVG(), CheckBoxBlankSVG()],
  bookmark: [BookmarkFillSVG(), BookmarkDefaultSVG()],
  fav: [FavFillSVG(), FavDefaultSVG()],
};

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: keyof typeof icon;
}

export const Checkbox = ({
  variant = 'default',
  label,
  className,
  ...props
}: CheckBoxProps) => {
  return (
    <>
      <label
        className={twMerge(
          'inline-flex items-center text-gray-700 body-14',
          className,
        )}
      >
        <input className='peer hidden' type='checkbox' {...props} />
        <span className='mr-1 flex cursor-pointer items-center justify-center [&>svg:first-child]:hidden peer-checked:[&>svg:first-child]:block peer-checked:[&>svg:last-child]:hidden'>
          {icon[variant].map((it, idx) => (
            <React.Fragment key={idx}>{it}</React.Fragment>
          ))}
        </span>
        {label}
      </label>
    </>
  );
};
