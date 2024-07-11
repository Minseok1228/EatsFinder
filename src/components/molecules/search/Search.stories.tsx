import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './Search';

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'molecule/Search',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['large', 'small'],
      description: 'search의 사이즈',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: { variant: 'large', placeholder: '검색어를 입력하세요.' },
};
