import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { theme } from './LightTheme';
import { ThemeProvider } from '@material-ui/core/styles';




function App() {

    return (
        <ThemeProvider theme={theme}>
            <ResponsiveDrawer />
        </ThemeProvider>

    );
}

export default App;
