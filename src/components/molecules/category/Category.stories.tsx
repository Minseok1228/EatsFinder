import type { Meta, StoryObj } from '@storybook/react';

import { Category } from './Category';

const meta: Meta<typeof Category> = {
  component: Category,
  title: 'molecule/Category',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {},
};
