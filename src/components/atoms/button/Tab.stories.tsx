import { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'atom/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    active: {
      control: 'radio',
      options: ['true', 'false'],
      description: '탭 활성화 유무',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Active: Story = {
  args: {
    children: 'tab',
    active: true,
  },
};

export const InActive: Story = {
  args: {
    children: 'tab',
    active: false,
  },
};
