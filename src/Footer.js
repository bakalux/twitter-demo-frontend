import React from "react";
import styled from "styled-components";

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-top: 20px;
`;
const FooterLink = styled.a`
  &:hover {
    cursor: pointer;
    color: #505866;
  }
`;

const Footer = () => {
  return (
    <FooterText>
      &copy; 2018 Twitter <FooterLink>About</FooterLink>{" "}
      <FooterLink>Help</FooterLink> <FooterLink>Center</FooterLink>{" "}
      <FooterLink>Terms</FooterLink> <FooterLink>Privacy policy</FooterLink>{" "}
      <FooterLink>Cookies</FooterLink> <FooterLink>Ads info</FooterLink>
    </FooterText>
  );
};

export default Footer;
