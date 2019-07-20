import React from 'react';
import Profile from './pages/profile'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from './share/theme'
import useGlobalStyles from './share/hooks/useGlobalStyles'

function App() {
  useGlobalStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Profile />
    </ThemeProvider>
  );
}

export default App;
