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

const Wrapper = styled.section`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  font-family: Helvetica;
  font-size: 11px;
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
  margin-right: 2%;
`;

const TweetButton = styled.button`
  padding: 10px 25px;
  background: ${props => (props.follow ? "#ffffff" : "#1DA1F2")};
  border-radius: 100px;
  color: ${props => (props.follow ? "#1DA1F2" : "#ffffff")};
  margin: auto 10px;
  border: solid 1px #1da1f2;
  transform: translate(0, -25%);
`;

const BitMap = styled.section`
  background-image: url(${BitMapImage});
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
  top: 45%;
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
        <MainSection>
          <ProfileCard>
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
        </MainSection>
      </Wrapper>
    );
  }
}

export default App;
