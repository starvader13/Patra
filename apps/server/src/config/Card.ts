interface Card {
    name: string,
    description: string,
    imageUrl: string,
    linkedin?: string,
    twitter?: string,
    customURL?: string,
    authorId: number
}

export default Card;