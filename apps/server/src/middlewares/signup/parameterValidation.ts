import { Request, Response, NextFunction } from "express";
import StatusCodes from "src/config/statusCode";

const parameterValidation = (req: Request, res: Response, next: NextFunction): (Response | void)=>{
    const body = req.body;

    if(Object.keys(body).length==4 || Object.keys(body).length==3){
       return next(); 
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Data recieved is not in the correct fromat"
    });
}

export default parameterValidation