import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

import "./Card.css";

export type CardProps = {
    image: string;
    hoverImage?: string;
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
    category: "floral" | "sweet" | "citrus";
    categoryLabel: string;
    status?: "new" | "discount" | "soldOut";
    statusLabel?: string
}

export const Card = ({
    image,
    hoverImage,
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
        <article className={`card ${isSoldOut ? "card-soldOut" : ""}`}>

            {/* Header della Card */}
            <div className="card-header">
                {status && (status === "discount" || statusLabel) && (
                    <Badge
                        variant={status}
                        label={status === "discount" ? "- 20%" : statusLabel!}
                    />
                )}

                {/* Contenitore per gestire il cambio immagine via CSS */}
                <div className="card-image-wrapper">
                    <img
                        src={image}
                        alt={title}
                        className="card-image main-image"
                    />

                    {hoverImage &&
                        <img
                            src={hoverImage}
                            alt={`${title} dettaglio`}
                            className="card-image hover-image"
                        />
                    }
                </div>
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