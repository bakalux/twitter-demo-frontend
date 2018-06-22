import React from "react";
import styled from "styled-components";
import TitleLink from "./TitleLink";
import Trend from "./Trend";

const TrendsWrapper = styled.section`
  background-color: #fff;
  padding: 2% 2%;
  margin-top: 4%;
`;

const Naming = styled.h4`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 10px 10px;
  color: black;
  margin: 0;
`;

const Trends = () => {
  return (
    <TrendsWrapper>
      <Naming>United Kingdom Trends </Naming>&bull;{" "}
      <TitleLink>Change</TitleLink>
      <Trend hashTag="#BringYourDogToWorkDay" />
      <Trend hashTag="#FridayFeeling" tweetCount={12100} />
      <Trend
        hashTag="#BrexitAnniversary"
        description="It's one year since the UK voted to leave the European Union"
      />
      <Trend hashTag="HMS Queen Elizabeth" tweetCount={1036} />
      <Trend hashTag="Joe Budden" tweetCount={1036} />
      <Trend hashTag="Trident" tweetCount={6136} />
    </TrendsWrapper>
  );
};

export default Trends;
