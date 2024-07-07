import type { Meta, StoryObj } from '@storybook/react';

import { PrevButton, NextButton } from './CarouselButton';

const CarouselButton = () => {
  return (
    <div className='flex gap-4'>
      <PrevButton />
      <NextButton />
    </div>
  );
};

const meta: Meta<typeof CarouselButton> = {
  component: CarouselButton,
  title: 'atom/CarouselButton',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CarouselButton>;

export const Default: Story = {
  args: {},
};
