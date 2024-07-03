import { Router } from "express";
import { StatusCodes } from "../config/index"
import { signupParameterValidation, signupInputValidation, doesUserNotExist } from "../middlewares/signup/index";
import { createUser, encryptPassword } from "../utils/index";

const router = Router();

router.post("/signup",signupParameterValidation, signupInputValidation, doesUserNotExist, async (req, res)=>{
    const body = req.body;
    body.password = encryptPassword(body.password);
    
    const response = await createUser(body);

    if(!response.success){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: response.message
        })
    }

    return res.status(StatusCodes.CREATED).json({
        message: response.message
    })
})

export default router;