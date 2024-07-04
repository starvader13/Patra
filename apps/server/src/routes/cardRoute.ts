import { Request, Response, Router } from "express";
import authorization from "../middlewares/authorization";
import { RequestWithUser } from "../types/request";
import { createCardParameterValidation, createCardInputValidation, doesCardLimitExceed } from "../middlewares/create-card/index";
import { PrismaClient } from "@prisma/client";
import { Card, StatusCodes } from "../config";

const router = Router();
const prisma = new PrismaClient();

router.use(authorization);

router.post("/create-card", createCardParameterValidation, createCardInputValidation, doesCardLimitExceed, async (req: Request, res: Response)=>{
    const body: Card = req.body;
    const id = (<RequestWithUser>req).userId;

    if(id===undefined){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized User"
        });
    }

    body.authorId = id;

    const response = await prisma.card.create({
        data: body
    });

    if(!response){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        });
    }

    return res.status(StatusCodes.CREATED).json({
        message: "Card created successfully"
    });
})

export default router;