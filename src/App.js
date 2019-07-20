import React from 'react';
import ProfilePage from './pages/Profile'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from './share/theme'
import useGlobalStyles from './share/hooks/useGlobalStyles'

function App() {
  useGlobalStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProfilePage />
    </ThemeProvider>
  );
}

export default App;
