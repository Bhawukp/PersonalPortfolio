import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio

      </SectionTitle>
      <SectionText>
        Hello My name is Bhawuk Pahuja .I am a 3rd year CSE student at Chitkara University and currently pursuing specialization in Full Stack Development.
        <br/>
        Please allow me to present you CREATIVE ME!
      </SectionText>
      <Button onClick={()=> window.location="https://www.linkedin.com/in/bhawuk-pahuja-1110"}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;