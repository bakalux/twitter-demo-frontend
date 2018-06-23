import React from "react";
import styled from "styled-components";

import StyledLink from "./StyledLink";

import RecommendedAccount from "./RecommendedAccount";

import peopleIcon from "./icons/icon-people.svg";

const WhoToFollowWrapper = styled.section`
  background-color: #fff;
  padding: 2% 2%;
`;
const Naming = styled.h4`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 10px 10px;
  color: black;
  margin: 0;
`;

const WhoToFollow = () => {
  return (
    <WhoToFollowWrapper>
      <Naming>Who to follow</Naming>&bull; <StyledLink to="/">Refresh</StyledLink>&bull;{" "}
      <StyledLink to="/view_all">View All</StyledLink>
      <RecommendedAccount
        accountName="AppleInsider"
        accountUsername="appleinsider"
        accountImage="Avatar-follow-1.png"
      />
      <RecommendedAccount
        accountName="Creode"
        accountUsername="Creode"
        accountImage="Avatar-follow-2.png"
        verified
      />
      <RecommendedAccount
        accountName="Epiphany Search"
        accountUsername="epiphanysearch"
        accountImage="Avatar-follow-3.png"
      />
      <StyledLink to="/find_people_you_know">
        <img src={peopleIcon} alt="people" /> Find people you know
      </StyledLink>
    </WhoToFollowWrapper>
  );
};

export default WhoToFollow;
