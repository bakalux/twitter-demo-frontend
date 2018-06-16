import React, { Component } from "react";
import styled from "styled-components";
import HomeIcon from "./icons/Icon_Home.svg";
import MomentsIcon from "./icons/Icon_Moments.svg";
import NotificationsIcon from "./icons/Icon_Notifications.svg";
import MessagesIcon from "./icons/Icon_ Messages.svg";
import TwitterLogo from "./icons/Icon_TwitterLogo.svg";
import SearchIcon from "./icons/Icon_Magnifier.svg";
import { TweetButton, NavLink } from "./Everyinteract";

const Nav = styled.ul`
  display: inline-block;
  margin-left: 9%;
`;

const TwitterIcon = styled.img`
  display: inline-block;
  margin-left: 11%;
`;

const Search = styled.input`
  padding: 8px 8px;
  display: inline-block;
  margin-left: 10%;
  background-color: #f5f8fa;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  background-image: url(${SearchIcon});
  background-size: auto auto;
  background-repeat: no-repeat;
  background-position: 95% center;

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

class Header extends Component {
  render() {
    return (
      <div>
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
        <HeaderAvatar src={process.env.PUBLIC_URL + "/img/EI Avatar.png"} />
        <TweetButton>Tweet</TweetButton>
      </div>
    );
  }
}

export default Header;
