import React from 'react';
import { connect } from 'react-redux';

import classes from './Header.module.css';

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyWebApi = new SpotifyWebApi();

const Header = (props) => {
  const { user } = props;

  return (
    <div className={classes.Header}>
      <div className={classes.HeaderLeft}>
        <SearchIcon />
        <input placeholder='Search for Artists, Songs' type='text' />
      </div>
      <div className={classes.HeaderRight}>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Header);
