import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StatisticsWrapper = styled.div`
  display: inline-block;
  margin-left: 15%;
  text-align: center;
  font-weight: bold;
  margin-right: 19%;
`;

const LinkLabel = styled.span`
  text-decoration: none;
  display: block;
`;

const LinkValue = styled.span`
  margin-top: 7px;
  display: block;
  font-size: 15px;
`;

const StatLink = styled(NavLink)`
  padding: 10px 25px;
  display: inline-block;
  border-bottom: ${({ active }) => (active ? 'solid 4px #1DA1F2' : 'none')};
  font-size: 1rem;
  font-weight: bold;
  font-family: "Helvetica", sans-serif;
  color: #7f8287;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-bottom: solid 4px #1da1f2;
  }

  &:hover ${LinkValue} {
    color: #1da1f2;
  }

  &.active {
    border-bottom: solid 4px #1da1f2;
  }
  &.active ${LinkValue} {
    color: #1da1f2;
  }
`;

const Statistics = ({ profile }) => {
  const {
    username, statistics: {
      tweets, following, followers, likes, lists,
    },
  } = profile;
  return (
    <StatisticsWrapper>
      <StatLink exact to={`/${username}`}>
        <LinkLabel>
          Tweets
        </LinkLabel>
        <LinkValue>
          {tweets}
        </LinkValue>
      </StatLink>
      <StatLink exact to={`/${username}/following`}>
        <LinkLabel>
          Following
        </LinkLabel>
        <LinkValue>
          {following}
        </LinkValue>
      </StatLink>
      <StatLink exact to={`/${username}/followers`}>
        <LinkLabel>
          Followers
        </LinkLabel>
        <LinkValue>
          {followers}
        </LinkValue>
      </StatLink>
      <StatLink exact to={`/${username}/likes`}>
        <LinkLabel>
          Likes
        </LinkLabel>
        <LinkValue>
          {likes}
        </LinkValue>
      </StatLink>
      <StatLink exact to={`/${username}/lists`}>
        <LinkLabel>
          Lists
        </LinkLabel>
        <LinkValue>
          {lists}
        </LinkValue>
      </StatLink>
    </StatisticsWrapper>
  );
};

export default Statistics;
