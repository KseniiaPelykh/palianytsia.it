import * as React from 'react';
import Page from '../../components/page'
import Section from '../../components/section';
import { Box, Typography, Title } from '@mui/material';
import { Container } from '@mui/system';
import Link from '@mui/material/Link';

export const MainPage = ({children, ...props}) => {
    return (
        <React.Fragment>
            <Section>
                <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'table', width: '100vw', background: 'url(./images/bg.jpg)', backgroundSize: 'cover'}} disableGutters>
                    <Box sx={{display: 'table-cell', verticalAlign: 'middle', padding: '1rem'}} maxWidth="lg">
                        <Typography variant="h1" component="h2" textAlign="center" fontSize={'4rem'}>Free help with studying and finding a job in IT</Typography>
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
                            <li>Motivation to help Ukrainians impacted by the war</li>
                            <li>Experience in python, node, javascript or react</li>
                        </ul>   
                    </Container>
                </Box>
            </Section>
            <Section>
                <Box sx={{ paddingTop: '5rem' }} disableGutters>
                    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                        <Link
                            href="https://docs.google.com/forms/d/1ZsZFHxemI6tXo6s2TthtUtwYYq54WEGwdMulRK9ODd0"
                            className="btn-join-in-section"
                            target="blank"
                        >
                                Join as a student
                        </Link>
                    </Container>
                </Box>
            </Section>
        </React.Fragment>
    )
}

export default MainPage;
