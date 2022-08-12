import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from '../nav/index.js'
import Section from '../section';
import { Box, Typography, Title } from '@mui/material';
import { Container } from '@mui/system';


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
            <Section>
                <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'table', width: '100vw', background: 'url(./images/bg.jpg)', backgroundSize: 'cover'}} disableGutters>
                    <Box sx={{display: 'table-cell', verticalAlign: 'middle'}}>
                        <Typography variant="h1" component="h2" textAlign="center" fontSize={'4rem'}>Free help with studing and finding a job in IT</Typography>
                    </Box>
                    
                </Box>
            </Section>
            <Section>
                <Box sx={{ paddingTop: '5rem' }} disableGutters>
                    <Container maxWidth="md">
                        <h2>How we help</h2>
                        <ul>
                            <li>Face to face consultation with en experienced IT professional about your interest 
                                (working in is very diverse, there are different roles and technologies you can work with)</li>
                            <li>Personalized program of online cources and assistanse in passing them</li>
                            <li>Help with resume and profile on LinkedIn</li>
                            <li>Work in joint project using modern tools for teamwork</li>
                        </ul>   
                    </Container>
                    
                </Box>
            </Section>
            <Section>
                <Box sx={{ paddingTop: '5rem' }} disableGutters>
                    <Container maxWidth="md">
                        <h2>Student requirements</h2>
                        <ul>
                            <li>18+</li>
                            <li>Ukrainians impacted by the war</li>
                            <li>No money to pay for the same service</li>
                        </ul>   
                    </Container>
                </Box>
            </Section>
            <Section>
                <Box sx={{ paddingTop: '5rem' }} disableGutters>
                    <Container maxWidth="md">
                        <h2>Mentor requirements</h2>
                        <ul>
                            <li>Experience woking in big tech companies</li>
                            <li>Motvation to help Ukrainians impacted by the war</li>
                            <li>Experience in python, node, javascript or react</li>
                        </ul>   
                    </Container>
                </Box>
            </Section>
            <Section>
                <Box sx={{ paddingTop: '5rem' }} disableGutters>
                    <Container maxWidth="md">
                        <h2>Join as a student</h2>
                        <button>Join</button>   
                    </Container>
                </Box>
            </Section>
            {children}

        </ThemeProvider>
    )
}

export default PageLayout;