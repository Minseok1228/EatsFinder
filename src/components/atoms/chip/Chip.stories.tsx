import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'atom/Chip',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {},
};

export const OnlyText: Story = {
  args: { text: '텍스트' },
};

export const TextWithEmoji: Story = {
  args: {
    text: '텍스트',
    emoji: '🚙',
  },
};
