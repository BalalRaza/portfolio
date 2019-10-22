import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
