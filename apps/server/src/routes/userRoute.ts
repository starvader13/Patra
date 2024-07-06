import { Request, Response, Router } from "express";
import { StatusCodes } from "../config/index"
import { signupParameterValidation, signupInputValidation, doesUserNotExist } from "../middlewares/signup/index";
import { doesUserExist, signinInputValidation, signinParameterValidation, comparePassword } from "../middlewares/signin/index";
import { createUser, encryptPassword} from "../utils/index";
import debounce from "../middlewares/debounce";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const router = Router();
const SECRET_KEY: string = process.env.JWT_SECRET || " ";

function createToken(email: string, username: string): (null | string){
    if(SECRET_KEY===" "){
        console.error("\n---------------------------------------------\nEnviroment Variable needs to have a JWT_SECRET\n---------------------------------------------\n");
        return null;
    }
    return "Bearer " + jwt.sign({email, username}, SECRET_KEY, {expiresIn: '1 day'});
}

router.use(debounce);

router.post("/signup",signupParameterValidation, signupInputValidation, doesUserNotExist, async (req: Request, res: Response)=>{
    const body = req.body;
    body.password = encryptPassword(body.password);

    const response = await createUser(body);

    if(!response.success){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: response.message
        });
    }

    const token = createToken(body.email, body.username);

    if(!token){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "JWT_SECRET is required"
        })
    }

    return res.status(StatusCodes.CREATED).json({
        message: response.message,
        token: token
    });
});

router.post("/signin",signinParameterValidation, signinInputValidation, doesUserExist, comparePassword, async (req: Request, res: Response)=>{
    const body = req.body;

    const token = createToken(body.email, body.username);

    if(!token){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "JWT_SECRET is required"
        })
    }

    return res.status(StatusCodes.CREATED).json({
        message: "User Signed-In successfully",
        token: token
    });
});

export default router