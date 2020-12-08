import { Container } from '@material-ui/core';
import React from 'react';
import EventButtons from './components/EventButtons';

function BlogPage(){
    return (
        <div>
            <Container> 
                <h1>Blog:</h1>
                <EventButtons></EventButtons>
            </Container>
        </div>
    );
}

export default BlogPage;