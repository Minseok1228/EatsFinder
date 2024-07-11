import type { Meta, StoryObj } from '@storybook/react';

import { CategoryImg } from './CategoryImg';
import koreanImg from '@/assets/images/korean.png';

const meta: Meta<typeof CategoryImg> = {
  component: CategoryImg,
  title: 'atom/CategoryImg',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CategoryImg>;

export const Default: Story = {
  args: {
    src: koreanImg,
    alt: 'korean',
  },
};
