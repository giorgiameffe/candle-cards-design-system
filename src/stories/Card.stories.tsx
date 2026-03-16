import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "../components/Card/Card";

import lavanderCandle from "../assets/img/candle-lavanda.jpg";
import orangeCandle from "../assets/img/candle-arancia.png";
import vanillaCandle from "../assets/img/candle-vaniglia.png";

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

export const LavanderDefaultCard: Story = {
    args: {
        image: lavanderCandle,
        title: "Lavanda di Provenza",
        description: "Olio essenziale purissimo per conciliare il relax e il riposo notturno.",
        price: "14,90 €",
        category: "floral",
        categoryLabel: "floreale"
    }
}

export const OrangeDefaultCard: Story = {
    args: {
        image: orangeCandle,
        title: "Agrumi di Sicilia",
        description: "Una sferzata di energia pura con note vivaci di arancia amara e bergamotto.",
        price: "13,90 €",
        category: "citrus",
        categoryLabel: "agrumata"
    }
}

export const VanillaDefaultCard: Story = {
    args: {
        image: vanillaCandle,
        title: "Vanilla Bourbon",
        description: "Un aroma dolce che avvolge la stanza, creando un'atmosfera intima.",
        price: "14,90 €",
        category: "sweet",
        categoryLabel: "dolce"
    }
}