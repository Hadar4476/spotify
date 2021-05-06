import React from 'react';

import classes from './Login.module.css';

import { getAccessUrl } from '../../spotify';

const Login = () => {
  const onNavigateToSpotifyAuth = () => {
    window.location = getAccessUrl();
  };

  return (
    <div className={classes.Login}>
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='spotify-logo'
      />
      <button onClick={onNavigateToSpotifyAuth}>LOGIN WITH SPOTIFY</button>
    </div>
  );
};

export default Login;
