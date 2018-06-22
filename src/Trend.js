import React from "react";
import styled from "styled-components";

const TrendWrapper = styled.section`
  padding: 3% 3%;
  display: block;
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #1da1f2;

  &:hover {
    cursor: pointer;
  }
`;

const TrendDescription = styled.span`
  display: block;
  color: #697787;
  font-size: 0.9rem;
`;

const TweetCount = TrendDescription.extend``;

const Trend = props => {
  const { hashTag, tweetCount, description } = props;
  return (
    <TrendWrapper>
      <StyledLink>{hashTag}</StyledLink>
      {tweetCount && <TweetCount>{tweetCount} Tweets</TweetCount>}
      {description && <TrendDescription>{description}</TrendDescription>}
    </TrendWrapper>
  );
};

export default Trend;
