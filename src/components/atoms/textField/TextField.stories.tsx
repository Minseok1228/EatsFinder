import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

const meta: Meta<typeof TextField> = {
  title: 'atom/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
