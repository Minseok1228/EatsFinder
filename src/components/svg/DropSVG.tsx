import { SVGUpDownProps } from '@/types/props';

export const DropSVG = ({ isUp = true }: SVGUpDownProps) => {
  const pathData = isUp ? 'M7 14L12 9L17 14H7Z' : 'M12 15L7 10H17L12 15Z';
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={pathData} fill='#5F6368' />
    </svg>
  );
};
