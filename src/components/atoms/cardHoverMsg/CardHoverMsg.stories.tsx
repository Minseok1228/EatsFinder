import { Meta, StoryObj } from '@storybook/react';
import { CardHoverMsg } from '.';

const meta: Meta<typeof CardHoverMsg> = {
  title: 'atom/CardHoverMsg',
  component: CardHoverMsg,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardHoverMsg>;

export const Default: Story = {};
