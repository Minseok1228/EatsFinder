import { Meta, StoryObj } from '@storybook/react';
import { MyFeedCard } from '.';

const meta: Meta<typeof MyFeedCard> = {
  title: 'molecules/MyFeedCard',
  component: MyFeedCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MyFeedCard>;

export const Default: Story = {};
