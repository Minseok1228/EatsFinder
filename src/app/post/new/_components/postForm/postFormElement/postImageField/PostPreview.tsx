'use client';
import Image from 'next/image';
import { customTwMerge } from '@/utils/customTwMerge';
import { CloseSVG } from '@/components/svg/CloseSVG';

export const PostPreview = ({
  src,
  isMainImg,
  onImageRemove,
  onMainImgChange,
}: {
  src: string;
  isMainImg: boolean;
  onImageRemove: () => void;
  onMainImgChange: () => void;
}) => {
  return (
    <div className='relative h-[250px] w-[250px] overflow-hidden rounded-3xl'>
      <Image src={src} fill alt='preview' />
      <div
        className={customTwMerge(
          'absolute left-6 top-6 flex h-[26px] w-[50px] cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-300 subTitle-14',
          isMainImg && 'bg-primary-400 text-white',
        )}
        onClick={() => onMainImgChange()}
      >
        대표
      </div>
      <div
        className='absolute right-6 top-6 cursor-pointer'
        onClick={onImageRemove}
      >
        <CloseSVG />
      </div>
    </div>
  );
};
