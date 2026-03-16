import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

import "./Card.css";

export type CardProps = {
    image: string;
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
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
    oldPrice,
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
            <div className="card-body">
                <div className="card-badge-category">
                    <Badge
                        variant={category}
                        label={categoryLabel}
                    />
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="card-price-container">
                    {oldPrice && <span className="card-old-price">{oldPrice}</span>}
                    <span className="card-price">{price}</span>
                </div>
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
