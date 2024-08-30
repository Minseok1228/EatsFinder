import { SVGCheckProps } from '@/types/props';

export const CheckSVG = ({
  size = 'large',
  color = 'default',
}: SVGCheckProps) => {
  const { SVGSize, pathData } = (() => {
    switch (size) {
      case 'large': {
        const SVGSize = 20;
        const pathData =
          'M7.55156 16.5143L1.85156 10.8143L3.27656 9.38926L7.55156 13.6643L16.7266 4.48926L18.1516 5.91426L7.55156 16.5143Z';
        return { SVGSize, pathData };
      }
      case 'regular':
      default: {
        const SVGSize = 20;
        const pathData =
          'M7.16251 13.5L2.88751 9.22495L3.95626 8.1562L7.16251 11.3625L14.0438 4.4812L15.1125 5.54995L7.16251 13.5Z';
        return { SVGSize, pathData };
      }
    }
  })();
  const fillColor = (() => {
    switch (color) {
      case 'green':
        return '#03C75A';
      case 'orange':
        return '#FB5607';
      case 'default':
      default:
        return '#A6A6A6';
    }
  })();
  return (
    <svg
      width={`${SVGSize}`}
      height={`${SVGSize}`}
      viewBox={`0 0 ${SVGSize} ${SVGSize}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={pathData} fill={fillColor} />
    </svg>
  );
};
