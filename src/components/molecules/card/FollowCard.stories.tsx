import type { Meta, StoryObj } from '@storybook/react';

import { FollowCard } from './FollowCard';

const meta: Meta<typeof FollowCard> = {
  component: FollowCard,
  title: 'molecule/FollowCard',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FollowCard>;

export const Default: Story = {
  args: {},
};
