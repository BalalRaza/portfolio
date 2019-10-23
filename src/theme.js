import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const section = {
  borderRadius: 40,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
  section: {
    root: {
      borderTopLeftRadius: section.borderRadius,
      borderTopRightRadius: section.borderRadius,
      backgroundColor: grey[200],
      flexGrow: 1,
      padding: section.borderRadius,
      '&:not(:first-child)': {
        marginTop: -section.borderRadius,
      },
      '&:not(:last-child)': {
        paddingBottom: section.borderRadius * 2, 
      },
    },
    borderRadius: 40,
    heading: {
      fontWeight: 700,
      paddingBottom: 20,
    },
  },
});

export default theme;
