const skillsLogoSize = 28;

const styles = (theme) => {
  return {
    card: {
      width: 80,
      padding: 20,
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: `1px 1px 5px ${theme.palette.grey[300]}`,
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    logo: {
      width: skillsLogoSize,
      marginBottom: theme.spacing(1),
    },
  };
};

export default styles;
