import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from "../components/Badge"

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['relax', 'energy', 'comfort', 'new', 'discount', 'soldOut'],
      description: 'Determina lo stile cromatico del badge'
    },
    label: {
      control: 'text',
      description: 'Il testo visualizzato nel badge'
    },
    ariaLabel: {
      control: 'text',
      description: 'Testo per gli screen reader'
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RelaxBadge: Story = {
  args: {
    label: "Relax",
    ariaLabel: "Relax Badge",
    variant: "relax",
  },
};