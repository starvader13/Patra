import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../../config";

const deleteCardParameterValidation = (req: Request, res: Response, next: NextFunction): (void | Response) => {
    const params = req.params;

    if(Object.keys(params).length===1){
       return next(); 
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Data recieved is not in the correct format"
    });
}

export default deleteCardParameterValidation;