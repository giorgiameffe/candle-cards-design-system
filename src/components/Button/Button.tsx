// Import degli stili del componente
import "./Button.css";

// Definizione delle props del componente Badge
export type ButtonProps = {
    label: string; // Testo visibile nel badge
    ariaLabel?: string; // Testo per accessibilità (screen reader)
    disabled?: boolean; // Indica se il bottone è disabilitato
    onClick?: () => void; // Callback quando si clicca sul link
}

export const Button = ({ label }: ButtonProps) => {

    return <button className="btn">{label}</button>
}