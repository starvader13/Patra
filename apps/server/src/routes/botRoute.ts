import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "../config";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const prisma = new PrismaClient();

const BOT_TOKEN = process.env.BOT_TOKEN || "";

const verifyBotToken = (req: Request, res: Response, next: Function): void | Response => {
    const token = req.headers["x-bot-token"];

    if (!token || token !== BOT_TOKEN) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Invalid bot token"
        });
    }

    next();
};

router.use(verifyBotToken);

router.post("/webhook", async (req: Request, res: Response) => {
    const { action, payload } = req.body;

    if (!action) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Action is required"
        });
    }

    try {
        const log = await prisma.botLog.create({
            data: {
                action,
                payload: payload ? JSON.stringify(payload) : null,
                status: "received"
            }
        });

        return res.status(StatusCodes.CREATED).json({
            message: "Webhook received",
            logId: log.id
        });
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Failed to process webhook"
        });
    }
});

router.get("/logs", async (req: Request, res: Response) => {
    try {
        const logs = await prisma.botLog.findMany({
            orderBy: { createdAt: "desc" },
            take: 50
        });

        return res.status(StatusCodes.OK).json({ logs });
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Failed to fetch logs"
        });
    }
});

router.get("/logs/:logId", async (req: Request, res: Response) => {
    const id = parseInt(req.params.logId);

    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Invalid log ID"
        });
    }

    try {
        const log = await prisma.botLog.findUnique({ where: { id } });

        if (!log) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "Log not found"
            });
        }

        return res.status(StatusCodes.OK).json({ log });
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Failed to fetch log"
        });
    }
});

export default router;
