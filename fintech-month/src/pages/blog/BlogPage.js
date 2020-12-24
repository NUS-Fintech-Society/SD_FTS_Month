import React from 'react';
import { Grid } from '@material-ui/core';
import EventButtons from './components/EventButtons';
import './BlogPage.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var today = new Date(),
    date = monthNames[today.getMonth()] + ' ' + today.getFullYear();

function BlogPage() {
    return (
        <div className='blog-main'>
            <Grid container className='blog-row'>
                <Grid item xs={0} md={2} lg={1} />

                <Grid item xs={12} md={4} lg={5} direction="column">Blog</Grid>
                <Grid item xs={12} md={4} lg={5} direction="column">{date}</Grid>

                <Grid item xs={0} md={2} lg={1} />
            </Grid>
            <EventButtons />
        </div>
    );
}

export default BlogPage;