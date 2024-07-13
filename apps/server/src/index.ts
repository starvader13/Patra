import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/mainRoute';
import bodyParser from 'body-parser';
import cors from 'cors';
import { StatusCodes } from './config';
import { logger } from './utils';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({
    limit: '20mb'
}));

app.use(cors());

app.use("/api/v1", mainRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    const logData = {
        message: err.toString(),
        origin: "global error-handling middleware",
        timestamp: Date()
    }
    
    logger(logData);
    
    res.status(StatusCodes.FORBIDDEN).json({
        message: "Internal Server Error Occured"
    });
})

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
});