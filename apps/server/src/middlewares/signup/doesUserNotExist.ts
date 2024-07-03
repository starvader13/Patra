import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express";
import StatusCodes from "../../config/StatusCode";

const prisma = new PrismaClient();

const doesUserNotExist = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });

        if(user){
            return res.status(StatusCodes.CONFLICT).json({
                message: `${user.email} already exists. Please SignIn`
            });
        }

        return next();
    }
    catch(e){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        })
    }
}

export default doesUserNotExist;