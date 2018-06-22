import React from "react";
import styled from "styled-components";
import TitleLink from "./TitleLink";

const TrendsWrapper = styled.section`
  background-color: #fff;
  padding: 2% 2%;
  margin-top: 4%
`;

const Naming = styled.span`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 10px 10px;
  color: black;
`;

const Trend = styled.section`
  padding: 3% 3%;
  display: block;
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #1da1f2;

  &:hover{
    cursor: pointer;
  }
`;

const TrendDescription = styled.span`
  display: block;
  color: #697787;
  font-size: 0.9rem;
`;

const TweetCount = TrendDescription.extend``;
const Trends = () => {
  return (
    <TrendsWrapper>
      <Naming>United Kingdom Trends </Naming>&bull;{" "}
      <TitleLink>Change</TitleLink>
      <Trend>
        <StyledLink>#BringYourDogToWorkDay</StyledLink>
      </Trend>
      <Trend>
        <StyledLink>#FridayFeeling</StyledLink>
        <TweetCount>12.1K Tweets</TweetCount>
      </Trend>
      <Trend>
        <StyledLink>#BrexitAnniversary</StyledLink>
        <TrendDescription>
          It's one year since the UK voted to leave the European Union
        </TrendDescription>
      </Trend>
      <Trend>
        <StyledLink>HMS Queen Elizabeth</StyledLink>
        <TweetCount>1,036 Tweets</TweetCount>
      </Trend>
      <Trend>
        <StyledLink>Joe Budden</StyledLink>
        <TweetCount>1,036 Tweets</TweetCount>
      </Trend>
      <Trend>
        <StyledLink>Trident</StyledLink>
        <TweetCount>6,136 Tweets</TweetCount>
      </Trend>
    </TrendsWrapper>
  );
};

export default Trends;
