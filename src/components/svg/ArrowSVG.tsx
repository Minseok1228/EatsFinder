import { SVGArrowProps } from '@/types/props';

export const ArrowSVG = ({ direction, color }: SVGArrowProps) => {
  const pathData = (() => {
    switch (direction) {
      case 'down':
        return 'M11.7197 15.781L4.21969 8.28104C4.15001 8.21136 4.09473 8.12863 4.05702 8.03759C4.01931 7.94654 3.9999 7.84896 3.9999 7.75042C3.9999 7.65187 4.01931 7.55429 4.05702 7.46324C4.09473 7.3722 4.15001 7.28947 4.21969 7.21979C4.28937 7.15011 4.3721 7.09483 4.46314 7.05712C4.55419 7.01941 4.65177 7 4.75031 7C4.84886 7 4.94644 7.01941 5.03749 7.05712C5.12853 7.09483 5.21126 7.15011 5.28094 7.21979L12.2503 14.1901L19.2197 7.21979C19.3604 7.07906 19.5513 7 19.7503 7C19.9493 7 20.1402 7.07906 20.2809 7.21979C20.4217 7.36052 20.5007 7.55139 20.5007 7.75042C20.5007 7.94944 20.4217 8.14031 20.2809 8.28104L12.7809 15.781C12.7113 15.8508 12.6286 15.9061 12.5375 15.9438C12.4465 15.9816 12.3489 16.001 12.2503 16.001C12.1518 16.001 12.0542 15.9816 11.9631 15.9438C11.8721 15.9061 11.7893 15.8508 11.7197 15.781Z';

      case 'left':
        return 'M8.21896 12.2803L15.719 19.7803C15.7886 19.85 15.8714 19.9053 15.9624 19.943C16.0535 19.9807 16.151 20.0001 16.2496 20.0001C16.3481 20.0001 16.4457 19.9807 16.5368 19.943C16.6278 19.9053 16.7105 19.85 16.7802 19.7803C16.8499 19.7106 16.9052 19.6279 16.9429 19.5369C16.9806 19.4458 17 19.3482 17 19.2497C17 19.1511 16.9806 19.0536 16.9429 18.9625C16.9052 18.8715 16.8499 18.7887 16.7802 18.7191L9.8099 11.7497L16.7802 4.78031C16.9209 4.63958 17 4.44871 17 4.24968C17 4.05066 16.9209 3.85979 16.7802 3.71906C16.6395 3.57833 16.4486 3.49927 16.2496 3.49927C16.0506 3.49927 15.8597 3.57833 15.719 3.71906L8.21896 11.2191C8.14923 11.2887 8.09391 11.3714 8.05616 11.4625C8.01842 11.5535 7.99899 11.6511 7.99899 11.7497C7.99899 11.8482 8.01842 11.9458 8.05616 12.0369C8.09391 12.1279 8.14923 12.2107 8.21896 12.2803Z';

      case 'right':
        return 'M15.781 12.2803L8.28104 19.7803C8.21136 19.85 8.12863 19.9053 8.03759 19.943C7.94654 19.9807 7.84896 20.0001 7.75042 20.0001C7.65187 20.0001 7.55429 19.9807 7.46324 19.943C7.3722 19.9053 7.28947 19.85 7.21979 19.7803C7.15011 19.7106 7.09483 19.6279 7.05712 19.5369C7.01941 19.4458 7 19.3482 7 19.2497C7 19.1511 7.01941 19.0536 7.05712 18.9625C7.09483 18.8715 7.15011 18.7887 7.21979 18.7191L14.1901 11.7497L7.21979 4.78031C7.07906 4.63958 7 4.44871 7 4.24968C7 4.05066 7.07906 3.85979 7.21979 3.71906C7.36052 3.57833 7.55139 3.49927 7.75042 3.49927C7.94944 3.49927 8.14031 3.57833 8.28104 3.71906L15.781 11.2191C15.8508 11.2887 15.9061 11.3714 15.9438 11.4625C15.9816 11.5535 16.001 11.6511 16.001 11.7497C16.001 11.8482 15.9816 11.9458 15.9438 12.0369C15.9061 12.1279 15.8508 12.2107 15.781 12.2803Z';
      default:
        return '';
    }
  })();
  const fillColor = (() => {
    switch (color) {
      case 'orange':
        return '#FB5607';
      default:
        return '#262626';
    }
  })();
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
