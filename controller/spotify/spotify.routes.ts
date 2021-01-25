// This file takes requests and reaches out to external resources if necessary
import express, { Request, Response } from 'express';
import request from 'request';
import querystring from 'querystring';
import dotenv from 'dotenv';
import { SpotifyService } from './spotify.service';

// initialize configuration
dotenv.config();

// Export the router
export const spotifyRouter = express.Router();

// Set up the used variables
const spotifyService = new SpotifyService();
const stateKey = 'spotify_auth_state';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URL;

spotifyRouter.get('/test', (req: Request, res: Response) => {
  res.send({ client: clientId, redirect: redirectUri });
});

spotifyRouter.get('/login', (req: Request, res: Response) => {
  // res.json({ success: true });

  const state = spotifyService.generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope = 'user-read-private user-read-email';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
      })
  );
});

spotifyRouter.get('/callback', (req: Request, res: Response) => {
  // your application requests refresh and access tokens
  // after checking the state parameter
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    res.clearCookie(stateKey);
    // There is an issue here
    const buff = Buffer.from(`${clientId}:${clientSecret}`, 'base64');
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: 'Basic ' + (new Buffer(clientId + ':' + clientSecret)).toString('base64'),
      },
      json: true,
    };

    console.log('Here 1');
    request.post(authOptions, (error, response, body) => {
      console.log('Here 2');
      console.log('Error: ' + error);
      console.log('Status Code: ' + response.statusCode);

      if (!error && response.statusCode === 200) {
        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { Authorization: 'Bearer ' + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(options, (error, response, body) => {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          '/#' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        );
      } else {
        res.redirect(
          '/#' +
            querystring.stringify({
              error: 'invalid_token',
            })
        );
      }
    });
  }
});

spotifyRouter.get('/refresh_token', (req: Request, res: Response) => {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const buff = Buffer.from(`${clientId}:${clientSecret}`, 'base64');
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { Authorization: 'Basic ' + buff.toString('base64') },
    form: {
      grant_type: 'refresh_token',
      refresh_token,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});
