import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { StatusCodes } from "src/config";

const comparePassword = (req: Request, res: Response, next: NextFunction) => {
    const password = req.body.password;
    const userPassword = req.body.userPassword;

    const comparePasswordResponse = bcrypt.compareSync(password, userPassword);
    
    if(!comparePasswordResponse){
        return res.status(StatusCodes.FORBIDDEN).json({
            message: "Either the email or the password is incorrect"
        });
    }

    return next();
}

export default comparePassword;