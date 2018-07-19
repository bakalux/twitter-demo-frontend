import React from 'react';
import styled from 'styled-components';
import homeIcon from './icons/icon-home.svg';
import momentsIcon from './icons/icon-moments.svg';
import notificationsIcon from './icons/icon-notifications.svg';
import messagesIcon from './icons/icon-messages.svg';
import twitterLogo from './icons/icon-twitter-logo.svg';
import searchIcon from './icons/icon-magnifier.svg';
import TweetButton from './TweetButton';

const Nav = styled.ul`
  display: inline-block;
  margin-left: 9%;
`;

const NavigationLink = styled.li`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 0 10px;
  color: ${({ active }) => (active ? 'black' : 'inherit')};

  &:hover {
    cursor: pointer;
    color: #131414;
  }
`;

const TwitterIcon = styled.img`
  display: inline-block;
  margin-left: 11%;

  &:hover {
    cursor: pointer;
  }
`;

const Search = styled.input`
  padding: 8px 8px;
  display: inline-block;
  margin-left: 10%;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  background-size: auto auto;
  background: #f5f8fa url(${searchIcon}) no-repeat 95% center;

  &:focus {
    outline: none;
  }
`;

const HeaderAvatar = styled.img`
  display: inline-block;
  margin-left: 2%;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ avatar }) => (
  <div>
    <Nav>
      <NavigationLink>
        <img src={homeIcon} alt="Home" />
        {' Home'}
      </NavigationLink>
      <NavigationLink>
        <img src={momentsIcon} alt="Moments" />
        {' Moments'}
      </NavigationLink>
      <NavigationLink>
        <img src={notificationsIcon} alt="Notifications" />
        {' Notifications'}
      </NavigationLink>
      <NavigationLink>
        <img src={messagesIcon} alt="Messages" />
        {' Messages'}
      </NavigationLink>
    </Nav>
    <TwitterIcon src={twitterLogo} alt="Twitter logo" />
    <Search placeholder="Search Twitter" />
    <HeaderAvatar src={`${process.env.PUBLIC_URL}/img/${avatar}`} />
    <TweetButton>
      Tweet
    </TweetButton>
  </div>
);

export { NavigationLink };
export default Header;
