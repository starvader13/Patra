import { SignFormInput, IntegrateSignResult } from "../types";
import zod from 'zod';
import axios from 'axios'

const loginInputSchema = zod.object({
    email: zod.string({message: "Email is required and should be a valid string"}).email({message: "Email should be a valid email"}),
    password: zod.string({message: "Password is required and should be a valid string"}).min(4, {message: "Password should be minimum of 4 characters"}).max(12, {message: "Password should be maximum of 25 characters"}),
}).strict();

const integrateLogin = async (data: SignFormInput) => {
    const zodResponse = loginInputSchema.safeParse(data);

    if(!zodResponse.success){
        return {
            message: zodResponse.error.issues[0].message
        };
    }

    try{
        const response = await axios.post("https://patra-qic8.onrender.com/api/v1/user/signin", {
                email: data.email,
                password: data.password
            }, 
        );

        const signInResult: IntegrateSignResult= {
            message: response.data.messignUpRage,
            token: response.data.token
        }

        return signInResult;
        
    }catch(e: any){
        const signInResult: IntegrateSignResult = {
            message: e.response?.data?.message || "Internal Server Error"
        };

        return signInResult;
    }
}

export default integrateLogin;