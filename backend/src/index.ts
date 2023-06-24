import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';

dotenv.config();

const app = express();
app.use(cors({ origin: 'https://ecommerce-dev.vercel.app' }));
app.use(express.json());

const port = process.env.PORT;

app.use('/users', userRoute);

app.listen(port, () => console.log(`App is runing on port ${port}`));
