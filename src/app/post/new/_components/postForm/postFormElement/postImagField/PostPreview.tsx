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
    <div className='relative h-[250px] w-[250px] rounded-3xl'>
      <Image src={src} fill alt='preview' />
      <div
        className={customTwMerge(
          'subTitle-10 absolute left-6 top-6 flex h-[18px] w-[34px] cursor-pointer items-center justify-center rounded-lg bg-gray-100 text-gray-300',
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
