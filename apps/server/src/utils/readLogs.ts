import fs from 'fs'
import path from 'path'
import { LogData } from '../config';
import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout)

class LogDataRenderer {
    timestamp: string;
    origin: string;
    message: string;

    constructor( timestamp: string, origin: string, message: string){
        this.timestamp = timestamp;
        this.origin = origin;
        this.message = message;
    };
}

const readLogs = (inputFilename: string) => {
    const logDir = path.join(__dirname, '..', '..', 'logs');
    const logFile = path.join(logDir, `${inputFilename}.log`);

    fs.readFile(logFile, 'utf-8', (err, data)=>{
        if(err){
            console.log("Logs For The File Does Not Exist");
            process.exit(1);
        }
        
        JSON.parse(data.trim()).map( (d: LogData) => {
            const logData = new LogDataRenderer(d.timestamp, d.origin, d.message);
            console.table(logData);
        })
    })
}


rl.question('Filename: ', name => {
    readLogs(name);
    rl.close();
})


export default readLogs