import React from 'react';

import { withStyles, CssBaseline, Typography } from '@material-ui/core';

import Profile from '../components/Profile';

import styles from '../assets/jss/pages/Home';

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <CssBaseline />

      <Profile />

      <div className={classes.other}>
        <Typography>Skills</Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
