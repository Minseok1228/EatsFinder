import type { Meta, StoryObj } from '@storybook/react';

import { ModalHeader } from './ModalHeader';

const meta: Meta<typeof ModalHeader> = {
  component: ModalHeader,
  title: 'molecule/ModalHeader',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Default: Story = {
  args: {},
};
