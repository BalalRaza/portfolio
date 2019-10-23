import orange from '@material-ui/core/colors/orange';

const style = (theme) => {
  return {
    root: theme.section.root,
    heading: theme.section.heading,
    experience: {
      backgroundColor: orange[200],
    },
    stepper: {
      backgroundColor: 'transparent',
    },
    stepLabel: theme.typography.body1,
    stepContent: {
      borderLeft: `1px solid ${theme.palette.common.black}`,
    },
    lastStepContent: {
      borderLeft: 'none',
    },
  };
};

export default style;
