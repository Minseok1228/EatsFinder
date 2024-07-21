import { ButtonProps } from '@/types/props';

export const OptionButton = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='h-[70px] w-40 text-gray-700 subTitle-20 hover:bg-primary-100'
    />
  );
};
