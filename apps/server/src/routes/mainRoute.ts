import { Router } from "express";
import userRouter from "./userRoute";

const router = Router();

router.use("/user", userRouter);

export default router;