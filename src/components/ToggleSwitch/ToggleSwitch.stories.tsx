import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
    title: 'UI/ToggleSwitch',
    component: ToggleSwitch,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
        color: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'success',
                'error',
                'info',
                'warning',
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Off: Story = {
  args: {
    label: 'Notificaciones',
    defaultChecked: false,
    color: 'primary',
  },
};

export const On: Story = {
  args: {
    label: 'Modo Oscuro',
    defaultChecked: true,
    color: 'primary',
  },
};

export const SinLabel: Story = {
  args: {
    label: '',
    defaultChecked: true,
    color: 'primary',
  },
};
