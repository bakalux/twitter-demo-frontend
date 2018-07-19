import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Statistics from './Statistics';
import TweetButton from './TweetButton';
import ProfileCard from './ProfileCard';
import Followers from './Followers';
import Photos from './Photos';
import WhoToFollow from './WhoToFollow';
import Trends from './Trends';
import Footer from './Footer';

import profile from './data/profiles';
import FollowingFeed from './FollowingFeed';
import FollowersFeed from './FollowersFeed';
import Feed from './Feed';
import LikesFeed from './LikesFeed';
import ListsFeed from './ListsFeed';

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
          <Switch>
            <Route exact path="/:username/following" render={() => <FollowingFeed profile={profile} />} />
            <Route exact path="/:username/followers" render={() => <FollowersFeed profile={profile} />} />
            <Route exact path="/:username/likes" render={() => <LikesFeed profile={profile} />} />
            <Route exact path="/:username/lists" render={() => <ListsFeed profile={profile} />} />
            <Route path="/:username" render={() => <Feed profile={profile} />} />
          </Switch>
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
