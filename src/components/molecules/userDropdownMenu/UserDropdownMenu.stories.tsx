import { Meta, StoryObj } from '@storybook/react';
import { UserDropdownMenu } from './UserDropdownMenu';

const meta: Meta<typeof UserDropdownMenu> = {
  title: 'molecules/UserDropdownMenu',
  component: UserDropdownMenu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof UserDropdownMenu>;

export const Default: Story = {};
