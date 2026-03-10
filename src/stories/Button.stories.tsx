import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {

    // Posizione del componente nella sidebar di Storybook
    title: "Components/Atoms/Button",
    // Componente associato alla storia
    component: Button,
    parameters: {
        // Centra il componente nella preview
        layout: 'centered',
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

// Storia del bottone Default "Aggiungi al carrello"
export const DefaultButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        disabled: false,
        size: "medium"
    }
}

// Storia del bottone Out of Stock
export const OutOfStockButton: Story = {
    args: {
        label: "Non disponibile",
        disabled: true,
        size: "medium"
    }
}

// Storia del bottone Small
export const SmallButton: Story = {
    args: {
        label: "Small",
        disabled: false,
        size: "small"
    }
}

// Storia del bottone Large
export const LargeButton: Story = {
    args: {
        label: "Large",
        disabled: false,
        size: "large"
    }
}