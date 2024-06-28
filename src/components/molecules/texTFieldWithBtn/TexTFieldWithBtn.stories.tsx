import { Meta, StoryObj } from '@storybook/react';
import { TextFieldWithBtn } from '.';

const meta: Meta<typeof TextFieldWithBtn> = {
  title: 'molecule/TextFieldWithBtn',
  component: TextFieldWithBtn,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TextFieldWithBtn>;

export const Default: Story = {};
