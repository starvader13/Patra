import { NextFunction, Request, Response, Router } from "express";
import authorization from "../middlewares/authorization";
import { RequestWithUser } from "../types/request";
import { createCardParameterValidation, createCardInputValidation, doesCardLimitExceed } from "../middlewares/create-card/index";
import { PrismaClient } from "@prisma/client";
import { Card, CardWithEveryDetail, StatusCodes } from "../config";
import { deleteCardParameterValidation } from "../middlewares/delete-card";
import { updateCardInputValidation, updateCardParameterValidation } from "../middlewares/update-card";
import { doesCardExist, findUserId } from "../middlewares/card/index";
import debounce from "../middlewares/debounce";

const router = Router();
const prisma = new PrismaClient();

router.use(authorization);
router.use(debounce);

router.param('cardId', doesCardExist);

router.get("/cards/:cardId", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.cardId);
  
    const response: CardWithEveryDetail = await prisma.card.findUnique({
        where: {
            id: id
        }
    });

    if(!response){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        });
    }

    return res.status(StatusCodes.OK).json({
        card: response
    });
});

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
});

router.use(findUserId);

router.get("/cards", async (req: Request, res: Response)=>{
    const userId = (<RequestWithUser>req).userId;

    const response = await prisma.card.findMany({
        where: {
            authorId: userId
        }
    });

    if(!response){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        });
    }

    return res.status(StatusCodes.OK).json({
        cards: response
    })
})

router.delete("/delete-card/:cardId", deleteCardParameterValidation, async(req: Request, res: Response, next: NextFunction)=>{
    const id: number = parseInt(req.params.cardId);
    const userId = (<RequestWithUser>req).userId;

    try{
        const response: CardWithEveryDetail = await prisma.card.delete({
            where: {
                id: id,
                authorId: userId
            }
        })
    
        if(!response){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Internal Server Error"
            });
        }

        return res.status(StatusCodes.OK).json({
            message: "Card Deleted successfully"
        });
    }catch(e){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "User is not authorized to delete this card"
        });
    }

});

router.put("/update-card/:cardId", updateCardParameterValidation, updateCardInputValidation, async (req: Request, res: Response, next: NextFunction)=>{
    const body = req.body;
    const id: number = parseInt(req.params.cardId);
    const userId = (<RequestWithUser>req).userId;
    
    try{
        const response = await prisma.card.update({
            where: {
                id: id,
                authorId: userId
            },
            data: body,
        })

        if(!response){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Internal Server Error"
            });
        }

        return res.status(StatusCodes.OK).json({
            message: "Card Updated successfully"
        });
    }catch(e){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "User is not authorized to update this card"
        });
    }
})

export default router;