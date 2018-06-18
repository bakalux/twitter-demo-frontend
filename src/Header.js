import React from "react";
import styled from "styled-components";
import homeIcon from "./icons/Icon_Home.svg";
import momentsIcon from "./icons/Icon_Moments.svg";
import notificationsIcon from "./icons/Icon_Notifications.svg";
import messagesIcon from "./icons/Icon_ Messages.svg";
import twitterLogo from "./icons/Icon_TwitterLogo.svg";
import searchIcon from "./icons/Icon_Magnifier.svg";
import TweetButton from "./TweetButton";

const Nav = styled.ul`
  display: inline-block;
  margin-left: 9%;
`;

const NavLink = styled.li`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 0 10px;
  color: ${props => (props.active ? "black" : "inherit")};

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
  background-color: #f5f8fa;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  background-image: url(${searchIcon});
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

const Header = () => {
  return (
    <div>
      <Nav>
        <NavLink>
          <img src={homeIcon} alt="Home" /> Home
        </NavLink>
        <NavLink>
          <img src={momentsIcon} alt="Moments" /> Moments
        </NavLink>
        <NavLink>
          <img src={notificationsIcon} alt="Notifications" /> Notifications
        </NavLink>
        <NavLink>
          <img src={messagesIcon} alt="Messages" /> Messages
        </NavLink>
      </Nav>
      <TwitterIcon src={twitterLogo} alt="Twitter logo" />
      <Search placeholder="Search Twitter" />
      <HeaderAvatar src={process.env.PUBLIC_URL + "/img/EI Avatar.png"} />
      <TweetButton>Tweet</TweetButton>
    </div>
  );
};

export { NavLink };
export default Header;
