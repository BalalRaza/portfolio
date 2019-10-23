import React from 'react';
import clsx from 'clsx';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepConnector,
} from '@material-ui/core';

import styles from '../assets/jss/components/Experiences';

const experiences = [
  {
    designation: 'Software Engineer',
    organisation: 'Finoramic Inc.',
    timePeriod: 'Dec 2017 - Present',
  },
  {
    designation: 'Engineering Intern',
    organisation: 'Finoramic Inc.',
    timePeriod: 'Sep 2017 - Nov 2017',
  },
];

const circleStyles = makeStyles({
  root: {
    marginLeft: 10,
    height: 10,
    width: 10,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
});

const Circle = function(props) {
  const classes = circleStyles();
  return (
    <div className={classes.root}>
      <div className={classes.dot} />
    </div>
  );
};

const Connector = withStyles({
  lineVertical: {
    borderColor: 'black',
  },
})(StepConnector);

function Experiences(props) {
  const { classes } = props;

  return (
    <div className={clsx(classes.root, classes.experience)}>
      <Typography className={classes.heading}>Experience</Typography>
      <Stepper
        orientation="vertical"
        className={classes.stepper}
        connector={<Connector />}
      >
        {
          experiences.map((exp, index) => {
            return (
              <Step key={index} active>
                <StepLabel
                  classes={{
                    label: classes.stepLabel
                  }}
                  icon={<Circle />}
                >
                  {exp.designation}
                </StepLabel>
                <StepContent
                  classes={{
                    root: classes.stepContent,
                    last: classes.lastStepContent,
                  }}
                >
                  <Typography variant="body2">{exp.organisation}</Typography>
                  <Typography color="textSecondary" variant="body2">{exp.timePeriod}</Typography>
                </StepContent>
              </Step>
            );
          })
        }
      </Stepper>
    </div>    
  );
}

export default withStyles(styles)(Experiences);
