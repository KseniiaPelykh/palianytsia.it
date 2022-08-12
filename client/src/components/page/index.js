import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from '../nav/index.js'
import { Box, Typography, Title } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      }
    }
  });

const PageLayout = ({children, ...props}) => {
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar>
            </ResponsiveAppBar>
            <Box sx={{ paddingTop: { md: '68px', xs: '56px' },  }}>
                {children}
            </Box>
            
        </ThemeProvider>
    )
}

export default PageLayout;