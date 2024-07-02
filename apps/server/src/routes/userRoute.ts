import { Router } from "express";
import parameterValidation from "src/middlewares/signup/parameterValidation";

const router = Router();

router.post("/signup",parameterValidation, async (req, res)=>{

})

export default router;