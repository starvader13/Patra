import axios from "axios";
import { CreateCard } from "../types";

function encodeImageToBase64(data: CreateCard): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        if (!data.profilePicture) {
            resolve(undefined);
            return;
        }

        const file = data.profilePicture[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

const integrateCreateCard = async (data: CreateCard) => {

    const response = await encodeImageToBase64(data);

    if(!response){
        return {
            message: "Profile Picture Not Uploaded Successfully",
            status: false
        }
    }

    data.imageUrl = response;
    
    try{
        const response = await axios.post("https://patra-qic8.onrender.com/api/v1/card/upload",{
            imageUrl: data.imageUrl
        },{
            headers: {
                Authorization: window.localStorage.getItem("authorization"),
            }
        })
        
        data.imageUrl = response.data.url;
    }catch(err: any){
        return {
            message: err.response?.data?.message,
            status: false
        }
    }
    
    try{
        const response = await axios.post("https://patra-qic8.onrender.com/api/v1/card/create-card", {
            name: data.name,
            description: data.description,
            age: Number(data.age),
            mailTo: data.email,
            imageUrl: data.imageUrl ,
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