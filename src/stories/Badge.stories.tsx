import type { Meta, StoryObj } from '@storybook/react-vite';

// Importazione Componente Badge
import { Badge } from "../components/Badge/Badge"

// Configurazione della storia del componente
const meta: Meta<typeof Badge> = {

  // Posizione del componente nella sidebar di Storybook
  title: 'Components/Atoms/Badge',
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
      options: ['floral', 'sweet', 'citrus', 'new', 'discount', 'soldOut'],
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

// Storia che mostra tutte le varianti del badge contemporaneamente
export const AllBadges: Story = {

  render: () => (

    <div className='badge-group'>
      <Badge variant="floral" label="floreale" />
      <Badge variant="citrus" label="agrumata" />
      <Badge variant="sweet" label="dolce" />
      <Badge variant="new" label="novità" />
      <Badge variant="discount" label="- 20%" />
      <Badge variant="soldOut" label="sold out" />
    </div>
  ),
};

// Storia del badge con variante "relax"
export const FloralBadge: Story = {
  args: {
    label: "floreale",
    ariaLabel: "Floral Badge",
    variant: "floral",
  },
};

// Storia del badge con variante "energy"
export const CitrusBadge: Story = {
  args: {
    label: "agrumata",
    ariaLabel: "Citrus Badge",
    variant: "citrus",
  },
};

// Storia del badge con variante "comfort"
export const SweetBadge: Story = {
  args: {
    label: "dolce",
    ariaLabel: "Sweet Badge",
    variant: "sweet",
  },
};

// Storia del badge con variante "new"
export const NewBadge: Story = {
  args: {
    label: "novità",
    ariaLabel: "New Badge",
    variant: "new",
  },
};

// Storia del badge con variante "discount"
export const DiscountBadge: Story = {
  args: {
    label: "- 20%",
    ariaLabel: "Discount Badge",
    variant: "discount",
  },
};

// Storia del badge con variante "soldOut"
export const SoldOutBadge: Story = {
  args: {
    label: "sold out",
    ariaLabel: "Sold Out Badge",
    variant: "soldOut",
  },
};