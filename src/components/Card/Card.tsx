import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

import "./Card.css";

export type CardProps = {
    image: string;
    title: string;
    description: string;
    price: string;
    category: "floral" | "sweet" | "citrus";
    categoryLabel: string;
    status?: "new" | "discount" | "soldOut";
    statusLabel: string
}

export const Card = ({
    image,
    title,
    description,
    price,
    category,
    categoryLabel,
    status,
    statusLabel

}: CardProps) => {

    const isSoldOut = status === "soldOut";

    return (

        <article className="card">

            {/* Header della Card */}
            <div className="card-header">
                {status && (
                    <Badge
                        variant={status}
                        label={status === "discount" ? "- 20%" : statusLabel}
                    />
                )}

                <img src={image} alt={title} className="card-image" />
            </div>

            {/* Body della Card */}
            <div>
                <div className="card-badge-category">
                    <Badge
                        variant={category}
                        label={categoryLabel}
                    />
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="card-price">{price}</div>
            </div>

            {/* Footer della card */}
            <div>
                <Button
                    label="Aggiungi al carrello"
                    size="medium"
                    disabled={isSoldOut}
                />
            </div>

        </article>
    )

}
