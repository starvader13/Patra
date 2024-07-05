import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { StatusCodes, CardWithEveryDetail } from "../../config";

const prisma = new PrismaClient();

const doesCardExist = async (req: Request, res: Response, next: NextFunction, cardId: number): Promise<(void | Response)> => {
    const id: number = parseInt(req.params.cardId);
    
    const response: CardWithEveryDetail = await prisma.card.findUnique({
        where: {
            id: id
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