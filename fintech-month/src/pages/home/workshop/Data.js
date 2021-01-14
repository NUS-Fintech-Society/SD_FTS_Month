import React from 'react';
import Machine12 from './images/ml12jan.png';
import Machine13 from './images/ml13jan.png';
import Blockchain12 from './images/blockchain12jan.png';
import Blockchain13 from './images/blockchain13jan.png';
import Mranatoly from './images/Mranatoly.jpg';
import Mrjeff from './images/mrjeff1.png';
import Mrdaniel from './images/mrdaniel.png';
import Mrhon from './images/mrhon.jpeg';
import External1 from './images/external1.png';
import External2 from './images/external2.jpg';
import External3 from './images/external3.png';
import External4 from './images/external4.png';
import Mrirwin from './images/mrirwin.jpeg';

export const MachineLearning = [
    {
        title:'Stock Price Prediction',
        content:[
            'Understand the stock market',
            'Methods to predict prices using Machine Learning',
        ],
        image:Machine12,
        date:'12 Jan, 9pm-10.30pm',
    },
    {
        title:'News Headline Sentiment Analysis',
        content:[
            'Understand how news can impact the market',
            'Natural Language Programming',
        ],
        image:Machine13,
        date:'14 Jan, 8pm-9.30pm',
    },
]

export const BlockChain = [
    {
        title:'Understanding Blockchain: Technology Behind Cryptocurrencies',
        content:[
            'Understanding peer to peer transactions of value',
            'Public and private key cryptography',
            'Components of a block',
            'Consensus of mechanisms',
        ],
        image:Blockchain12,
        date:'12 Jan, 7pm-8.30pm',
    },
    {
        title:'Understanding Cryptocurrencies and Their Impacts on Current Financial System',
        content:[
            'Understanding flat money',
            "Cryptocurrency's rise in recent times",
            'Fundraising using cryptocurrencies (ICOs and IEOs)',
            'Is Bitcoin a means of exchange?',
            'Is Bitcoin a store of value?',
        ],
        image:Blockchain13,
        date:'13 Jan, 8pm-9.30pm',
    },
]

export const ExternalWorkshop = [
    {
        title:'BSC Stream Transformations with ParsiQL',
        content:[
            'What are data streams?',
            'How do live data streams function in blockchains?',
            "How to transform live data streams using PARSIQ's manipulation language?"
        ],
        author:'Anatoly Ressin',
        leftImage:External1,
        speakerImage:Mranatoly,
        description:'Chief Blockchain Architect at PARSIQ',
        date:'20 Jan, 8pm-9pm',
    },
    {
        title:'Why Crowdfunding is the preferred choice for Startup Fundraising',
        content:[],
        author:'Mr Daniel Lin',
        leftImage:External2,
        speakerImage:Mrdaniel,
        description: 'Founder of FundedHere, startup and SMEs crowdfunding platform',
        date:'15 Jan, 2pm-3pm',
    },
    {
        title:'Innovative & Design Thinking: Perspective from BNP Paribas',
        content:[
            'Introduction to Innovation (BNPP Innovation Lab)',
            'Transaction banking & our approach to co-creation',
            'Problems in transaction banking today & our call for responses',
            'Q&A',
        ],
        author:'Mr Hon Kok Wai',
        leftImage:External3,
        speakerImage:Mrhon,
        description:'Runs market management, pricing and billing functions for the APAC region within BNP Paribas Transaction Banking. Responsibilities include assessment and development of onshore capabilities through platform up-tiering, bank partnership; business development in supporting client conversations and prepositions in pitching to treasury hubs in APAC. His current profesisonal interests are Foreign Exchange Payments, Mobile Money and Alternate payments. He also specialises in Payments and Collections Product Management, and Process Improvement and Revenue Optimization.',
        date:'18 Jan, 2pm-3pm',
    },
    {
        title:'Introduction to Decentralised Finance - benefits & risks of Decentralised Finance (DeFi) to the general public',
        content:[],
        author:'Mr Jeff Zhang (Chang Chi Chang)',
        leftImage: External4,
        speakerImage:Mrjeff,
        description:'The latest Binance Community Manager, Jeff was previously Chief Community Operator with dForce Network and Head of Operations with Wetez, both blockchain companies. He travelled around the world after graduation in 2017 to experience the world before he started working.',
        date:'19 Jan, 8pm-9pm',
    },
    {
        title:'Automated Cryptocurrency Trading',
        content:[
            'Introduction to Technical Analysis',
            'Introduction to Automated Trading',
            'Current Solutions',
        ],
        author:'Mr Irwin Chee',
        leftImage:External4,
        speakerImage:Mrirwin,
        description:'Associate Partner at Novum Capital, a blockchain advisory and investment firm. Irwin has extensive experience in trading and investing in cryptocurrencies.',
        date:'18 Jan, 3pm-4pm'
    },
]

   