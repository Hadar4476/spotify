import React from 'react';
import { connect } from 'react-redux';

import classes from './Player.module.css';

import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Player = () => {
  return (
    <div className={classes.Player}>
      <Sidebar />
      <div className={classes.PlayerBody}>
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Player);
