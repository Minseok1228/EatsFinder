import Image, { StaticImageData } from 'next/image';

interface CategoryImgProps {
  src: StaticImageData;
  alt: string;
}

export const CategoryImg = ({ src, alt }: CategoryImgProps) => {
  return <Image src={src} alt={alt} />;
};
