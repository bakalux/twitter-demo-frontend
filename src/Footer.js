import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-top: 20px;
`;
const FooterLink = StyledLink.extend`
  color: grey;
  &:hover {
    cursor: pointer;
    color: #505866;
  }
`;

const Footer = () => {
  return (
    <FooterText>
      &copy; 2018 Twitter <FooterLink to="/about">About</FooterLink>{" "}
      <FooterLink to="/help">Help</FooterLink>{" "}
      <FooterLink to="/center">Center</FooterLink>{" "}
      <FooterLink to="/terms">Terms</FooterLink>{" "}
      <FooterLink to="/privacy_policy">Privacy policy</FooterLink>{" "}
      <FooterLink to="/cookies">Cookies</FooterLink>{" "}
      <FooterLink to="/ads_info">Ads info</FooterLink>
    </FooterText>
  );
};

export default Footer;
