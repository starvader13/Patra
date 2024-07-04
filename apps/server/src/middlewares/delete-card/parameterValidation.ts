import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../../config";

const deleteCardParameterValidation = (req: Request, res: Response, next: NextFunction): (void | Response<string>) => {
    const body = req.body;

    if(Object.keys(body).length==1){
       return next(); 
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Data recieved is not in the correct format"
    });
}

export default deleteCardParameterValidation;