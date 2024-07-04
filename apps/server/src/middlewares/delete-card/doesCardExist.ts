import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { StatusCodes, CardWithEveryDetail } from "../../config";

const prisma = new PrismaClient();

const doesCardExist = async (req: Request, res: Response, next: NextFunction): Promise<(void | Response<string>)> => {
    const body = req.body;
    
    const response: CardWithEveryDetail = await prisma.card.findUnique({
        where: {
            id: body.id
        }
    })

    if(!response){
        return res.status(StatusCodes.CONFLICT).json({
            message: `Card doesn't exists. Please Create a card`
        });
    }

    return next();
}

export default doesCardExist;