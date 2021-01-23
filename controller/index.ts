import dotenv from 'dotenv';
import express from 'express';
import { userRouter } from './user/user.routes';

// initialize configuration
dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at localhost:${PORT}`);
});
