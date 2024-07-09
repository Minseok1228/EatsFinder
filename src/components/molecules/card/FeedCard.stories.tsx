import type { Meta, StoryObj } from '@storybook/react';

import { FeedCard } from './FeedCard';

const meta: Meta<typeof FeedCard> = {
  component: FeedCard,
  title: 'molecule/FeedCard',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FeedCard>;

export const Default: Story = {
  args: {},
};
