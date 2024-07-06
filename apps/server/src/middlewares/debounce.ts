import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "../config";

let userId: Record<string, number> = {};
const debounceTime = 3000;

const debounce = (req: Request, res: Response, next: NextFunction) => {
    const ipAddress:string = req.ip?.toString() || "";
    const userAgent: string = req.headers["user-agent"] || "";
    
    if(!ipAddress || !userAgent){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server Error"
        });
    }
    
    const uniqueUserAddress: string = ipAddress + userAgent;
    
    const currentTime = Date.now();
    
    if(!userId[uniqueUserAddress]){
        userId[uniqueUserAddress] = 0;
    }

    if(currentTime - userId[uniqueUserAddress] >= debounceTime){
        userId[uniqueUserAddress] = Date.now();
        return next();
    }

    return res.status(StatusCodes.TOO_MANY_REQUESTS).json({
        message: 'Too many requests - please wait and try again.'
    });
}

export default debounce;