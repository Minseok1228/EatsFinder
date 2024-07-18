import React, { InputHTMLAttributes, forwardRef } from 'react';
import {
  CheckBoxCheckedSVG,
  CheckBoxBlankSVG,
} from '@/components/svg/CheckBoxSVG';
import {
  BookmarkDefaultSVG,
  BookmarkFillSVG,
} from '@/components/svg/BookmarkSVG';
import { FavDefaultSVG, FavFillSVG } from '@/components/svg/FavSVG';
import { customTwMerge } from '@/utils/customTwMerge';

const icon = {
  checkbox: [CheckBoxCheckedSVG(), CheckBoxBlankSVG()],
  bookmark: [BookmarkFillSVG(), BookmarkDefaultSVG()],
  fav: [FavFillSVG(), FavDefaultSVG()],
};

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: keyof typeof icon;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function checkbox({ variant = 'checkbox', label, className, ...props }, ref) {
    return (
      <>
        <label className={customTwMerge('text-gray-700 body-14', className)}>
          <input
            ref={ref}
            className='peer visually-hidden'
            type='checkbox'
            {...props}
          />
          <span className='flex cursor-pointer rounded-md peer-focus-visible:outline peer-focus-visible:outline-2 [&>svg:first-child]:hidden peer-checked:[&>svg:first-child]:block peer-checked:[&>svg:last-of-type]:hidden'>
            {icon[variant].map((it, idx) => (
              <React.Fragment key={idx}>{it}</React.Fragment>
            ))}
            <span className={customTwMerge('ml-1', label || 'visually-hidden')}>
              {label || variant}
            </span>
          </span>
        </label>
      </>
    );
  },
);
