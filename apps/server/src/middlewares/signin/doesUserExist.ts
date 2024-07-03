import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express";
import StatusCodes from "../../config/StatusCode";

const prisma = new PrismaClient();

const doesUserExist = async (req: Request, res: Response, next: NextFunction): Promise<(Response<void>| void)> => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });

        if(!user){
            return res.status(StatusCodes.CONFLICT).json({
                message: `${req.body.email} doesn't exists. Please SignUp`
            });
        }

        req.body.userPassword = user.password;
        req.body.email = user.email;
        return next();
    }
    catch(e){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        });
    }
}

export default doesUserExist;