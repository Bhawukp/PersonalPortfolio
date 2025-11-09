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
        I'm <strong>Bhawuk Pahuja</strong>, a <strong>Software Engineer</strong> building
        high-performance <strong>React</strong> apps for <strong>Smart TVs</strong> and the web.
        Passionate about clean design, speed, and innovation.
      </SectionText>
      <Button onClick={()=> window.location="https://www.linkedin.com/in/bhawuk-pahuja-1110"}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;