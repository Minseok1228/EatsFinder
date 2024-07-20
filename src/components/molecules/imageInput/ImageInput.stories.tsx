import type { Meta, StoryObj } from '@storybook/react';

import { ImageInput } from './ImageInput';

const meta: Meta<typeof ImageInput> = {
  component: ImageInput,
  title: 'ImageInput',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {},
};
