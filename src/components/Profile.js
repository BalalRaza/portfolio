import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import {
  CommentOutlined,
  MoreVertOutlined,
} from '@material-ui/icons';

import styles from '../assets/jss/components/Profile';

function Profile(props) {
  const { classes } = props;

  return (
    <div className={classes.profile}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.grow} />
        <IconButton className={classes.menuButton}>
          <CommentOutlined />
        </IconButton>
        <IconButton className={classes.menuButton}>
          <MoreVertOutlined />
        </IconButton>
      </Toolbar>
      <div className={classes.basicProfile}>
        <div className={classes.imageSquare} />
        <div className={classes.sideSquare}>
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.name}
          >
            Md Balal Raza
          </Typography>
          <Typography variant="body1" gutterBottom>
            Software Engineer
          </Typography>
          <div className={classes.grow} />
          <Typography variant="body1" color="textSecondary">
            Hyderabad, India
          </Typography>
        </div>
      </div>

      <Typography className={classes.profileBio}>
        A JavaScript ecosystem enthusiast. Over 2 years
        experience in building scalable system in fintech domain.
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Profile);
