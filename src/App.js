import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";
import "flexboxgrid2";
import HomeIcon from "./icons/Icon_Home.svg";
import MomentsIcon from "./icons/Icon_Moments.svg";
import NotificationsIcon from "./icons/Icon_Notifications.svg";
import MessagesIcon from "./icons/Icon_ Messages.svg";
import TwitterLogo from "./icons/Icon_TwitterLogo.svg";
import EIAvatar from "./icons/EI Avatar.svg";
import BitMapImage from "./images/bitmap.png";
import VerifiedIcon from "./icons/Tick.svg";
import LocationIcon from "./icons/Icon_ Location.svg";
import LinkIcon from "./icons/Icon_ Link.svg";
import JoinedIcon from "./icons/Icon_ Joined.svg";
import PinnedIcon from "./icons/Icon_ Pinned.svg";
import TweetImage from "./icons/Img.png";
import CommentIcon from "./icons/Icon_ Comments.svg";
import RetweetIcon from "./icons/Icon_ Retweet.svg";
import LikedIcon from "./icons/Icon_  Liked.svg";
import NotLikedIcon from "./icons/Icon_  notLiked.svg";
import EnvelopeIcon from "./icons/Icon_ Envelope.svg";
import ImgArticle from "./icons/Article image.png";

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  font-family: Helvetica;
  font-size: 1rem;
  color: #667580;
`;
const Header = styled.section`
  background-color: #ffffff;
`;

const Nav = styled.ul`
  display: inline-block;
  margin-left: 9%;
`;

const NavLink = styled.li`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 0 10px;
  color: ${props => (props.chosen ? "black" : "inherit")};
`;

const TwitterIcon = styled.img`
  display: inline-block;
  margin-left: 11%;
`;

const Search = styled.input`
  display: inline-block;
  margin-left: 10%;
  border-radius: 100px;
  border: 1px solid #e6ecf0;
`;

const HeaderAvatar = styled.img`
  display: inline-block;
  margin-top: 5px;
  margin-left: 2%;
  margin-right: 1%;
`;

const TweetButton = styled.a`
  padding: 10px 25px;
  background: ${props => (props.follow ? "#ffffff" : "#1DA1F2")};
  border-radius: 100px;
  color: ${props => (props.follow ? "#1DA1F2" : "#ffffff")};
  margin: auto 10px;
  border: solid 1px #1da1f2;
  vertical-align: middle;
`;

const BitMap = styled.section`
  background-image: url(${BitMapImage});
  background-size: 100%;
  width: auto;
  height: 350px;
`;

const StatBar = styled.section`
  padding-top: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const ProfileImage = styled.div`
  display: inline-block;
  margin-left: 9%;
`;

const MainAvatar = styled.img`
  z-index: 99;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  left: 12%;
  top: 30%;
`;

const Statistics = styled.div`
  display: inline-block;
  margin-left: 25%;
  text-align: center;
  font-weight: bold;
  margin-right: 9%;
`;

const StatLink = styled.a`
  padding: 10px 25px;
  display: inline-block;
  border-bottom: ${props => (props.chosen ? "solid 4px #1DA1F2" : "none")};
`;

const LinkLabel = styled.span`
  display: block;
`;

const LinkValue = styled.span`
  margin-top: 7px;
  display: block;
  font-size: 15px;
  color: ${props => (props.chosen ? "#1DA1F2" : "inherit")};
`;

const MainSection = styled.section`
  background: #e6ecf0;
  padding: 10px 10px;
  margin-top: 2px;
  min-height: 50vh;
`;

const ProfileCard = styled.section`
  display: inline-block;
  margin-left: 12%;
  margin-top: 2%;
  width: 250px;
`;

const ProfileName = styled.a`
  display: block;
  line-height: 22px;
  font-size: 22px;
  color: #14171a;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Username = styled.span`
  display: block;
  font-size: 14px;
  color: #697787;
  margin-bottom: 16px;
`;

const Following = styled.span`
  font-size: 12px;
  margin-left: 8px;
`;

const Description = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #14171a;
`;

const CardListItem = styled.span`
  display: block;
  line-height: 28px;
  font-size: 14px;
  margin-bottom: 8px;
`;

const ProfileLink = styled.a`
  color: #1da1f2;
  cursor: pointer;
`;

const Feed = styled.section`
  display: inline-block;
  background-color: #ffffff;
  margin-left: 5%;
  padding: 0;
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
  margin-bottom: 2%;
`;

const TweetAvatar = styled.img`
  width: 50px;
  display: inline-block;
  vertical-align: top;
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

const TweetText = styled.p`
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
`;

const TweetArticle = styled.div`
  display: block;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  margin-top: 5px;
`;

const ArticleImage = styled.img`
  display: inline-block;
  vertical-align: top;
  width: 20%;
  height: auto;
