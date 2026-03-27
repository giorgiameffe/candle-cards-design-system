import type { Meta, StoryObj } from "@storybook/react-vite";

// Importazione Componente Card
import { Card } from "../components/Card/Card";

// Importazioni immagini candele
import lavanderCandle from "../assets/img/candle-lavanda.jpg";
import orangeCandle from "../assets/img/candle-arancia.png";
import vanillaCandle from "../assets/img/candle-vaniglia.png";

// Importazioni immagini candele hover
import lavanderHoverImage from "../assets/img/lavanda-hover-image.png";
import orangeHoverImage from "../assets/img/arancia-hover-image.png"
import vanillaHoverImage from "../assets/img/vaniglia-hover-image.png";

// Configurazione della storia del componente
const meta: Meta<typeof Card> = {

    // Posizione del componente nella sidebar di Storybook
    title: "Components/Molecules/Card",
    // Componente associato alla storia
    component: Card,
    parameters: {
        // Centra il componente nella preview
        layout: 'centered',
        docs: {
            description: {
                component:
                    "La **Card Prodotto** è un componente versatile utilizzato per esporre le candele del catalogo. Supporta diversi stati visivi (Novità, Sconto, Esaurito), categorie cromatiche in base alla fragranza (Floreale, Agrumata, Dolce) e la gestione del prezzo sbarrato in caso di sconto in corso."
            },
        },
    },
    // Abilita la generazione automatica della documentazione
    tags: ['autodocs'],
    argTypes: {
        // CONTENUTO 
        image: {
            control: 'text',
            description: 'URL o percorso locale dell\'immagine del prodotto',
            table: { category: 'Contenuto' }
        },
        title: {
            control: 'text',
            description: 'Il titolo della card',
            table: { category: 'Contenuto' }
        },
        description: {
            control: 'text',
            description: 'La descrizione del prodotto',
            table: { category: 'Contenuto' }
        },

        // PREZZI 
        price: {
            control: 'text',
            description: 'Prezzo attuale di vendita',
            table: { category: 'Prezzi' }
        },
        oldPrice: {
            control: 'text',
            description: 'Prezzo originale sbarrato (mostrato solo in caso di sconto)',
            table: { category: 'Prezzi' }
        },

        // CATEGORIA
        category: {
            control: { type: 'select' },
            options: ['floral', 'citrus', 'sweet'],
            description: 'Definisce lo stile cromatico del badge categoria',
            table: { category: 'Classificazione' }
        },
        categoryLabel: {
            control: 'text',
            description: 'Testo del badge categoria',
            table: { category: 'Classificazione' }
        },

        // STATO (BADGE IN ALTO A DESTRA)
        status: {
            control: { type: 'select' },
            options: [undefined, 'new', 'discount', 'soldOut'],
            description: 'Stato commerciale del prodotto',
            table: { category: 'Stato Prodotto' }
        },
        statusLabel: {
            control: 'text',
            description: 'Testo del badge di stato (es: novità, -20%, esaurito)',
            table: { category: 'Stato Prodotto' },
            // Appare nei controlli solo se uno stato è selezionato
            if: { arg: 'status', truthy: true },
        },
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

// Storia default della candela alla Lavanda 
export const LavanderDefaultCard: Story = {
    args: {
        image: lavanderCandle,
        hoverImage: lavanderHoverImage,
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
        hoverImage: orangeHoverImage,
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
        hoverImage: vanillaHoverImage,
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
        hoverImage: orangeHoverImage,
        title: "Agrumi di Sicilia",
        description: "Una sferzata di energia pura con note vivaci di arancia amara e bergamotto.",
        oldPrice: "17,90 €",
        price: "14,30 €",
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
        hoverImage: lavanderHoverImage,
        title: "Lavanda di Provenza",
        description: "Olio essenziale purissimo per conciliare il relax e il riposo notturno.",
        price: "15,50 €",
        category: "floral",
        categoryLabel: "floreale",
        status: "new",
        statusLabel: "novità"
    }
}

// Storia del prodotto esaurito
export const SoldOutCandle: Story = {
    args: {
        image: vanillaCandle,
        title: "Vanilla Bourbon",
        description: "Un aroma dolce che avvolge la stanza, creando un'atmosfera intima.",
        price: "14,90 €",
        category: "sweet",
        categoryLabel: "dolce",
        status: "soldOut",
        statusLabel: "esaurito"
    }
}