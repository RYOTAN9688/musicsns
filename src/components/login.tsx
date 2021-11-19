import { VFC } from 'react';
import Link from 'next/link';
import login from '../pages/api/auth/login';
login;

export const Login: VFC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link href='/pages/api/auth/login'>
          <a className='btn-spotify'>Login with Spotify</a>
        </Link>
      </header>
    </div>
  );
};
