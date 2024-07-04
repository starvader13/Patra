import { Router } from "express";
import userRouter from "./userRoute";
import cardRouter from "./cardRoute"

const router = Router();

router.use("/user", userRouter);
router.use("/card", cardRouter)

export default router;