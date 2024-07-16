import Image from 'next/image';
import { customTwMerge } from '@/utils/customTwMerge';
import { DefaultIconSVG } from '@/components/svg/DefaultIconSVG';

interface ProfileImageProps {
  src?: string | null;
  size: 40 | 50 | 60 | 70 | 100;
}

const profileImageSize = {
  40: 'h-[40px] w-[40px]',
  50: 'h-[50px] w-[50px]',
  60: 'h-[60px] w-[60px]',
  70: 'h-[70px] w-[70px]',
  100: 'h-[100px] w-[100px]',
};

export const ProfileImage = ({ src, size }: ProfileImageProps) => {
  if (src)
    return (
      <Image
        className='aspect-square rounded-full object-cover'
        src={src}
        width={size}
        height={size}
        alt='profile image'
      />
    );

  return (
    <div
      className={customTwMerge(
        `cursor-pointer rounded-full [&>svg]:h-full [&>svg]:w-full`,
        profileImageSize[size],
      )}
    >
      {DefaultIconSVG()}
    </div>
  );
};
