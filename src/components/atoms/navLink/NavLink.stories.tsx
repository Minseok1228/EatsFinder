import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  title: 'atom/NavLink',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    href: '/home',
    children: '홈',
  },
};

export const Active: Story = {
  args: {
    href: '/home',
    children: '홈',
    active: true,
  },
};
