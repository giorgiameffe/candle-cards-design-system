import "../components/Badge.css";

export type BadgeProps = {
  label: string;
  ariaLabel?: string;
  variant: "relax" | "energy" | "comfort" | "new" | "discount" | "soldOut";
  style?: React.CSSProperties;
}

export const Badge = ({
  label,
  ariaLabel,
  variant = "relax",
  style
}: BadgeProps) => {

  return (

    <div
      className={`badge badge-${variant}`}
      aria-label={ariaLabel || label}
      style={style}
    >
      {label}
    </div>
  )
}