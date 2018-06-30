import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import profile from './data/profiles';
import Tweet from './Tweet';

const FeedWrapper = styled.section`
  display: inline-block;
  background-color: #ffffff;
  padding: 0;
  margin-left: 5%;
`;

const FeedHeader = styled.div`
  display: block;
  border-bottom: solid 1px #e1e8ed;
  color: #1da1f2;
  padding: 10px 10px;
`;

const FeedHeaderLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 2%;
  font-weight: bold;
  color: #1da1f2;

  &:hover {
    color: black;
    cursor: pointer;
  }
  &.active {
    color: black;
  }
`;

const Feed = () => (
  <FeedWrapper>
    <FeedHeader>
      <FeedHeaderLink className="active" to={`/${profile.username}`}>
        Tweets
      </FeedHeaderLink>
      <FeedHeaderLink to={`/${profile.username}/with-replies`}>
        Tweets & replies
      </FeedHeaderLink>
      <FeedHeaderLink to={`/${profile.username}/media`}>
        Media
      </FeedHeaderLink>
    </FeedHeader>
    {profile.tweets.map(tweet => (
      <Tweet
        key={tweet.id}
        tweet={tweet}
      />
    ))}
  </FeedWrapper>
);

export default Feed;
