import React from 'react';
import { connect } from 'react-redux';

import classes from './Sidebar.module.css';
import SidebarOption from './SidebarOption/SidebarOption';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = (props) => {
  const { playlists } = props;
  console.log(playlists);
  let userPlaylists = null;
  if (playlists.length) {
    userPlaylists = playlists.items.map((playlist) => (
      <SidebarOption title={playlist.name} />
    ));
  }

  return (
    <div className={classes.Sidebar}>
      <img
        className={classes.Logo}
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='spotify-logo'
      />
      <SidebarOption title={'Home'} Icon={HomeIcon} />
      <SidebarOption title={'Search'} Icon={SearchIcon} />
      <SidebarOption title={'Your Library'} Icon={LibraryMusicIcon} />
      <br />
      <strong className={classes.Playlists}>PLAYLISTS</strong>
      <hr />
      {userPlaylists}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.auth.playlists,
  };
};

export default connect(mapStateToProps)(Sidebar);
