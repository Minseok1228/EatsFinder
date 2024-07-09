import type { Meta, StoryObj } from '@storybook/react';

import { Hashtag } from './Hashtag';

const meta: Meta<typeof Hashtag> = {
  component: Hashtag,
  title: 'atom/Hashtag',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium'],
      description: '해시태그의 사이즈를 설정합니다.',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'large',
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Hashtag>;

export const Default: Story = {
  args: {
    hashtag: '혼밥하기 좋은',
  },
};

export const Medium: Story = {
  args: {
    hashtag: '혼밥하기 좋은',
    size: 'medium',
  },
};

export const NotSelectedLarge: Story = {
  args: {
    hashtag: '혼밥하기 좋은',
    selected: false,
  },
};

export const NotSelectedMedium: Story = {
  args: {
    hashtag: '혼밥하기 좋은',
    size: 'medium',
    selected: false,
  },
};
