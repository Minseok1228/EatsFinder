import { Meta, StoryObj } from '@storybook/react';
import { OptionButton } from './OptionButton';

const meta: Meta<typeof OptionButton> = {
  title: 'atom/OptionButton',
  component: OptionButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof OptionButton>;

export const Default: Story = {};
