import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../../config";
import { RequestWithUser } from "../../types/request";

const prisma = new PrismaClient();

const findUserId = async (req: Request, res: Response, next: NextFunction): Promise<(void | Response)> => {
    const response = await prisma.user.findUnique({
        where: {
            email: (<RequestWithUser>req).userEmail
        }
    });

    if(!response){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        });
    }

    (<RequestWithUser>req).userId = response.id;
    return next();
}

export default findUserId;