import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'stroke', 'grayStroke', 'gray', 'error'],
      description: '버튼의 종류',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['mini', 'small', 'medium', 'large'],
      description: '버튼의 사이즈',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Stroke: Story = {
  args: {
    children: 'button',
    variant: 'stroke',
  },
};

export const GrayStroke: Story = {
  args: {
    children: 'button',
    variant: 'grayStroke',
  },
};

export const Gray: Story = {
  args: {
    children: 'button',
    variant: 'gray',
  },
};
