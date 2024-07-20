import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ModalFooter } from './ModalFooter';

const meta: Meta<typeof ModalFooter> = {
  component: ModalFooter,
  title: 'molecule/ModalFooter',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ModalFooter>;

export const Default: Story = {
  args: {
    mainButton: '확인',
    subButton: '취소',
    onMainClick: fn(),
    onSubClick: fn()
  },
};

export const OnlyMainButton: Story = {
  args: { mainButton: '확인', onMainClick: fn() },
};
