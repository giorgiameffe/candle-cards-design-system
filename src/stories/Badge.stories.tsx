import type { Meta, StoryObj } from '@storybook/react-vite';

// Componente da documentare in Storybook
import { Badge } from "../components/Badge"

// Configurazione della storia del componente
const meta: Meta<typeof Badge> = {

  // Posizione del componente nella sidebar di Storybook
  title: 'Atoms/Badge',
  // Componente associato alla storia
  component: Badge,
  parameters: {
    // Centra il componente nella preview
    layout: 'centered',
  },
  // Abilita la generazione automatica della documentazione
  tags: ['autodocs'],
  // Configurazione dei controlli delle props
  argTypes: {
    variant: {
      control: 'select', // selezione da menu
      options: ['relax', 'energy', 'comfort', 'new', 'discount', 'soldOut'],
      description: 'Determina lo stile cromatico del badge'
    },
    label: {
      control: 'text', // input di testo
      description: 'Testo visualizzato nel badge'
    },
    ariaLabel: {
      control: 'text', // testo per accessibilità
      description: 'Testo per gli screen reader'
    }
  },
};

export default meta;

// Tipo per definire le storie
type Story = StoryObj<typeof meta>;

// Storia del badge con variante "relax"
export const RelaxBadge: Story = {
  args: {
    label: "relax",
    ariaLabel: "Relax Badge",
    variant: "relax",
  },
};

// Storia del badge con variante "energy"
export const EnergyBadge: Story = {
  args: {
    label: "energia",
    ariaLabel: "Energy Badge",
    variant: "energy",
  },
};

// Storia del badge con variante "comfort"
export const ComfortBadge: Story = {
  args: {
    label: "comfort",
    ariaLabel: "Comfort Badge",
    variant: "comfort",
  },
};