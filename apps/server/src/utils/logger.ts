import fs from 'fs';
import path from 'path';
import { LogData } from '../config';

const logger = async (logData: LogData): Promise<(null | undefined)>  => {
    const logDir: string = path.join(__dirname, '..','..', 'logs');
    let logFile;

    if(logData.origin.includes("authorization")){
        logFile = path.join(logDir, 'authorization.log');
    }else if(logData.origin.includes("signup")){
        logFile = path.join(logDir, "signup");
    }else{
        return null;
    }

    fs.appendFile(logFile, JSON.stringify(logData), (err)=>{
        if(err){
            console.log(err);
            throw err;
        };

        console.log("Logger added the details");
    });
}

export default logger;