import React from 'react';
import { Container } from '@mui/material';

const Section = (props) => {
    const {children} = props
    return(
        <Container maxWidth="false" disableGutters>
                {children}            
        </Container>
    )
}

export default Section;