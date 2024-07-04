import { Request } from "express";
import { User } from "../config";

export interface RequestWithUser extends Request {
    userEmail?: string
    userId?: number
}
