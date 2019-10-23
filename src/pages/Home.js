import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Profile from '../components/Profile';
import Skills from '../components/Skills/Skills';

import styles from '../assets/jss/pages/Home';

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <CssBaseline />

      <Profile />

      <div id="sections">
        <Skills />
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
