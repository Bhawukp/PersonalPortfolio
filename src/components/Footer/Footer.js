import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+91 98762-77899">+91 987-627-7899
        </LinkItem>
       </LinkColumn>
       <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:bhawukp@gmail.com">bhawukp@gmail.com
        </LinkItem>
       </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I want to put a ding in the universe</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://github.com/Bhawukp">
      <AiFillGithub size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bhawuk-pahuja-1110">
        <AiFillLinkedin size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_bhawukpahuja_/?hl=en">
        <AiFillInstagram size="3rem"/>

      </SocialIcons>
      </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
