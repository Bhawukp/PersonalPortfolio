import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>I've worked with these technologies</SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           React.js
           <br/>
           HTML
           CSS JavaScript
           <br/>
           React Native

         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
       <ListContainer>
         <ListTitle>DataBase</ListTitle>
         <ListParagraph>
           Experience with <br/>
           SQL
           
           

         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
       <ListContainer>
         <ListTitle>Programming</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Java
           <br/>
           Basic familarity with C++ and Python
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
       <ListContainer>
         <ListTitle>Softwares and Theoratical Knowledge</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Git GitHub
           <br/>
           Linux Operating System
           <br/>
           Microsoft Tools
           <br/>
           Firebase
           <br/>
           Theoractical knowledge of <br/>
           Operating System
           <br/>
           DBMS

         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>

   

 </Section>
);

export default Technologies;
