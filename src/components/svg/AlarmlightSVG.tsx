import { SVGFilledProps } from '@/types/props';

export const AlarmlightSVG = ({ isFill = true }: SVGFilledProps) => {
  const fillColor = isFill ? '#FB5607' : '#A6A6A6';

  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='5' cy='5' r='5' fill={fillColor} />
    </svg>
  );
};
