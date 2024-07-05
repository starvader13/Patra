import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';
import { StatusCodes } from "../config";
import { RequestWithUser } from "../types/request";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "";

const authorization = (req: Request, res: Response, next: NextFunction): (void | Response)=>{
    const token = req.headers.authorization || "";

    if(!token){
        return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json({
            message: "Unautorized User. Please SignIn"
        })
    }

    const signature = token.split(" ")[1];

    try{
        const response = jwt.verify(signature, SECRET_KEY);

        if(typeof response === "string"){
            throw new Error();
        }

        (<RequestWithUser>req).userEmail = response.email;

        return next();
    }catch(err){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Unautorized User. Please SignIn"
        })
    }
}

export default authorization;