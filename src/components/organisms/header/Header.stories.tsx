import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'organism/Header',
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const AuthHeader: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/login',
      },
    },
  },
};
