import { Meta, StoryObj } from '@storybook/react';
import { UserTimeline } from '.';

const meta: Meta<typeof UserTimeline> = {
  title: 'atom/UserTimeline',
  component: UserTimeline,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof UserTimeline>;

export const Default: Story = {};
