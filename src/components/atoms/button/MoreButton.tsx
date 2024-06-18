import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const moreButtonVariants = cva(
  'flex justify-center items-center w-[250px] h-[70px] rounded-[24px] subTitle-20',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-400 text-white hover:bg-primary-200 active:bg-primary-500 disabled:bg-white disabled:text-gray-200',
        white: 'bg-white text-gray-700',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

interface MoreButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof moreButtonVariants> {}

export const MoreButton = ({ variant, ...props }: MoreButtonProps) => {
  return (
    <button className={twMerge(moreButtonVariants({ variant }))} {...props} />
  );
};
