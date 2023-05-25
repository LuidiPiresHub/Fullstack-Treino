import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute.js';

const app = express();
app.use(cors());

const port = 3001;

app.use('/users', userRoute);

app.listen(port, () => console.log(`App is runing on port ${port}`));
