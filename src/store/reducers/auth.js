import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  user: null,
  playlists: [],
};

const getSpotifyAccount = (state, action) => {
  return updateObject(state, { user: action.user });
};

const getUserPlaylists = (state, action) => {
  return updateObject(state, { playlists: action.playlists });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SPOTIFY_ACCOUNT:
      return getSpotifyAccount(state, action);
    case actionTypes.GET_USER_PLAYLISTS:
      return getUserPlaylists(state, action);
    default:
      return state;
  }
};

export default reducer;
