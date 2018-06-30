import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Statistics from './Statistics';
import TweetButton from './TweetButton';
import ProfileCard from './ProfileCard';
import Tweet from './Tweet';
import Followers from './Followers';
import Photos from './Photos';
import WhoToFollow from './WhoToFollow';
import Trends from './Trends';
import Footer from './Footer';

import profile from './data/profiles/everyinteract';

const Wrapper = styled.section`
  width: 100%;
  font-family: Helvetica,sans-serif;
  font-size: 1rem;
  color: #667580;
  overflow-x: hidden;
`;

const BitMap = styled.img`
  width: 100%;
`;

const StatBar = styled.div`
  padding-top: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px #b0b8be;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-height: 65px;
`;

const ProfileImage = styled.div`
  display: inline-block;
  margin-left: 9%;
  margin-top: -5%;

  &:hover {
    cursor: pointer;
  }
`;

const MainAvatar = styled.img`
  z-index: 99;
  height: 200px;
  width: 200px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

const MainSection = styled.section`
  background: #e6ecf0;
  padding: 10px 10px;
  margin-top: 2px;
  min-height: 50vh;
`;

const Feed = styled.section`
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

const ProfilePage = () => (
  <Wrapper>
    <Helmet>
      <title>
        {`Twitter | ${profile.profileName}`}
      </title>
      <meta
        name="description"
        content={`The latest tweets from ${profile.profileName}`}
      />
    </Helmet>
    <Header avatar={profile.avatar} />
    <BitMap src={`${process.env.PUBLIC_URL}/img/bitmap.png`} />
    <StatBar>
      <ProfileImage>
        <MainAvatar src={`${process.env.PUBLIC_URL}/img/Avatar.png`} />
      </ProfileImage>
      <Statistics profile={profile} />
      <TweetButton follow>
        Follow
      </TweetButton>
    </StatBar>
    <MainSection>
      <div className="row">
        <div className="col-xl-offset-1 col-lg-offset-1 col-xl-2 col-lg-2">
          <ProfileCard profile={profile} />
          <Followers followers={profile.followers} />
          <Photos photos={profile.photos} />
        </div>
        <div className="col-lg-6 col-xl-6">
          <Feed>
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
            {profile.tweets.map((tweet, i) => (
              <Tweet
                key={i}
                tweet={tweet}
              />
            ))}
          </Feed>
        </div>
        <div className="col-xl-3 col-lg-3">
          <WhoToFollow />
          <Trends />
          <Footer />
        </div>
      </div>
    </MainSection>
  </Wrapper>
);

export default ProfilePage;
