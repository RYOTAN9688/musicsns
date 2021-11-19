import type { NextApiRequest, NextApiResponse } from 'next';

const generateRandomString = (length: number): string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const scope: string =
    'streaming user-read-email user-read-private playlist-modify-public playlist-modify-private';
  const redirect_uri = 'http://localhost:3000/api/auth/authrize';
  const state: string = generateRandomString(16);

  let client_id: string = '';
  if (process.env.CLIENT_ID) {
    client_id = process.env.CLIENT_ID;
  } else {
    console.error(
      'Undefined Error: An environmental variable, "SPOTIFY_CLIENT_ID", has something wrong.',
    );
  }

  const auth_query_parameters = new URLSearchParams({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state,
  });

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
};

export default login;
