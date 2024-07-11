import Image, { StaticImageData } from 'next/image';

interface CategoryImageProps {
  src: StaticImageData;
  alt: string;
  label: string;
}

export const CategoryImage = ({ src, alt, label }: CategoryImageProps) => {
  return (
    <div className='relative h-[135px] w-[135px] shrink-0 overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        className='aspect-square rounded-full object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center overflow-hidden rounded-full text-gray-50 backdrop-brightness-50 subTitle-20'>
        {label}
      </div>
    </div>
  );
};
