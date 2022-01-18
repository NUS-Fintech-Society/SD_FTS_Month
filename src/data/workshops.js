const INTRO_WORKSHOPS = [
  {
    id: 1,
    date: '05 Jan 2022',
    time: '1100-1200',
    title: 'Natural Language Processing in Fintech',
    location: {
      venue: 'Zoom',
      link: '',
      recording: 'https://www.youtube.com/watch?v=s2d0-3UZ_-E',
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
      recording: 'https://www.youtube.com/watch?v=tAnBAu1ZJhE',
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
      link: '',
      recording: 'https://www.youtube.com/watch?v=ReclZ76jZxA',
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
    title: 'Web2 to Web3 : The New Internet',
    location: {
      venue: 'Zoom',
      link: '',
      recording: 'https://www.youtube.com/watch?v=6VPXcTdx_1U',
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
      recording: 'https://www.youtube.com/watch?v=QjKifvvNxnM',
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
      recording: 'https://www.youtube.com/watch?v=GR9oGFZfadA',
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
    title: 'Getting Started with Stellar',
    location: {
      venue: 'Zoom',
      link: '',
      recording: 'https://www.youtube.com/watch?v=vbHCUMamLQw',
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
      recording: 'https://www.youtube.com/watch?v=tnQImxBbnK0',
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
      recording: 'https://www.youtube.com/watch?v=WXUxbj4SdXk',
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
      recording: 'https://www.youtube.com/watch?v=4nmUZuAV8mg',
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
      recording: 'https://www.youtube.com/watch?v=mWsgUF_yysg',
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
  {
    id: 12,
    date: '19 Jan 2022',
    time: '2000-2100',
    title: 'Crypto for Decentralized Systems',
    location: {
      venue: 'Zoom',
      link: 'https://nus-sg.zoom.us/j/88235354502?pwd=WGhzeE44bklDNXU5NFNiQ0dmSURUZz09',
      recording: '',
    },
    speakers: [
      {
        name: 'Kareem Shehata',
        company: 'NUS Crystal Center',
      },
    ],
    moderators: [],
    image: '/workshops/crystal-center-1.jpg',
  },
  {
    id: 13,
    date: '19 Jan 2022',
    time: '2100-2200',
    title: 'Decentralized Social Networks',
    location: {
      venue: 'Zoom',
      link: 'https://us02web.zoom.us/j/89930713702?pwd=VC9ScFJndTVSWENvR2VYeTlDWjlZQT09',
      recording: '',
    },
    speakers: [
      {
        name: 'Aashish Kolluri',
        company: 'NUS Crystal Center',
      },
    ],
    moderators: [],
    image: '/workshops/crystal-center-2.jpg',
  },
  {
    id: 14,
    date: '20 Jan 2022',
    time: '2000-2100',
    title: 'Secure and Scalable Smart Contracts',
    location: {
      venue: 'Zoom',
      link: '',
      recording: '',
    },
    speakers: [
      {
        name: 'Ilya Sergey',
        company: 'NUS Crystal Center',
      },
    ],
    moderators: [],
    image: '/workshops/crystal-center-3.jpg',
  },
  {
    id: 15,
    date: '20 Jan 2022',
    time: '2100-2200',
    title: 'Algorithmic Scalability of Blockchain Protocols',
    location: {
      venue: 'Zoom',
      link: '',
      recording: '',
    },
    speakers: [
      {
        name: 'Prateek Saxena',
        company: 'NUS Crystal Center',
      },
    ],
    moderators: [],
    image: '/workshops/crystal-center-4.jpg',
  },
  {
    id: 16,
    date: '21 Jan 2022',
    time: '2000-2100',
    title: 'Distributed Protocol Verification',
    location: {
      venue: 'Zoom',
      link: '',
      recording: '',
    },
    speakers: [
      {
        name: 'Ilya Sergey',
        company: 'NUS Crystal Center',
      },
    ],
    moderators: [],
    image: '/workshops/crystal-center-5.jpg',
  },
  {
    id: 17,
    date: '21 Jan 2022',
    time: '2100-2200',
    title: 'Security of Layer-0 Blockchain Networks',
    location: {
      venue: 'Zoom',
      link: '',
      recording: '',
    },
    speakers: [
      {
        name: 'Muoi Tran',
        company: 'NUS Crystal Center',
      },
    ],
    moderators: [],
    image: '/workshops/crystal-center-6.jpg',
  },
]

const SYMPOSIUMS = [
  {
    id: 18,
    date: '10 Jan 2022',
    time: '2000-2130',
    title: 'FinTech for Personal Finance',
    location: {
      venue: 'Zoom',
      link: '',
      recording: 'https://www.youtube.com/watch?v=ll2Im72V3zs',
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
    id: 19,
    date: '14 Jan 2022',
    time: '1830-2000',
    title: 'Careers in Fintech (General)',
    location: {
      venue: 'Zoom',
      link: '',
      recording: 'https://www.youtube.com/watch?v=TTG1bCAH7NY',
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
    id: 20,
    date: '14 Jan 2022',
    time: '1930-2130',
    title: 'Careers in Crypto',
    location: {
      venue: 'UTown Auditorium 2',
      link: '',
      recording: '',
    },
    speakers: [
      {
        name: 'Jerina Ang',
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
