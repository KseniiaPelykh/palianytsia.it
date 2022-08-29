import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from '../nav/index.js'
import { Box, Typography, Title } from '@mui/material';
import { useTranslate } from 'react-polyglot';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      }
    }
  });

const PageLayout = ({children, ...props}) => {
    const ChangeLangOnClick = (lang) => {
        const {setLocaleCallback} = props;
        setLocaleCallback(lang)
    }
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar ChangeLangOnClick={ChangeLangOnClick}>
            </ResponsiveAppBar>
            <Box sx={{ paddingTop: { md: '68px', xs: '56px' }, paddingBottom: '40px' }} >
                {children}
            </Box>
            
        </ThemeProvider>
    )
}

export default PageLayout;