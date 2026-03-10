// Import degli stili del componente
import "./Button.css";

// Definizione delle props del componente Badge
export type ButtonProps = {
    label: string; // Testo visibile nel badge
    ariaLabel?: string; // Testo per accessibilità (screen reader)
    disabled?: boolean; // Indica se il bottone è disabilitato
    onClick?: () => void; // Callback quando si clicca sul bottone
    size?: "small" | "medium" | "large"; // Dimensione del bottone
}

// Componente Bottone
export const Button = ({
    label,
    ariaLabel,
    disabled = false,
    size,
    onClick
}: ButtonProps) => {

    // 2. Creiamo una variabile per il testo da mostrare
    const currentLabel = disabled ? "Non disponibile" : label;

    return (
        <button
            className={`btn btn-${size}`}
            aria-label={ariaLabel || currentLabel}
            disabled={disabled}
            onClick={onClick}
        >
            {/* 4. Cambiamo il testo visualizzato qui */}
            {currentLabel}
        </button>
    )
}