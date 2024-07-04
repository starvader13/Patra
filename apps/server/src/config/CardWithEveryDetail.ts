import Card from "./Card";

type CardWithEveryDetail = Card | {
    id: number,
    createdAt: Date;
    updatedAt: Date;
} | null

export default CardWithEveryDetail