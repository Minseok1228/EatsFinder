import { Meta, StoryObj } from '@storybook/react';

import { MoreButton } from './MoreButton';

const meta: Meta<typeof MoreButton> = {
  title: 'atom/MoreButton',
  component: MoreButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MoreButton>;

export const Default: Story = {
  args: {
    children: 'button',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    children: 'button',
    selected: true,
  },
};
