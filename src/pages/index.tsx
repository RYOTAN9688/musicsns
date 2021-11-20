import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useCallback } from 'react';
import Button from '../components/atoms/Button';
import InputText from '../components/atoms/InputText';
const generateRandomString = (length: number): string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const Home = ({ loginPath }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const login = useCallback(() => {
    window.location.href = loginPath;
  }, [loginPath]);
  return (
    <>
      <InputText placeholder='アルバム・アーティスト名・曲名を入力してください' />
      <Button size='large' onClick={login}>
        Sign in Spotify
      </Button>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const scopes: string =
    'streaming user-read-email user-read-private playlist-modify-public playlist-modify-private';
  const state: string = generateRandomString(16);
  const params = new URLSearchParams();
  params.append('client_id', process.env.CLIENT_ID as string);
  params.append('response_type', 'code');
  params.append('redirect_uri', process.env.RETURN_TO as string);
  params.append('scope', scopes);
  params.append('state', state);
  return {
    props: { loginPath: `https://accounts.spotify.com/authorize?${params.toString()}` },
  };
};

export default Home;
