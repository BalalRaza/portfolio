import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Card from './SkillsCard';

// images
import ReactLogo from '../../assets/images/react.svg';
import JavaScriptLogo from '../../assets/images/javascript.png';
import NodeJSLogo from '../../assets/images/node-js.png';
import ParseLogo from '../../assets/images/parse.png';
import MongoDbLogo from '../../assets/images/mongodb.png';

import styles from '../../assets/jss/components/Skills/Skills';

const skills = [
  { src: ReactLogo, name: 'ReactJS' },
  { src: JavaScriptLogo, name: 'JavaScript' },
  { src: NodeJSLogo, name: 'NodeJS' },
  { src: ParseLogo, name: 'Parse' },
  { src: MongoDbLogo, name: 'MongoDB' },
];

function Skills(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Skills</Typography>
      <div className={classes.grid}>
        {
          skills.map(({ src, name}) => {
            return <Card src={src} alt={name} name={name} />;
          })
        }
      </div>
    </div>
  );
}

export default withStyles(styles)(Skills);
