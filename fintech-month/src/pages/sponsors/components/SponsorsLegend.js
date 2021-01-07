import React from 'react';
import '../SponsorsPage.css';

function SponsorsLegend() {
    return (
        <div class='sidenav'>
            <h1>Our Sponsors</h1>
            <a href='/sponsors/fintechlab'>FinTech Lab</a>
            <hr />
            <a href='/sponsors/fundedhere'>FundedHere</a>
            <hr />
            <a href='/sponsors/bnpp'>BNPP</a>
            <hr />
            <a href='/sponsors/stanley'>Prof Stanley</a>
            <hr />
            <a href='/sponsors/genping'>Mr Liu Genping</a>
            <hr />
        </div>
    );
}

export default SponsorsLegend;