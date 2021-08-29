import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Certifications from Hakerrank,Amazon,University of London etc'},
  { number: 14, text: 'Github Repositories', },
  { number: 5 , text: 'Star Coder on Hackerrank with rank <7000', },
  { number: 5, text: 'Projects', },
  { number: 3, text: 'Milestone Achiever at Google Facilitator Program', }

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
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
