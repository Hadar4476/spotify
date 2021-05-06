import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTokenFromUrl } from './spotify';

import * as actions from './store/actions';

// CSS
import './App.module.css';

// COMPONENTS
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import Spinner from './components/UI/Spinner/Spinner';

// SPOTIFYWEBAPI
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyWebApi = new SpotifyWebApi();

const App = (props) => {
  const { user, onGetSpotifyAccount, onGetUserPlaylists } = props;

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const token = hash.access_token;
    if (token) {
      spotifyWebApi.setAccessToken(token);

      spotifyWebApi.getMe().then((user) => onGetSpotifyAccount(user));

      spotifyWebApi
        .getUserPlaylists()
        .then((playlists) => onGetUserPlaylists(playlists));
    }
  }, [onGetSpotifyAccount, onGetUserPlaylists]);

  const isLoggedIn = user ? (
    <Player />
  ) : (
    <React.Fragment>
      <Spinner />
      <Login />
    </React.Fragment>
  );
  return <div className='App'>{isLoggedIn}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSpotifyAccount: (user) => dispatch(actions.getSpotifyAccount(user)),
    onGetUserPlaylists: (playlists) =>
      dispatch(actions.getUserPlaylists(playlists)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
