import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

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

        <article>

            {/* Header della Card */}
            <div>
                {status && (
                    <Badge
                        variant={status}
                        label={status === "discount" ? "- 20%" : status} />
                )}

                <img src={image} alt={title} />
            </div>

            {/* Body della Card */}
            <div>
                <Badge
                    variant={category}
                    label={category}
                />
                <h2>{title}</h2>
                <p>{description}</p>
                <div>{price}</div>
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
