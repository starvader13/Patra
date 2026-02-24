import { Router } from "express";
import userRouter from "./userRoute";
import cardRouter from "./cardRoute"
import botRouter from "./botRoute"

const router = Router();

router.use("/user", userRouter);
router.use("/card", cardRouter)
router.use("/bot", botRouter)

export default router;