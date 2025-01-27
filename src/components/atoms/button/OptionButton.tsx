import { ButtonProps } from '@/types/props';
import { twMerge } from 'tailwind-merge';

export const OptionButton = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'h-[70px] w-40 text-gray-700 subTitle-20 hover:bg-primary-200 hover:text-white active:bg-primary-500 active:text-white',
        props.className,
      )}
    />
  );
};
