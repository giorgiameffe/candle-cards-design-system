import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "../components/Card/Card";
import lavanderCandle from "../assets/img/candle-lavanda.jpg";

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

export const LavanderDefault: Story = {
    args: {
        image: lavanderCandle,
        title: "Lavanda di Provenza",
        description: "Olio essenziale purissimo per conciliare il relax e il riposo notturno.",
        price: "14,90 €",
        category: "floral"
    }
}