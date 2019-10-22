const sectionalRadius = 40;

const styles = (theme) => {
  return {
    container: {
      height: '100vh',
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      flexDirection: 'column',
    },
    other: {
      borderTopLeftRadius: sectionalRadius,
      borderTopRightRadius: sectionalRadius,
      backgroundColor: theme.palette.common.white,
      flexGrow: 1,
      padding: 40,
    },
  };
};

export default styles;
