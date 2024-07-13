import axios from "axios";
import { CreateCard } from "../types";

const integrateCreateCard = async (data: CreateCard, url: string) => {

    try{
        const response = await axios.post("http://localhost:7000/api/v1/card/create-card", {
            name: data.name,
            description: data.description,
            age: Number(data.age),
            mailTo: data.email,
            imageUrl: url,
            linkedin: data.linkedin,
            twitter: data.twitter,
            customURL: data.customUrl,
            hobbies: data.hobbies
        }, {
            headers: {
                Authorization: window.localStorage.getItem("authorization")
            }
        });

        return {
            message: response.data.message,
            status: true
        }

    }catch(err: any){
        return {
            message: err.response?.data?.message,
            status: false
        }
    }
}

export default integrateCreateCard;