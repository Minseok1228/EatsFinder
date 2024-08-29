import { SVGFilledProps } from '@/types/props';

export const BookmarkSVG = ({ isFill = true }: SVGFilledProps) => {
  const { pathData, fillColor } = isFill
    ? {
        pathData:
          'M5 5V21L12 18L19 21V5C19 4.45 18.8042 3.97917 18.4125 3.5875C18.0208 3.19583 17.55 3 17 3H7C6.45 3 5.97917 3.19583 5.5875 3.5875C5.19583 3.97917 5 4.45 5 5Z',
        fillColor: '#FB5607',
      }
    : {
        pathData:
          'M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z',
        fillColor: '#D9D9D9',
      };

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={pathData} fill={fillColor} />
    </svg>
  );
};
