import * as React from 'react';
import Page from '../../components/page'
import Section from '../../components/section';
import { Box, Typography, Title } from '@mui/material';
import { Container } from '@mui/system';
import Link from '@mui/material/Link';
import { useTranslate } from 'react-polyglot';

export const MainPage = ({children, ...props}) => {
    const t = useTranslate();
    return (
        <React.Fragment>
            <Section>
                <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', display: 'table', width: '100vw', background: 'url(./images/bg.jpg)', backgroundSize: 'cover'}} disableGutters>
                    <Box sx={{display: 'table-cell', verticalAlign: 'middle', padding: '1rem'}} maxWidth="lg">
                        <Typography variant="h1" component="h2" textAlign="center" fontSize={'4rem'}>{t('mainTitle')}</Typography>
                    </Box>
                    
                </Box>
            </Section>
            <Section>
                <Box sx={{ paddingTop: '5rem' }} disableGutters>
                    <Container maxWidth="md">
                        <h2>{t('help.title')}</h2>
                        <ul>
                            <li>{t('help.text.line_1')}</li>
                            <li>{t('help.text.line_2')}</li>
                            <li>{t('help.text.line_3')}</li>
                            <li>{t('help.text.line_4')}</li>
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
                        <h2>{t('contributors.title')}</h2>
                        <p>{t('contributors.text')}</p>
                        <ul>
                            <li>{t('contributors.ul_1')}</li>
                            <li>{t('contributors.ul_2')}</li>
                            <li>{t('contributors.ul_3')}</li>
                            <li>{t('contributors.ul_4')}</li>
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
                                {t('joinButton')}
                        </Link>
                    </Container>
                </Box>
            </Section>
        </React.Fragment>
    )
}

export default MainPage;
