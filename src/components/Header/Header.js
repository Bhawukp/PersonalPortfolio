import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <a href="#about" style={{display:"flex",alignItems:"center",color:"white",marginBottom:"20px"}}>
        <DiCssdeck size="3rem"/> <Span>Bhawuk Pahuja</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>        
      <li>
        <NavLink href="#about">About</NavLink>
      </li>        
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Bhawukp">
        <AiFillGithub size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bhawuk-pahuja-1110">
        <AiFillLinkedin size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_bhawukpahuja_/?hl=en">
        <AiFillInstagram size="3rem"/>

      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
