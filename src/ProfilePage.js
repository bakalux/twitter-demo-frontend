import React, { Component } from "react";
import styled from "styled-components";

import Header, { NavLink } from "./Header";
import Statistics from "./Statistics";
import TweetButton from "./TweetButton";
import ProfileCard from "./ProfileCard";

import pinnedIcon from "./icons/Icon_ Pinned.svg";
import commentIcon from "./icons/Icon_ Comments.svg";
import retweetIcon from "./icons/Icon_ Retweet.svg";
import likedIcon from "./icons/Icon_  Liked.svg";
import notLikedIcon from "./icons/Icon_  notLiked.svg";
import envelopeIcon from "./icons/Icon_ Envelope.svg";

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
  left: 12%;
  top: 42%;

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
  margin-left: 15%;
`;

const FeedHeader = styled.section`
  display: block;
  border-bottom: solid 1px #e1e8ed;
  color: #1da1f2;
  padding: 10px 10px;
`;

const Tweet = styled.section`
  display: block;
  margin-top: 10px;
  border-bottom: solid 1px #e1e8ed;
`;

const Pinned = styled.span`
  color: #707e88;
  display: block;
  margin-left: 8%;
  margin-bottom: 1%;
`;

const TweetAvatar = styled.img`
  width: 50px;
  display: inline-block;
  vertical-align: top;

  &:hover {
    cursor: pointer;
  }
`;

const TweetContent = styled.section`
  display: inline-block;
  padding: 10px 10px;
  width: 80%;
`;

const TweetInfo = styled.span`
  font-size: 1rem;
`;

const TweetProfileName = styled.span`
  font-weight: bold;
  color: black;
`;

const TweetUsername = styled.span``;

const TweetDate = styled.span``;

const TweetText = styled.span`
  display: block;
  color: black;
  font-size: 1.3rem;
`;

const TweetImg = styled.img`
  display: block;
  max-width: 100%;
  margin-top: 5px;
`;

const TweetFooter = styled.span`
  padding: 5px 5px;
  display: block;
`;

const TweetFooterItem = styled.span`
  display: inline-block;
  margin-right: 10%;
  color: ${props => (props.liked ? "red" : "inherit")};

  &:hover {
    cursor: pointer;
  }
`;

const TweetArticle = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ArticleImage = styled.img`
  display: inline-block;
  vertical-align: top;
  height: 100%;
`;

const ArticleContent = styled.span`
  padding: 10px 10px;
  display: inline-block;
`;

const ArticleTitle = styled.span`
  color: black;
  font-weight: bold;
`;

const ArticleDescription = styled.span`
  margin-top: 5px;
  display: block;
  font-size: 0.9rem;
`;

const ArticleLink = styled.a`
  display: block;
  color: #707e88;
  font-size: 0.8rem;
