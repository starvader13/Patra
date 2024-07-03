import { Router } from "express";
import { StatusCodes } from "../config/index"
import { signupParameterValidation, signupInputValidation, doesUserNotExist } from "../middlewares/signup/index";
import { createUser, encryptPassword } from "../utils/index";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET;

router.post("/signup",signupParameterValidation, signupInputValidation, doesUserNotExist, async (req, res)=>{
    const body = req.body;
    body.password = encryptPassword(body.password);
    
    if(SECRET_KEY===undefined){
        console.error("\n---------------------------------------------\nEnviroment Variable needs to have a JWT_SECRET\n---------------------------------------------\n")
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal server Error"
        })
    }

    const response = await createUser(body);

    if(!response.success){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: response.message
        })
    }

    const token = "Bearer " + jwt.sign({email: body.email, username: body.username}, SECRET_KEY, {expiresIn: '1 day'})

    return res.status(StatusCodes.CREATED).json({
        message: response.message,
        token: token
    })
})

export default router