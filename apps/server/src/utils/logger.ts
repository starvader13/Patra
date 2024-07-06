import fs, { write } from 'fs';
import path from 'path';
import { LogData } from '../config';

const logger = async (logData: LogData): Promise<(null | undefined)>  => {
    const logDir: string = path.join(__dirname, '..','..', 'logs');
    let logFile;

    if(logData.origin.includes("authorization")){
        logFile = path.join(logDir, 'authorization.log');
    }else if(logData.origin.includes("signup")){
        logFile = path.join(logDir, "signup.log");
    }else{
        return null;
    }

    fs.readFile(logFile, 'utf-8', (err, data)=>{
        // if(err) throw err;
        const writeData = data ? JSON.parse(data) : [];

        writeData.push(logData);

        fs.writeFile(logFile, JSON.stringify(writeData), (err)=>{
            if (err) throw err;
            
            console.log("Logger added the details")
        })

    })
}

export default logger;