interface Card {
    name: string,
    description: string,
    age?: number,
    hobbies?: string,
    mailTo?: string,
    imageUrl: string,
    linkedin?: string,
    twitter?: string,
    customURL?: string,
    authorId: number
}

export default Card;