import { PrismaClient } from "@prisma/client";
import User from "../config/User";

const prisma = new PrismaClient();

const createUser = async(user: User): Promise<string> =>{
    try{
        const response = await prisma.user.create({
            data: user
        })
        return "User Created Successfully";
    }catch(e){
        return "Failed Creating User";
    }
}

export default createUser;