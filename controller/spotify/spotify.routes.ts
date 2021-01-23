// This file takes requests and reaches out to external resources if necessary
import express, { Request, Response } from 'express';
import querystring from 'querystring';
import dotenv from 'dotenv';
import { SpotifyService } from './spotify.service';

// initialize configuration
dotenv.config();

// Export the router
export const userRouter = express.Router();

// Set up the used variables
const spotifyService = new SpotifyService();
const stateKey = 'spotify_auth_state';

userRouter.get('/login', (req: Request, res: Response) => {
  // res.json({ success: true });

  const state = spotifyService.generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope = 'user-read-private user-read-email';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: process.env.REDIRECT_URL,
        state,
      })
  );
});
