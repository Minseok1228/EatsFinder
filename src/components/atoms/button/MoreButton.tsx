import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface MoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

export const MoreButton = ({ selected, ...props }: MoreButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex h-[70px] w-[250px] items-center justify-center rounded-[24px] text-gray-700 subTitle-20',
        'hover:bg-primary-200 hover:text-white',
        'active:bg-primary-500 active:text-white',
        'disabled:bg-white disabled:text-gray-200',
        selected && 'bg-primary-400 text-white',
      )}
      {...props}
    />
  );
};
