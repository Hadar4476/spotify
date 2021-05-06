// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';

export const getAccessUrl = () => {
  const clientId = 'a4a81c1877834bfcad9a6f2fbd4b7bb5';
  const redirectUri = 'http://localhost:3000/';
  const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
  ];

  const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`;

  return accessUrl;
};

export const getTokenFromUrl = () => {
  const token = window.location.hash
    .substring(1)
    .split('&')
    .reduce((accumulator, item) => {
      let parts = item.split('=');
      accumulator[parts[0]] = decodeURIComponent(parts[1]);
      return accumulator;
    }, {});
  return token;
};
