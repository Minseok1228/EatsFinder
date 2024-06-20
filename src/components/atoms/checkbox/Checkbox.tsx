import { InputHTMLAttributes } from 'react';
import {
  CheckBoxCheckedSVG,
  CheckBoxBlankSVG,
} from '@/components/svg/CheckBoxSVG';
import { twMerge } from 'tailwind-merge';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = ({
  name,
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
        <input name={name} className='peer hidden' type='checkbox' {...props} />
        <span className='mr-1 flex cursor-pointer items-center justify-center [&>svg:first-child]:hidden peer-checked:[&>svg:first-child]:block peer-checked:[&>svg:last-child]:hidden'>
          {CheckBoxCheckedSVG()}
          {CheckBoxBlankSVG()}
        </span>
        {label}
        asdfasdfsadf
      </label>
    </>
  );
};
