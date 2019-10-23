import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

import styles from '../../assets/jss/components/Skills/SkillsCard';

function SkillsCard(props) {
  const {
    classes,
    src,
    name,
  } = props;

  return (
    <Card className={classes.card}>
      <img src={src} alt={name} className={classes.logo} />
      <Typography variant="caption">{name}</Typography>
    </Card>
  );
}

export default withStyles(styles)(SkillsCard);
