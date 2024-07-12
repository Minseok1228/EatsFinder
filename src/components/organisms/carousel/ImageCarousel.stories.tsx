import type { Meta, StoryObj } from '@storybook/react';

import { ImageCarousel } from './ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
  component: ImageCarousel,
  title: 'organism/ImageCarousel',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {
  args: {},
};
