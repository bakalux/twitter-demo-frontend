import React from 'react';
import styled from 'styled-components';

import StyledLink from './StyledLink';
import RecommendedAccount from './RecommendedAccount';

import peopleIcon from './icons/icon-people.svg';
import recommendedAccounts from './data/recommendedAccounts';

const WhoToFollowWrapper = styled.ul`
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

const WhoToFollow = () => (
  <WhoToFollowWrapper>
    <Naming>
Who to follow
    </Naming>
&bull;
    {' '}
    <StyledLink to="/">
Refresh
    </StyledLink>
&bull;
    {' '}
    <StyledLink to="/view_all">
View All
    </StyledLink>
    {recommendedAccounts.map((account, i) => (
      <RecommendedAccount
        key={i}
        account={account}
      />
    ))}
    <StyledLink to="/find_people_you_know">
      <img src={peopleIcon} alt="people" />
      {' '}
Find people you know
    </StyledLink>
  </WhoToFollowWrapper>
);

export default WhoToFollow;
