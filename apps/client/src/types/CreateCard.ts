type CreateCard = {
    name: string;
    description: string;
    age: number;
    email: string;
    hobbies: string;
    linkedin: string;
    twitter: string;
    customUrl: string;
    profilePicture?: [] | FileList;
    imageUrl?: string 
}

export default CreateCard;