import { Request, Response, NextFunction } from "express";
import StatusCodes from "../../config/StatusCode";
import { logger } from "../../utils";
import { LogData } from "../../config";

const parameterValidation = (req: Request, res: Response, next: NextFunction): (Response | void)=>{
    const body = req.body;

    if(Object.keys(body).length==4 || Object.keys(body).length==3){
       return next(); 
    }

    const logData: LogData = {
        message: "Signup Parameter Validation Failed",
        origin: "signup-parameterValidation",
        timestamp: Date.now() 
    }

    logger(logData);

    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Data recieved is not in the correct format"
    });
}

export default parameterValidation