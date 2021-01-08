import React from 'react';
import Rubric from './images/Rubric.png'

export const items = [
    {
      heading:'Hackathon',
      qnas:[
        {
          question:'Who is eligible to take part in the hackathon?',
          answers:[
            "All university and polytechnic students in Singapore are welcome to sign up for the hackathon! You don't necessarily have to be from NUS!",
          ],
        },
        {
          question:'Are there any requirements for the hackathon team formation?',
          answers:[
            'The team should be made up of 2-4 members. Team members need not be from NUS as long as they are tertiary students. Please appoint a team leader to be the main point of contact.',
          ],
        },
        {
          question:'How do we sign up?',
          answers:[
            'Sign-up links will be made available when registration opens. You may retrieve links from our social media (Instagram, Telegram, LinkedIn). ',
            <pre></pre>,
            "Each team should only sign up ",
            <u>once</u>,
            ". Please appoint a team leader and fill up all team members' particulars as stated in the form.",
            <pre></pre>,
            "In case of any changes, do email our team at nusfintech.ops@gmail.com"
          ],
        },
        {
          question:'How many rounds are there in the hackathon?',
          answers:[
            'There are a total of 2 rounds.',
            <pre></pre>,
            "The top 8 teams will be selected from the 1st round of the hackathon and invited to attend our closing ceremony. They will be pitching their prototypes to a panel of distinguished judges who are made up of industry experts and professors to compete for the top prizes."
          ],
        },
        {
          question:'Will the hackathon be conducted remotely?',
          answers:[
            'Yes, the first round will be conducted remotely for all participants.',
            <pre></pre>,
            'However, the final round will be conducted physically in NUS for the top 8 finalist teams. For the teams that did not make it to the final round, we will be conducting a Live Stream event via (platform) for you. More details about the final round will be sent to all team leaders via email closer to date.',
          ],
        },
        {
          question:'What should the format of the file be for the hackathon submission?',
          answers:[
            'Please prepare both a 10-page pitch deck and a Github link for submission.'
          ],
        },
        {
          question:'Where do we submit our files for the hackathon?',
          answers:[
            'Please send the 10-page pitch deck and Github link to nusfintech.ops@gmail.com by 24 January, 2359. Please remember to enable sharing with nusfintech.ops@gmail.com or allow anyone on the internet to access the link.'
          ],
        },
        {
          question:'What are the judging criterias?',
          answers:[
            <ul>
              <li>Simplicity of solution, accommodate client workflow</li>
              <ul>
                <li>Does the technical features help in improving the current workflow?</li>  
                <li>Does the features work as described?</li>
                <li>Is the slide deck structured and organised (Solutions and implementations are easy to understand)</li>
              </ul>
              <li>User friendliness</li>
              <ul>
                <li>Is the solution appropriate for use by the target audience?</li>
                <li>How intuitive is it to use?</li>
                <li>How reliable is it to use?</li>
              </ul>
              <li>How effective and robust the solution is and what kind of analysis will be used to solve?</li>
              <ul>
                <li>How creative is the solution?</li>
                <li>How feasible is the product/solution roadmap?</li>
                <li>How costly is the proposed solution?</li>
              </ul>
            </ul>,
            <img src={Rubric}/>

          ],
        },
      ],
    },
    {
      heading:'Workshops',
      qnas:[
        {
          question:'How do we sign-up?',
          answers:[
            'Sign-up links will be made available when the registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn).',
            <pre></pre>,
            'There will be 2 separate forms, one for beginner workshops and another for external workshops. Under each form, please indicate all the sessions you are keen in attending. Due to limited slots, we would like everyone to fully commit to the sessions that they have signed up for. Hence, if you fail to attend any 2 sessions that you have signed up for, you will be banned from attending future sessions and your slot will be given to the others.',
            <pre></pre>,
            'Please sign up individually and only submit each of the forms ',
            <u>once</u>,
            '.'
          ],
        },
        {
          question:'Will the workshops be conducted virtually?',
          answers:[
            'Yes, both the beginner and external workshops will be conducted virtually via Zoom.'
          ],
        },
        {
          question:'Are the workshops compulsory for hackathon participants?',
          answers:[
            'No. The workshops are meant to better equip all participants, regardless of their background, for the hackathon. If you do not require any additional help/guidance, you need not sign up for the workshops.'
          ],
        },
        {
          question:'If I am not participating in the hackathon, can I still sign up for any of the workshops?',
          answers:[
            "Non-hackathon participants may still sign up for any of the workshops but please note that you'll not be guaranteed a slot as priority will be given to hackathon participants. In the event that we have leftover slots for any of the workshops, we will be opening them up to non-hackathon participants on a FCFS basis."
          ],
        },
        {
          question:'How many workshops can I sign up for?',
          answers:[
            'There is no limit to the maximum number of workshops you can sign up for.'
          ],
        },
      ]
    },
    {
      heading:'Closing ceremony',
      qnas:[
        {
          question:'Will all hackathon participants be physically present at the venue?',
          answers:[
            'No, in view of COVID-19 restrictions, only the top 8 finalist teams will be invited down to the venue. However, a live stream event will be made available to the rest of the participants.',
          ],
        },
        {
          question:'Is it compulsory for all hackathon participants to join in the Live Stream?',
          answers:[
            'Yes. Come join us for an exciting lineup of pitches made by our top 8 finalist teams to a panel of external judges and get to claim your e-vouchers from us at the end of the session!'
          ],
        },
      ]
    },
    {
      heading:'General enquiry',
      qnas:[
        {
          question:'Who do we reach out to if we have more enquiries?',
          answers:[
            'Please email our team at nusfintech.ops@gmail.com.',
          ],
        },
      ]
    }

  ]