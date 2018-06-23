import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Statistics from "./Statistics";
import TweetButton from "./TweetButton";
import ProfileCard from "./ProfileCard";
import Tweet from "./Tweet";
import Followers from "./Followers";
import Photos from "./Photos";
import WhoToFollow from "./WhoToFollow";
import Trends from "./Trends";
import Footer from "./Footer";

const Wrapper = styled.section`
  width: 100%;
  font-family: Helvetica;
  font-size: 1rem;
  color: #667580;
  overflow-x: hidden;
`;

const BitMap = styled.img`
  width: 100%;
  height: 45vh;
`;

const StatBar = styled.div`
  padding-top: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px #b0b8be;
  display: flex;
`;

const ProfileImage = styled.div`
  display: inline-block;
  margin-left: 9%;

  &:hover {
    cursor: pointer;
  }
`;

const MainAvatar = styled.img`
  z-index: 99;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  left: 12vw;
  top: 43vh;

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

const ProfilePage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Twitter | Every Interaction</title>
        <meta
          name="description"
          content="The latest tweets from Every Interaction"
        />
      </Helmet>
      <Header />
      <BitMap src={process.env.PUBLIC_URL + "/img/bitmap.png"} />
      <StatBar>
        <ProfileImage>
          <MainAvatar src={process.env.PUBLIC_URL + "/img/Avatar.png"} />
        </ProfileImage>
        <Statistics
          tweets={8081}
          following={721}
          followers={1815}
          likes={460}
          lists={2}
        />
        <TweetButton follow>Follow</TweetButton>
      </StatBar>
      <MainSection>
        <div className="row">
          <div className="col-xl-offset-1 col-lg-offset-1 col-xl-2 col-lg-2">
            <ProfileCard
              profileName="Every Interaction"
              username="EveryInteract"
              description="UX Design studio focussed problem solving creativity. Design to us is
        how can we make things &quot;work&quot; amazing."
              profileLink="everyinteraction.com"
              joined="8 May 2008"
              verified
              following
            />
            <Followers />
            <Photos />
          </div>
          <div className="col-lg-6 col-xl-6">
            <Feed>
              <FeedHeader>
                <FeedHeaderLink active to="/EveryInteract">
                  Tweets
                </FeedHeaderLink>
                <FeedHeaderLink to="/EveryInteract/with_replies">
                  Tweets & replies
                </FeedHeaderLink>
                <FeedHeaderLink to="/EveryInteract/media">Media</FeedHeaderLink>
              </FeedHeader>
              <Tweet
                pinned
                avatar="EI-Avatar.png"
                profileName="Every Interaction"
                username="EveryInteract"
                date="2 Mar 2015"
                text="We've made some more resources for all your wonderful 
                    #design folk
                      <a href='https://everyinteraction.com/resources/'>everyinteraction.com/resources/</a> #webdesign  #UI"
                img="img.png"
                retweets={17}
                likesCount={47}
                liked
              />
              <Tweet
                avatar="EI-Avatar.png"
                profileName="Every Interaction"
                username="EveryInteract"
                date="23h"
                text="Our new website concept; Taking you from... @ Every Interaction <a href='https://instagram.com/p/BNFGrfhBP3M'>instagram.com/p/BNFGrfhBP3M</a>"
                comments={1}
                retweets={4}
                likesCount={2}
              />
              <Tweet
                avatar="EI-Avatar.png"
                profileName="Every Interaction"
                username="EveryInteract"
                date="Nov 18"
                text="Variable Web Fonts are coming and will open a world of opportunities for weight use online"
                hasArticle
                articleImage="article-image.png"
                articleTitle="The Future of Web Fonts"
                articleDescription="We love typefaces. They give our sites and applications personalized feel. They
                 convey the information and tell a story. They establish information hierarchy. But they're..."
                articleLink="vilijamis.com"
              />
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
};

export default ProfilePage;
