import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TrendWrapper = styled.li`
  padding: 3% 3%;
  display: block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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

const Trend = ({ hashTag, tweetCount, description }) => (
  <TrendWrapper>
    <StyledLink to={`/search?q=${hashTag}`}>
      {hashTag}
    </StyledLink>
    {tweetCount && (
    <TweetCount>
      {`${tweetCount} Tweets`}
    </TweetCount>
    )}
    {description && (
    <TrendDescription>
      {description}
    </TrendDescription>
    )}
  </TrendWrapper>
);

export default Trend;
