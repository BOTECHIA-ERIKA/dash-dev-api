import dotenv from 'dotenv';
dotenv.config();


import express , {Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan'
import path from 'path';

const app = express();


app.use(express.static(path.join(__dirname,'./../public/')));

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.get('/ping', (req: Request, res: Response) => {
    res.json('pong')
});

app.listen(`${Number(process.env.PORT)}` || 4545, () => {
    console.log(`Server is running on port ${Number(process.env.PORT)}`);
});