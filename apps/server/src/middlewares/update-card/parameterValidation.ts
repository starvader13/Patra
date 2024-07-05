import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../../config";

const parameterValidation = (req: Request, res: Response, next: NextFunction): (Response | void)=>{
    const body = req.body;

    if(body.authorId){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Author ID can not be changed once the object is created"
        })
    }

    if(Object.keys(body).length<=9 && Object.keys(body).length>=1){
       return next(); 
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Data recieved is not in the correct format"
    });

    return next();
}

export default parameterValidation;