`;

class ProfilePage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <BitMap src={process.env.PUBLIC_URL + "/img/bitmap.png"} />
        <StatBar>
          <ProfileImage>
            <MainAvatar src={process.env.PUBLIC_URL + "/img/Avatar.png"} />
          </ProfileImage>
          <Statistics
            tweets="8081"
            following="721"
            followers="1815"
            likes="460"
            lists="2"
          />
          <TweetButton follow>Follow</TweetButton>
        </StatBar>
        <MainSection className="row">
          <div class="col-xl-offset-1 col-lg-offset-1" />
          <div className="col-xl-2 col-lg-2">
            <ProfileCard
              profileName="Every Interaction"
              username="EveryInteract"
              description="UX Design studio focussed problem solving creativity. Design to us is
        how can we make things &quot;work&quot; amazing."
              profileLink="everyinteraction.com"
              joined="8 May 2008"
              verified="true"
            />
          </div>
          <div className="col-lg-6 col-xl-6">
            <Feed>
              <FeedHeader>
                <NavLink active>Tweets</NavLink>
                <NavLink>Tweets & replies</NavLink>
                <NavLink>Media</NavLink>
              </FeedHeader>
              <Tweet>
                <Pinned>
                  <img src={pinnedIcon} alt="Pinned" /> Pinned Tweet
                </Pinned>
                <TweetAvatar
                  src={process.env.PUBLIC_URL + "/img/EI Avatar.png"}
                />
                <TweetContent>
                  <TweetInfo>
                    <TweetProfileName>Every Interaction </TweetProfileName>
                    <TweetUsername>@EveryInteract </TweetUsername>
                    <TweetDate>2 Mar 2015</TweetDate>
                  </TweetInfo>
                  <TweetText>
                    We've made some more resources for all your wonderful{" "}
                    <a>#design</a> folk{" "}
                    <a href="http://www.everyinteraction.com/resources/">
                      everyinteraction.com/resources/
                    </a>{" "}
                    <a>#UI</a>
                    <TweetImg
                      src={process.env.PUBLIC_URL + "/img/Img.png"}
                      alt="Img"
                    />
                  </TweetText>
                  <TweetFooter>
                    <TweetFooterItem>
                      <img src={commentIcon} alt="comment" />
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={retweetIcon} alt="retweet" /> 17
                    </TweetFooterItem>
                    <TweetFooterItem liked>
                      <img src={likedIcon} alt="like" /> 47
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={envelopeIcon} alt="envelope" />
                    </TweetFooterItem>
                  </TweetFooter>
                </TweetContent>
              </Tweet>
              <Tweet>
                <TweetAvatar
                  src={process.env.PUBLIC_URL + "/img/EI Avatar.png"}
                />
                <TweetContent>
                  <TweetInfo>
                    <TweetProfileName>Every Interaction </TweetProfileName>
                    <TweetUsername>@EveryInteract </TweetUsername>
                    <TweetDate>2 Mar 2015</TweetDate>
                  </TweetInfo>
                  <TweetText>
                    Our new website conecept; Taking you from... @Every
                    Interaction{" "}
                    <a href="https://www.instagram.com/p/BNFGrfhBP3M/">
                      instagram.com/p/BNFGrfhBP3M/
                    </a>{" "}
                  </TweetText>
                  <TweetFooter>
                    <TweetFooterItem>
                      <img src={commentIcon} alt="comment" /> 1
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={retweetIcon} alt="retweet" /> 4
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={notLikedIcon} alt="like" /> 2
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={envelopeIcon} alt="envelope" />
                    </TweetFooterItem>
                  </TweetFooter>
                </TweetContent>
              </Tweet>
              <Tweet>
                <TweetAvatar
                  src={process.env.PUBLIC_URL + "/img/EI Avatar.png"}
                />
                <TweetContent>
                  <TweetInfo>
                    <TweetProfileName>Every Interaction </TweetProfileName>
                    <TweetUsername>@EveryInteract </TweetUsername>
                    <TweetDate>2 Mar 2015</TweetDate>
                  </TweetInfo>
                  <TweetText>
                    Variable web fonts are coming, and will open a world of
                    opportunities for weight use online{" "}
                    <TweetArticle>
                      <ArticleImage
                        src={process.env.PUBLIC_URL + "/img/Article image.png"}
                      />
                      <ArticleContent>
                        <ArticleTitle>The Future of Web Fonts</ArticleTitle>
                        <ArticleDescription>
                          We love typefaces. They give our sites and
                          applications personalized feel. They convey the
                          information and tell a story. They establish
                          information hierarchy. But they're...
                        </ArticleDescription>
                        <ArticleLink>vilijamis.com</ArticleLink>
                      </ArticleContent>
                    </TweetArticle>
                  </TweetText>
                  <TweetFooter>
                    <TweetFooterItem>
                      <img src={commentIcon} alt="comment" />
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={retweetIcon} alt="retweet" />
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={notLikedIcon} alt="like" />
                    </TweetFooterItem>
                    <TweetFooterItem>
                      <img src={envelopeIcon} alt="envelope" />
                    </TweetFooterItem>
                  </TweetFooter>
                </TweetContent>
              </Tweet>
            </Feed>
          </div>
        </MainSection>
      </Wrapper>
    );
  }
}

export { TweetButton, NavLink };
export default ProfilePage;
