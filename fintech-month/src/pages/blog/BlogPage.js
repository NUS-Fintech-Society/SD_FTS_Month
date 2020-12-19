import React from 'react';
import EventButtons from './components/EventButtons';
import './BlogPage.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var today = new Date(),
    date = monthNames[today.getMonth()] + ' ' + today.getFullYear();

function BlogPage() {
    return (
        <>
            <div class='row'>
                <h1>Blog:</h1>
                <h1>{date}</h1>
            </div>
            <EventButtons />
        </>
    );
}

export default BlogPage;