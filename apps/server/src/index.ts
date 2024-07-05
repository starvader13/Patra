import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/mainRoute';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors());
app.use("/api/v1", mainRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
});