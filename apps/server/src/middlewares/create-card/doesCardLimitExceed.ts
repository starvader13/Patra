import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../../config";
import { RequestWithUser } from "../../types/request";

const prisma = new PrismaClient();

const doesCardLimitExceed = async (req: Request, res: Response, next: NextFunction) => {
    const email = (<RequestWithUser>req).userEmail || "";

    const userResponse = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(!userResponse){
        return res.status(StatusCodes.FORBIDDEN).json({
            message: "User Does Not Exist. Please SignIn"
        });
    }

    const cardResponse = await prisma.card.findMany({
        where: {
            authorId: userResponse.id
        }
    });

    if(cardResponse.length>=2){
        return res.status(StatusCodes.FORBIDDEN).json({
            "message": "Cannot create more cards as the maximum limit for free users is reached."
        });
    }
    
    (<RequestWithUser>req).userId = userResponse.id;
    return next();
}

export default doesCardLimitExceed;