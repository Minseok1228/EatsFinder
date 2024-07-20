import { ButtonHTMLAttributes, ComponentProps } from 'react';

interface OptionButton extends ComponentProps<'button'> {}

export const OptionButton = ({ ...props }: OptionButton) => {
  return (
    <button
      {...props}
      className='h-[70px] w-40 text-gray-700 subTitle-20 hover:bg-primary-100'
    />
  );
};
