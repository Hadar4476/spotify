import React from 'react';

import classes from './Footer.module.css';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterLeft}>
        <img className={classes.AlbumImage} src='' alt='' />
        <div className={classes.SongInfo}>
          <p className={classes.SongName}>Yeah!</p>
          <p className={classes.Singer}>Usher</p>
        </div>
      </div>

      <div className={classes.FooterCenter}>
        <ShuffleIcon className={[classes.GreenIcon, classes.Icon].join(' ')} />
        <SkipPreviousIcon className={classes.Icon} />
        <PlayCircleOutlineIcon className={classes.Icon} />
        <SkipNextIcon className={classes.Icon} />
        <RepeatIcon className={[classes.GreenIcon, classes.Icon].join(' ')} />
      </div>

      <div className={classes.FooterRight}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className={classes.Slider} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
