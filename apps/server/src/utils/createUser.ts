import { PrismaClient } from "@prisma/client";
import User from "../config/User";

const prisma = new PrismaClient();

interface createUserResponse {
    success: boolean,
    message: string
}

const createUser = async(user: User): Promise<createUserResponse> =>{
    try{
        const response = await prisma.user.create({
            data: user
        })
        return {
            success: true,
            message: "User Created Successfully"
        };
    }catch(e){
        return {
            success: false,
            message: "Failed Creating User"
        };
    }
}

export default createUser;