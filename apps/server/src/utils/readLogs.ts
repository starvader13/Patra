import fs from 'fs'
import path from 'path'
import { LogData } from '../config';

const readLogs = (inputFilename: string) => {
    const logDir = path.join(__dirname, '..', '..', 'logs');
    const logFile = path.join(logDir, inputFilename);

    fs.readFile(logFile, 'utf-8', (err, data)=>{
        if (err) throw err;
        const logData: LogData = JSON.parse(data.trim());
        console.table([logData.timestamp, logData.message, logData.origin])
    })
}

readLogs("signup");


export default readLogs