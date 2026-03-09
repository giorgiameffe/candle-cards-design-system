// Import degli stili del componente
import "./Badge.css";

// Definizione delle props del componente Badge
export type BadgeProps = {
  label: string; // Testo visibile nel badge
  ariaLabel?: string; // Testo per accessibilità (screen reader)
  variant: "relax" | "energy" | "comfort" | "new" | "discount" | "soldOut"; // Varianti di stile disponibili
}

// Componente Badge
export const Badge = ({
  label,
  ariaLabel,
  variant = "relax", // Variante di default
}: BadgeProps) => {

  return (

    <div
      className={`badge badge-${variant}`} // Classe base + variante dinamica
      aria-label={ariaLabel || label} // Usa ariaLabel se presente, altrimenti label
      role="status" // Ruolo ARIA per notifiche di stato
    >
      {label} {/* Testo mostrato nel badge */}
    </div>
  )
}