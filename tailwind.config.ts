import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        25: '#FFF8F5',
        50: '#FEE0D2',
        100: '#FDBEA0',
        200: '#FD9C6D',
        300: '#FC7A3B',
        400: '#FB5607',
        500: '#CE4503',
        600: '#9C3403',
        700: '#692302',
        800: '#371201',
        900: '#050200',
      },
      gray: {
        50: '#F2F2F2',
        100: '#D9D9D9',
        200: '#BFBFBF',
        300: '#A6A6A6',
        400: '#8C8C8C',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#0D0D0D',
      },
      red: '#E62900',
      green: '#03C75A',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          body: (value) => ({
            fontSize: value,
            lineHeight: '150%',
            fontWeight: theme('fontWeight.normal'),
          }),
          subTitle: (value) => ({
            fontSize: value,
            lineHeight: '135%',
            fontWeight: theme('fontWeight.semibold'),
          }),
          title: (value) => ({
            fontSize: value,
            lineHeight: '135%',
            fontWeight: theme('fontWeight.extrabold'),
          }),
        },
        {
          values: {
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            20: '20px',
            22: '22px',
            24: '24px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            34: '34px',
            36: '36px',
            38: '38px',
            40: '40px',
          },
        },
      );
    }),
  ],
};
export default config;
