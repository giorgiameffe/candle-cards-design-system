import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

import "./Card.css";

export type CardProps = {
    image: string;
    title: string;
    description: string;
    price: string;
    category: "floral" | "sweet" | "citrus";
    status?: "new" | "discount" | "soldOut";
}

export const Card = ({
    image,
    title,
    description,
    price,
    category,
    status

}: CardProps) => {

    const isSoldOut = status === "soldOut";

    return (

        <article className="card">

            {/* Header della Card */}
            <div className="card-header">
                {status && (
                    <Badge
                        variant={status}
                        label={status === "discount" ? "- 20%" : status} />
                )}

                <img src={image} alt={title} className="card-image" />
            </div>

            {/* Body della Card */}
            <div>
                <div className="card-badge-category">
                    <Badge
                        variant={category}
                        label={category}
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
