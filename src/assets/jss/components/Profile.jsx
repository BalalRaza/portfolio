const profileBoundaryHeight = 80;

const styles = (theme) => {
  return {
    profile: {
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    toolbar: {
      padding: 0,
      marginBottom: 20,
    },
    menuButton: {
      marginLeft: theme.spacing(1),
    },
    basicProfile: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
    },
    imageSquare: {
      width: profileBoundaryHeight,
      height: profileBoundaryHeight,
      borderRadius: 20,
      backgroundColor: 'indianred',
      marginRight: 20,
    },
    sideSquare: {
      height: profileBoundaryHeight,
      display: 'flex',
      flexDirection: 'column',
    },
    grow: {
      flexGrow: 1,
    },
    name: {
      fontWeight: 700,
    },
    profileBio: {
      textAlign: 'justify',
    },
  };
};

export default styles;
