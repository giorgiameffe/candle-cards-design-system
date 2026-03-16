import type { Meta, StoryObj } from "@storybook/react-vite";

// Importazione Componente Button
import { Button } from "../components/Button/Button";

// Configurazione della storia del componente
const meta: Meta<typeof Button> = {

    // Posizione del componente nella sidebar di Storybook
    title: "Components/Atoms/Button",
    // Componente associato alla storia
    component: Button,
    parameters: {
        // Centra il componente nella preview
        layout: 'centered',
    },
    // Abilita la generazione automatica della documentazione
    tags: ['autodocs'],
    argTypes: {
        // Menu a tendina per le taglie
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'Definisce la dimensione del bottone',
        },
        // Switch on/off per lo stato disabilitato
        disabled: {
            control: 'boolean',
            description: 'Disabilita il bottone e cambia il testo in "Non disponibile"',
        },
        label: {
            control: 'text',
            description: 'Il testo visualizzato all\'interno del bottone',
        },
        // Nasconde o configura l'evento onClick nei log di Storybook
        onClick: { action: 'clicked' },
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

// Storia con il gruppo di bottoni nelle varie grandezze
export const AllButtons: Story = {

    render: () => (

        <div className='btn-group'>
            <Button size="small" label="Aggiungi al carrello" />
            <Button size="medium" label="Aggiungi al carrello" />
            <Button size="large" label="Aggiungi al carrello" />
        </div>
    ),
}

// Storia del bottone Default "Aggiungi al carrello"
export const DefaultButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        disabled: false,
        size: "medium"
    }
}

// Storia del bottone Small
export const SmallButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        disabled: false,
        size: "small"
    }
}

// Storia del bottone Large
export const LargeButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        disabled: false,
        size: "large"
    }
}

// Storia del bottone Out of Stock
export const OutOfStockButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        disabled: true,
        size: "medium"
    }
}