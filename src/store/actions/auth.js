import * as actionTypes from './actionTypes';

export const getSpotifyAccount = (user) => {
  return {
    type: actionTypes.GET_SPOTIFY_ACCOUNT,
    user: user,
  };
};

export const getUserPlaylists = (playlists) => {
  return {
    type: actionTypes.GET_USER_PLAYLISTS,
    playlists: playlists,
  };
};
