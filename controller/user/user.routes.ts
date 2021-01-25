// This file takes requests and reaches out to external resources if necessary
import express, { Request, Response } from 'express';
import { MusicService } from '../controller/types';

export const userRouter = express.Router();

userRouter.get('/musicServices', (req: Request, res: Response) => {
  // res.json({ success: true });

  const temp: MusicService[] = [
    {
      displayName: 'Spotify',
      serviceName: 'spotify',
      serviceText: 'Here is some info about Spotify!!',
    },
    {
      displayName: 'Apple Music',
      serviceName: 'appleMusic',
      serviceText: 'Here is some info about Apple Music!!!',
    },
  ];

  res.send(temp);
});
