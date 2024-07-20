import { HTMLAttributes } from 'react';
import { AddDefaultSVG } from '@/components/svg/AddSVG';

interface ImageInputProps extends HTMLAttributes<HTMLInputElement> {}

export const ImageInput = ({ ...props }: ImageInputProps) => {
  return (
    <label className='block h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-3xl border border-dashed border-primary-400'>
      <div className='flex h-full w-full items-center justify-center fill-primary-400 [&>svg]:h-12 [&>svg]:w-12'>
        <AddDefaultSVG />
      </div>
      <input
        className='sr-only'
        type='file'
        accept='image/png, image/jpeg'
        multiple
        aria-label='upload images'
        {...props}
      />
    </label>
  );
};
