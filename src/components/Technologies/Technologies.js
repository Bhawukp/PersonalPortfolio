import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Tools and technologies I work with to build scalable, high-performance media apps.
  </SectionText>

  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          React.js & React Native <br />
          JavaScript (ES6+), HTML, CSS <br />
          Redux, Hooks, Web APIs
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End & Database</ListTitle>
        <ListParagraph>
          Node.js, Express.js <br />
          SQL, Firebase <br />
          RESTful & Fallback APIs
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>Programming</ListTitle>
        <ListParagraph>
          Java, JavaScript <br />
          Familiar with C++ & Python
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>Tools & Concepts</ListTitle>
        <ListParagraph>
          Git & GitHub, Linux, VS Code <br />
          Performance Optimization, DRM, CDN (Velocix) <br />
          OS & DBMS Fundamentals
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>

);

export default Technologies;
