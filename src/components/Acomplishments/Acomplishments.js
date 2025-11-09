import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Certifications from HackerRank, Amazon & University of London.' },
  { number: 14, text: 'GitHub repositories and open-source work.' },
  { number: 7000, text: 'Star Coder on HackerRank (Rank <7K).' },
  { number: 5, text: 'Production media streaming projects.' },
  { number: 3, text: 'Milestone Achiever in Google Facilitator Program.' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