`;

const ArticleContent = styled.span`
  padding: 10px 10px;
  width: 75%;
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


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Nav>
            <NavLink>
              <img src={HomeIcon} alt="Home" /> Home
            </NavLink>
            <NavLink>
              <img src={MomentsIcon} alt="Moments" /> Moments
            </NavLink>
            <NavLink>
              <img src={NotificationsIcon} alt="Notifications" /> Notifications
            </NavLink>
            <NavLink>
              <img src={MessagesIcon} alt="Messages" /> Messages
            </NavLink>
          </Nav>
          <TwitterIcon src={TwitterLogo} alt="Twitter logo" />
          <Search placeholder="Search Twitter" />
          <HeaderAvatar src={EIAvatar} />
          <TweetButton>Tweet</TweetButton>
        </Header>
        <BitMap />
        <StatBar>
          <ProfileImage>
            <MainAvatar src={EIAvatar} />
          </ProfileImage>
          <Statistics>
            <StatLink chosen>
              <LinkLabel>Tweets</LinkLabel>
              <LinkValue chosen>8,058</LinkValue>
            </StatLink>
            <StatLink>
              <LinkLabel>Following</LinkLabel>
              <LinkValue>721</LinkValue>
            </StatLink>
            <StatLink>
              <LinkLabel>Followers</LinkLabel>
              <LinkValue>1,815</LinkValue>
            </StatLink>
            <StatLink>
              <LinkLabel>Likes</LinkLabel>
              <LinkValue>460</LinkValue>
            </StatLink>
            <StatLink>
              <LinkLabel>Lists</LinkLabel>
              <LinkValue>2</LinkValue>
            </StatLink>
          </Statistics>
          <TweetButton follow>Follow</TweetButton>
        </StatBar>
        <MainSection className="row">
          <ProfileCard className="col-xl-2 col-lg-2">
            <ProfileName>
              Every Interaction <img src={VerifiedIcon} alt="verified" />
            </ProfileName>
            <Username>
              @Every Interact <Following>Follows you</Following>
            </Username>
            <Description>
              UX Design studio focussed problem solving creativity. Design to us
              is how can we make things "work" amazing.
            </Description>
            <CardListItem>
              <img src={LocationIcon} alt="location" /> London, UK
            </CardListItem>
            <CardListItem>
              <img src={LinkIcon} alt="link" />{" "}
              <ProfileLink>everyinteraction.com</ProfileLink>
            </CardListItem>
            <CardListItem>
              <img src={JoinedIcon} alt="joined" /> Joined May 2008
            </CardListItem>
            <TweetButton>Tweet to</TweetButton>
            <TweetButton>Message</TweetButton>
          </ProfileCard>
          <Feed className="col-lg-4 col-xl-4">
            <FeedHeader>
              <NavLink chosen>Tweets</NavLink>
              <NavLink>Tweets & replies</NavLink>
              <NavLink>Media</NavLink>
            </FeedHeader>
            <Tweet>
              <Pinned>
                <img src={PinnedIcon} alt="Pinned" /> Pinned Tweet
              </Pinned>
              <TweetAvatar src={EIAvatar} />
              <TweetContent>
                <TweetInfo>
                  <TweetProfileName>Every Interaction </TweetProfileName>
                  <TweetUsername>@EveryInteract </TweetUsername>
                  <TweetDate>2 Mar 2015</TweetDate>
                </TweetInfo>
                <TweetText>
                  We've made some more resources for all your wonderful{" "}
                  <ProfileLink>#design</ProfileLink>{" "}
                  <ProfileLink>everyinteraction.com/resources/</ProfileLink>{" "}
                  <ProfileLink>#UI</ProfileLink>
                  <TweetImg src={TweetImage} alt="Img" />
                </TweetText>
                <TweetFooter>
                  <TweetFooterItem>
                    <img src={CommentIcon} alt="comment" />
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={RetweetIcon} alt="retweet" /> 17
                  </TweetFooterItem>
                  <TweetFooterItem liked>
                    <img src={LikedIcon} alt="like" /> 47
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={EnvelopeIcon} alt="envelope" />
                  </TweetFooterItem>
                </TweetFooter>
              </TweetContent>
            </Tweet>
            <Tweet>
              <TweetAvatar src={EIAvatar} />
              <TweetContent>
                <TweetInfo>
                  <TweetProfileName>Every Interaction </TweetProfileName>
                  <TweetUsername>@EveryInteract </TweetUsername>
                  <TweetDate>2 Mar 2015</TweetDate>
                </TweetInfo>
                <TweetText>
                  Our new website conecept; Taking you from... @Every
                  Interaction{" "}
                  <ProfileLink>instagram.com/p/BNFGrfhBP3M/</ProfileLink>{" "}
                </TweetText>
                <TweetFooter>
                  <TweetFooterItem>
                    <img src={CommentIcon} alt="comment" /> 1
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={RetweetIcon} alt="retweet" /> 4
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={NotLikedIcon} alt="like" /> 2
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={EnvelopeIcon} alt="envelope" />
                  </TweetFooterItem>
                </TweetFooter>
              </TweetContent>
            </Tweet>
            <Tweet>
              <TweetAvatar src={EIAvatar} />
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
                    <ArticleImage src={ImgArticle} alt="article" />
                    <ArticleContent>
                      <ArticleTitle>The Future of Web Fonts</ArticleTitle>
                      <ArticleDescription>
                        We love typefaces. They give our sites and applications
                        personalized feel. They convey the information and tell
                        a story. They establish information hierarchy. But
                        they're...
                      </ArticleDescription>
                      <ArticleLink>vilijamis.com</ArticleLink>
                    </ArticleContent>
                  </TweetArticle>
                </TweetText>
                <TweetFooter>
                  <TweetFooterItem>
                    <img src={CommentIcon} alt="comment" /> 
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={RetweetIcon} alt="retweet" /> 
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={NotLikedIcon} alt="like" /> 
                  </TweetFooterItem>
                  <TweetFooterItem>
                    <img src={EnvelopeIcon} alt="envelope" />
                  </TweetFooterItem>
                </TweetFooter>
              </TweetContent>
            </Tweet>
          </Feed>
        </MainSection>
      </Wrapper>
    );
  }
}

export default App;
