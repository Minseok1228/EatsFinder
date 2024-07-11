import type { Meta, StoryObj } from '@storybook/react';

import { ProfileImage } from './ProfileImage';

const meta: Meta<typeof ProfileImage> = {
  component: ProfileImage,
  title: 'atom/ProfileImage',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {
  args: {
    size: 50,
  },
};
