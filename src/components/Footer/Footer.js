import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
 CompanyContainer,
 FooterWrapper,
 LinkColumn,
 LinkItem,
 LinkList,
 LinkTitle,
 Slogan,
 SocialContainer,
 SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
 return (
  <FooterWrapper>
   <LinkList>
    <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem href='tel:+254725124074'>072-512-4074</LinkItem>
    </LinkColumn>
    <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href='mailto:nickysalochin@gmail.com'>
      nickysalochin@gmail.com
     </LinkItem>
    </LinkColumn>
   </LinkList>
   <SocialIconsContainer>
    <CompanyContainer>
     <Slogan>Speed and Quality pay than work.</Slogan>
    </CompanyContainer>
    <SocialContainer>
     <SocialIcons href='https://github.com/Salochin5'>
      <AiFillGithub size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://linkedin.com/in/salochin'>
      <AiFillLinkedin size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://www.instagram.com/s.a.l.o.c.h.i.n/'>
      <AiFillInstagram size='3rem' />
     </SocialIcons>
    </SocialContainer>
   </SocialIconsContainer>
  </FooterWrapper>
 );
};

export default Footer;
