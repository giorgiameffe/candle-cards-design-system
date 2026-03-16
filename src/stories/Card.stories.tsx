import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
    // Posizione del componente nella sidebar di Storybook
    title: "Components/Molecules/Card",
    // Componente associato alla storia
    component: Card,
    parameters: {
        // Centra il componente nella preview
        layout: 'centered',
    },
    // Abilita la generazione automatica della documentazione
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

    render: () => <Card />
}