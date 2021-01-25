import dotenv from 'dotenv';
import express from 'express';
import { userRouter } from './user/user.routes';
import cors from 'cors';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
// Allow the app to be accessed VIA angular
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at localhost:${PORT}`);
});
