import React, { type ButtonHTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import "../styles/colors.css";

// Definire i metadati.
// - `title` è il nome che apparirà nella sidebar di Storybook.
// - `parameters.layout: 'centered'` centra il componente nel canvas.
// - `parameters.docs`: contiene la documentazione testuale che appare nella tab Docs.
// - `tags: ['autodocs']` abilita la documentazione automatica.

const meta: Meta = {
    title: 'Foundations/Colors', // Titolo della sezione nel pannello di Storybook
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Sistema cromatico basato su spazio colore OKLCH. " +
                    "La palette include il colore primario (scala di grigi), i colori funzionali (Sconto in rosso, Nuovo in verde) " +
                    "e le linee emozionali delle candele (Relax, Energy, Comfort). " +
                    "Clicca su un colore per copiare la variabile CSS negli appunti.",
            },
        },
    },
    tags: ['autodocs']  // Attiva la generazione automatica della documentazione
}

export default meta;

// Tipo alias per le storie basato sui metadati
type Story = StoryObj<typeof meta>;

// Componente pulsante riutilizzabile che copia un valore negli appunti
const ClickToCopy: React.FC<{ value: string } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ value, ...attrs }) => {

    return (

        <button className='click-to-copy'
            {...attrs} // Propagazione di tutti gli attributi HTML passati al componente
            style={{ border: 'none', cursor: 'pointer', ...attrs.style }} // Stile base + override
            onClick={() => navigator.clipboard.writeText(value)} // Copia il valore passato al click
            aria-label={`Copy ${value}`} // Etichetta per screen reader (accessibilità)
        >
        </button>
    )
}

// Storia principale per visualizzare la palette di colori
export const Default: Story = {
    render: () =>

        <>
            <h1 className="font-size-h2">Candle Design System - Palette</h1>

            {/* --- GRIGI NATURALI --- */}
            <h2 className='font-size-h3'>Gray (Structure - Sold Out)</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-gray-${i})` }} // Sfondo colore grigio 
                        key={i}                                               // Chiave unica per React
                        value={`--color-gray-${i}`}                           // Valore da copiare
                    />
                ))}
            </div>

            {/* ===== ROSA BADGE FLOREALE ===== */}
            <h2 className='font-size-h3'>Pink - Floral Badge</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-pink-${i})` }}  // Sfondo colore rosa 
                        key={i}                                                // Chiave unica per React
                        value={`--color-pink-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>

            {/* ===== OCRA/ARANCIONE BADGE AGRUMI ===== */}
            <h2 className='font-size-h3'>Ocra/Orange - Citrus Badge</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-orange-${i})` }}  // Sfondo colore ocra/arancione 
                        key={i}                                                  // Chiave unica per React
                        value={`--color-orange-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>

            {/* --- AMBRA BADGE DOLCE --- */}
            <h2 className='font-size-h3'>Amber - Sweet Badge</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-amber-${i})` }}  // Sfondo colore celeste
                        key={i}                                                    // Chiave unica per React
                        value={`--color-amber-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>

            {/* ===== VERDE BADGE NUOVO ===== */}
            <h2 className='font-size-h3'>Green - New Badge</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-green-${i})` }}  // Sfondo colore verde 
                        key={i}                                                 // Chiave unica per React
                        value={`--color-green-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>

            {/* ===== ROSSO BADGE SCONTO ===== */}
            <h2 className='font-size-h3'>Red - Discount Badge</h2>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-red-${i})` }}  // Sfondo colore rosso 
                        key={i}                                                    // Chiave unica per React
                        value={`--color-red-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>
        </>
}