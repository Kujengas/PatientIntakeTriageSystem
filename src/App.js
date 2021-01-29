import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import {theme} from './LightTheme';
import {ThemeProvider }from '@material-ui/core/styles';


//  <Route path=`/dashboard/:id` component={FacilityDashboard}/>
function App() {
    return (
        <ThemeProvider theme={theme}>
 <ResponsiveDrawer />
</ThemeProvider>
        );
}

export default App;
