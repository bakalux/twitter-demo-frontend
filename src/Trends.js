import React from 'react';
import styled from 'styled-components';
import TitleLink from './StyledLink';
import Trend from './Trend';
import trends from './data/trends';

const TrendsWrapper = styled.ul`
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

const Trends = () => (
  <TrendsWrapper>
    <Naming>
      {'United Kingdom Trends '}
    </Naming>
    {'&bull; '}
    <TitleLink to="/change">
      Change
    </TitleLink>
    {trends.map(trend => (
      <Trend
        key={trend.id}
        hashTag={trend.hashTag}
        description={trend.description}
        tweetCount={trend.tweetCount}
      />
    ))}
  </TrendsWrapper>
);

export default Trends;
