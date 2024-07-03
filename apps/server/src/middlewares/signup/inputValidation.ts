import { NextFunction, Request, Response } from 'express';
import zod from 'zod';
import StatusCodes from '../../config/StatusCode';

const signupInputSchema = zod.object({
    username: zod.string({message: "Username is required and should be a valid string"}).min(4, {message: "Username should be minimum of 4 characters"}).max(25, {message: "Username should be maximum of 25 characters"}),
    email: zod.string({message: "Email is required and should be a valid string"}).email({message: "Email should be a valid email"}),
    password: zod.string({message: "Password is required and should be a valid string"}).min(4, {message: "Password should be minimum of 4 characters"}).max(12, {message: "Password should be maximum of 25 characters"}),
})

const signupInputValidation = (req: Request, res: Response, next: NextFunction): (Response | void)=>{
    const body = req.body;
    const zodResponse = signupInputSchema.safeParse(body);

    if(!zodResponse.success){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: zodResponse.error.issues[0].message
        })
    }

    return next();
}

export default signupInputValidation;