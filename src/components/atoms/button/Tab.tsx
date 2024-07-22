import { customTwMerge } from '@/utils/customTwMerge';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';
const tabVariants = cva('flex justify-center  px-[10px] py-[5px]', {
  variants: {
    active: {
      true: 'text-gray-800 title-28 border-b-4 border-gray-800',
      false: 'subTitle-28 text-gray-300',
    },
  },
  defaultVariants: {
    active: false,
  },
});
interface TabProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabVariants> {}
export const Tab = ({ active, className, ...props }: TabProps) => {
  return (
    <button
      className={customTwMerge(tabVariants({ active, className }))}
      {...props}
    />
  );
};
