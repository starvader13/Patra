import { IntegrateSignResult, SignFormInput } from "../types";
import zod from 'zod';
import axios from "axios";

const signupInputSchema = zod.object({
    username: zod.string({message: "Username is required and should be a valid string"}).min(4, {message: "Username should be minimum of 4 characters"}).max(25, {message: "Username should be maximum of 25 characters"}),
    email: zod.string({message: "Email is required and should be a valid string"}).email({message: "Email should be a valid email"}),
    password: zod.string({message: "Password is required and should be a valid string"}).min(4, {message: "Password should be minimum of 4 characters"}).max(12, {message: "Password should be maximum of 25 characters"}),
})

const integrateSignup = async (data: SignFormInput) => {
    const zodResponse = signupInputSchema.safeParse(data);

    if(!zodResponse.success){
        return {
            message: zodResponse.error.issues[0].message
        };
    }

    try{
        const response = await axios.post("http://localhost:7000/api/v1/user/signup", {
            username: data.username,
            email: data.email,
            password: data.password 
        });
        
        const signUpResult: IntegrateSignResult= {
            message: response.data.messignUpRage,
            token: response.data.token
        }

        return signUpResult;
        
    }catch(e: any){
        const signUpResult: IntegrateSignResult = {
            message: e.response?.data?.message || "Internal Server Error"
        };

        return signUpResult;
    }

}

export default integrateSignup;