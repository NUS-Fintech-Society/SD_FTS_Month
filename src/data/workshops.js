const INTRO_WORKSHOPS = [
  {
    id: 1,
    date: '05 Jan 2022',
    time: '1100-1200',
    title: 'Natural Language Processing in Fintech',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Machine Learning Department',
        company: 'NUS Fintech Society',
      },
    ],
    moderators: [],
    image: '/workshops/placeholder-intro.jpg',
  },
  {
    id: 2,
    date: '06 Jan 2022',
    time: '1100-1200',
    title: 'Model Interpretability in Risk Analytics',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Machine Learning Department',
        company: 'NUS Fintech Society',
      },
    ],
    moderators: [],
    image: '/workshops/model-interpretability-in-risk-analytics.jpg',
  },
  {
    id: 3,
    date: '07 Jan 2022',
    time: '1100-1200',
    title: 'Intro to Blockchain',
    location: {
      venue: 'Zoom',
      link: 'https://us02web.zoom.us/j/84096994842',
    },
    speakers: [
      {
        name: 'Blockchain Department',
        company: 'NUS Fintech Society',
      },
    ],
    moderators: [],
    image: '/workshops/intro-to-blockchain.jpg',
  },
  {
    id: 4,
    date: '08 Jan 2022',
    time: '1100-1200',
    title: 'Web2 to Web3 : The new Internet',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Blockchain Department',
        company: 'NUS Fintech Society',
      },
    ],
    moderators: [],
    image: '/workshops/web2-to-web3.jpg',
  },
]

const INDUSTRY_WORKSHOPS = [
  {
    id: 5,
    date: '10 Jan 2022',
    time: '1600-1700',
    title: 'Intro to Asset Tokenisation',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Eric Neo',
        company: 'HG Exchange',
      },
      {
        name: 'Lee Jun Wei',
        company: 'HG Exchange',
      },
    ],
    moderators: [],
    image: '/workshops/intro-to-asset-tokenisation.jpg',
  },
  {
    id: 6,
    date: '11 Jan 2022',
    time: '1600-1700',
    title: 'Stocks vs Crypto',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Jason Liew',
        company: 'Bybit',
      },
    ],
    moderators: [],
    image: '/workshops/placeholder-industry.jpg',
  },
  {
    id: 7,
    date: '11 Jan 2022',
    time: '2000-2100',
    title: 'Getting started with Stellar',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Anke Liu',
        company: 'Stellar',
      },
      {
        name: 'Tyler van der Hoeven',
        company: 'Stellar',
      },
    ],
    moderators: [],
    image: '/workshops/getting-started-with-stellar.jpeg',
  },
  {
    id: 8,
    date: '12 Jan 2022',
    time: '1600-1700',
    title:
      'How Revolut makes foreign exchange faster and cheaper than traditional money changers?',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Arjun Khanna',
        company: 'Revolut',
      },
    ],
    moderators: [],
    image: '/workshops/how-revolut.png',
  },
  {
    id: 9,
    date: '12 Jan 2022',
    time: '2000-2100',
    title: 'Introduction to Market Making',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'John Gu',
        company: 'AlphaLab Capital',
      },
    ],
    moderators: [],
    image: '/workshops/token-market-making.jpg',
  },
  {
    id: 10,
    date: '13 Jan 2022',
    time: '1600-1700',
    title: 'Navigating the Multi-Chain Landscape',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Sam Wong',
        company: 'OIO Singapore',
      },
    ],
    moderators: [],
    image: '/workshops/navigating-the-multi-chain-landscape.jpg',
  },
  {
    id: 11,
    date: '13 Jan 2022',
    time: '2000-2100',
    title: 'NFT - State of the Art',
    location: {
      venue: 'Zoom',
      link: '',
    },
    speakers: [
      {
        name: 'Tomohiro Nakamura',
        company: 'StartBahn',
      },
      {
        name: 'Daniel Lui',
        company: 'StartBahn',
      },
    ],
    moderators: [],
    image: '/workshops/nft-state-of-art.jpg',
  },
]

const SYMPOSIUMS = [
  {
    id: 12,
    date: '10 Jan 2022',
    time: '2000-2130',
    title: 'FinTech for Personal Finance',
    location: {
      venue: 'TBC',
      link: '',
    },
    speakers: [
      {
        name: 'Igneus Terrenus',
        company: 'Bybit',
      },
      {
        name: 'Gavin Chia',
        company: 'Futu Singapore',
      },
      {
        name: 'Amanda Ong',
        company: 'Stashaway',
      },
      {
        name: 'Deepak Khanna',
        company: 'Revolut',
      },
    ],
    moderators: [
      {
        name: 'Su Shane Yeoh',
        company: 'NUS Fintech Society',
      },
    ],
    image: '/workshops/fintech-for-personal-finance.jpg',
  },
  {
    id: 13,
    date: '14 Jan 2022',
    time: '1830-2000',
    title: 'Careers in Fintech (General)',
    location: {
      venue: 'Shaw Foundation Alumni House',
      link: '',
    },
    speakers: [
      {
        name: 'Ernest Teh Jia En',
        company: 'Spenmo',
      },
      {
        name: 'David Z Wang',
        company: 'Helicap',
      },
      {
        name: 'E Teng Tay',
        company: 'SeaMoney',
      },
    ],
    moderators: [
      {
        name: 'Prof. Keith Carter',
        company: 'NUS Fintech Labs',
      },
    ],
    image: '/workshops/placeholder-symposium.jpg',
  },
  {
    id: 14,
    date: '14 Jan 2022',
    time: '1930-2130',
    title: 'Careers in Crypto',
    location: {
      venue: 'UTown Auditorium 2',
      link: '',
    },
    speakers: [
      {
        name: 'Helen Liu',
        company: 'Bybit',
      },
      {
        name: 'Arthur Cheong',
        company: 'DeFiance Capital',
      },
      {
        name: 'Gene Yan',
        company: 'Octava',
      },
      {
        name: 'Tomas Molin',
        company: 'Messari',
      },
    ],
    moderators: [
      {
        name: 'Hum Qing Ze',
        company: 'Tribe',
      },
    ],
    image: '/workshops/careers-in-crypto.jpg',
  },
]

export default {
  INTRO_WORKSHOPS,
  INDUSTRY_WORKSHOPS,
  SYMPOSIUMS,
}
