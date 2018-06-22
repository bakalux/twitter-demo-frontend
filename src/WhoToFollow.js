import React from "react";
import styled from "styled-components";

import TitleLink from "./TitleLink";

import RecommendedAccount from "./RecommendedAccount";

import peopleIcon from "./icons/icon-people.svg";

const WhoToFollowWrapper = styled.section`
  background-color: #fff;
  padding: 2% 2%;
`;
const Naming = styled.span`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 10px 10px;
  color: black;
`;

const WhoToFollow = () => {
  return (
    <WhoToFollowWrapper>
      <Naming>Who to follow</Naming>&bull; <TitleLink>Refresh</TitleLink>&bull;{" "}
      <TitleLink>View All</TitleLink>
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
      <TitleLink>
        <img src={peopleIcon} alt="people" /> Find people you know
      </TitleLink>
    </WhoToFollowWrapper>
  );
};

export default WhoToFollow;
