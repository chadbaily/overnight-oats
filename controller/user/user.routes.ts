// This file takes requests and reaches out to external resources if necessary
import express, { Request, Response } from 'express';

export const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
  // res.json({ success: true });

  const temp = {
    name: "chad"
  }

  res.send(temp);
});
