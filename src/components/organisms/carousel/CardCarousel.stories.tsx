import type { Meta, StoryObj } from '@storybook/react';

import { CardCarousel } from './CardCarousel';

const meta: Meta<typeof CardCarousel> = {
  component: CardCarousel,
  title: 'organism/CardCarousel',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CardCarousel>;

export const Example: Story = {
  args: {
    data: new Array(23).fill(0),
  },
};
