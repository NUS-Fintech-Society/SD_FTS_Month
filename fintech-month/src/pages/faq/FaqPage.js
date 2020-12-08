import React from 'react';
import Accordion from './Accordion'

function FaqPage(){
  const products = [
    {title:'Hackathon',
     questions: [
      {
        question:'Who is eligible to take part in hackathon?',
        answer: [
        "All university and polytechnic students in Singapore are welcome to sign up for the hackathon!"
        ],
      },
      {
        question:'Are there any requirements for the hackathon team formation?',
        answer: [
        "The team should be made up of 2-4 members. Team members need not be from the same school. Please appoint a team leader to be the main point of contact.",
        ],
      },
      {
        question:'How do we sign-up?',
        answer: [
        "Sign-up links will be made available when registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn).",
        "",
        "Each team should only sign up once. Please appoint a team leader and fill up team members' particulars as stated in the form.",
        ],
      },
      {
        question:'How many rounds are there in the hackathon?',
        answer: [
          "There are a total of 2 rounds.",
          "",
          "Following the first round, our internal judges from Fintech Society will be selecting the top 8 finalist teams.",
          "",
          "These 8 finalist teams will then be invited to attend our closing ceremony held at (venue) where they will be pitching their proposals to a panel of distinguished external judges. After which, the judges will pick the top 3 teams as well as the team with the most outstanding pitch to win attractive prizes.",
        ],
      },
      {
        question:"Will the hackathon be conducted remotely?",
        answer: [
        "Yes, the first round will be conducted remotely for all participants.",
        "",
        "However, the final round will be conducted physically at (venue) for the top 8 finalist teams. For the teams that did not make it to the final round, we will be conducting a Live Stream event via (platform) for you."
      ],
      },
      {
        question:"What should the format of the file be for the hackathon submission?",
        answer: [
        "TBC"
      ],
      },
      {
        question:"Where do we submit our files for the hackathon?",
        answer: [
        "TBC",
        ],
      },
      {
        question:"What are the judging criterias?",
        answer: [
        "TBC",
        ],
      },
      ]
    },
    {title:"Opening ceremony",
    questions: [
      {
        question:"Will the opening ceremony be conducted virtually?",
        answer: [
        "Yes, the opening ceremony will be conducted virtually via (platform). We will be sending out the link via email to all hackathon participants 2-3 days before the opening ceremony."
        ],
      },
      {
        question:"Is it compulsory for all hackathon participants to be present during the opening ceremony?",
        answer: [
          "Yes, all hackathon participants must be present during the opening ceremony as we will be revealing the problem statement.",
          ],
      },
    ],
    },
    {title:"Workshops",
    questions: [
      {
        question:"How do we sign-up?",
        answer: [
        "Sign-up links will be made available when registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn).",
        "",
        "There will be 2 separate forms, one for beginner workshops and another for external workshops. Under each form, please indicate all the sessions that you are keen in attending. Due to limited slots, we would like everyone to fully commit to the sessions that they have signed up for. Hence, if you fail to attend any 2 sessions that you have signed up for, you will be barred from attending future sessions and your slot will be given to the others.",
        "",
        "Please sign up individually and only submit each of the forms once.",
        ],
      },
      {
        question:"Will the workshops be conducted virtually?",
        answer: [
        "Yes, both the beginner and external workshops will be conducted virtually via Zoom.",
        ],
      },
      {
        question:"Are the workshops compulsory for hackathon participants?",
        answer: [
        "No. The workshops are meant to better equip all participants, regardless of their background, for the hackathon. If you do not require any additional help/guidance, you need not sign up for the workshops.",
        ],
      },
      {
        question:"If I am not participating in the hackathon, can I still sign up for any of the workshops?",
        answer: [
        "Non-hackathon participants may still sign up for any of the workshops but please note that you’ll not be guaranteed a slot as priority will be given to hackathon participants. In the event that we have leftover slots for any of the workshops, we will be opening them up to non-hackathon participants on a FCFS basis.",
        ],
      },
      {
        question: "How many workshops can I sign up for?",
        answer: [
          "There is no limit to the maximum number of workshops you can sign up for."
        ]
      }

    ],
    },
    {title:"Closing ceremony",
    questions: [
      {
        question:"Will all hackathon participants be physically present at the venue?",
        answer: [
          "No, in view of COVID-19 restrictions, only the top 8 finalist teams will be invited down to the venue. However, a Live Stream event will be made available to the rest of the participants."
        ],
      },
      {
        question:"Is it compulsory for all hackathon participants to join in the Live Stream?",
        answer: [
          "Yes. Come join us for an exciting lineup of pitches made by our top 8 finalist teams to a panel of external judges and get to claim your e-vouchers from us at the end of the session!",
        ],
      },
    ],
    },
  ]
  return(
  <div className="FaqPage">
    {products.map(product => (
      <Accordion
        title = {product.title}
        questions = {product.questions}
      />
    ))
    }
  </div>
  )
}

export default FaqPage;
