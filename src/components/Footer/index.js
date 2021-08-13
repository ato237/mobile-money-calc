import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialLogo,
  SocialIcons,
  SocialIconLinks,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">ATO</SocialLogo>
            <WebsiteRights>
              ATO ©  {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" arial-label="Facebool">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
