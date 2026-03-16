import type { Meta, StoryObj } from "@storybook/react-vite";

// Importazione Componente Card
import { Card } from "../components/Card/Card";

// Importazioni immagini candele
import lavanderCandle from "../assets/img/candle-lavanda.jpg";
import orangeCandle from "../assets/img/candle-arancia.png";
import vanillaCandle from "../assets/img/candle-vaniglia.png";

// Configurazione della storia del componente
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

// Storia default della candela alla Lavanda 
export const LavanderDefaultCard: Story = {
    args: {
        image: lavanderCandle,
        title: "Lavanda di Provenza",
        description: "Olio essenziale purissimo per conciliare il relax e il riposo notturno.",
        price: "15,50 €",
        category: "floral",
        categoryLabel: "floreale"
    }
}

// Storia default della candela all'Arancia
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

// Storia default della candela alla Vaniglia
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

// Storia del prodotto in sconto (Arancia + Sconto)
export const DiscountedCandle: Story = {
    args: {
        image: orangeCandle,
        title: "Agrumi di Sicilia",
        description: "Una sferzata di energia pura con note vivaci di arancia amara e bergamotto.",
        price: "13,90 €",
        category: "citrus",
        categoryLabel: "agrumata",
        status: "discount",
        statusLabel: "- 20%"
    }
}

// Storia del prodotto nuovo arrivo (Lavanda + Novità)
export const NewArrivalCandle: Story = {
    args: {
        image: lavanderCandle,
        title: "Lavanda di Provenza",
        description: "Olio essenziale purissimo per conciliare il relax e il riposo notturno.",
        price: "15,50 €",
        category: "floral",
        categoryLabel: "floreale",
        status: "new",
        statusLabel: "novità"
    }
}