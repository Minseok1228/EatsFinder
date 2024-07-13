import type { Meta, StoryObj } from '@storybook/react';
import { CATEGORY_IMAGES } from '@/constants/categoryImages';

import { CategoryImage } from './CategoryImage';

const meta: Meta<typeof CategoryImage> = {
  component: CategoryImage,
  title: 'atom/CategoryImage',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CategoryImage>;

export const Default: Story = {
  args: {
    src: CATEGORY_IMAGES[0].src,
    alt: CATEGORY_IMAGES[0].alt,
    label: CATEGORY_IMAGES[0].label,
  },
};
