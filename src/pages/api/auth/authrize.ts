import { NextApiRequest, NextApiResponse } from 'next';
import { CookieSerializeOptions, serialize } from 'cookie';
import axios from 'axios';
import { SpotifyAuthApiResponse } from '../../../../lib/type/spotifyapi';

export const setCookie = (res: NextApiResponse, name: string, value: unknown) => {
  const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  const options: CookieSerializeOptions = {
    httpOnly: true,
    secure: true,
    path: '/',
  };
  res.setHeader('Set-Cookie', serialize(name, stringValue, options));
};

const authorize = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const code = req.query.code;
    const clientBuffer = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);
    const params = new URLSearchParams({
      code: code as string,
      redirect_uri: process.env.RETURN_TO as string,
      grant_type: 'authorization_code',
    });

    const response = await axios.post<SpotifyAuthApiResponse>(
      'https://accounts.spotify.com/api/token',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${clientBuffer.toString('base64')}`,
        },
      },
    );
    if (response.data.access_token) {
      setCookie(res, 'spotify-token', response.data.access_token);
      res.status(200).redirect('/');
      res.status(200).end();
    }
  } catch (error) {
    console.error(`Error:${error}`);
  }
};

export default authorize;
