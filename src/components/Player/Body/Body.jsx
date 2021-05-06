import React from 'react';
import { connect } from 'react-redux';

import classes from './Body.module.css';

const Body = (props) => {
  const { user } = props;

  return (
    <div className={classes.Body}>
      <div className={classes.BodyInfo}>
        <img src={user?.images[0]?.url} alt={user?.display_name} />
        <div className={classes.BodyInfoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Body);
