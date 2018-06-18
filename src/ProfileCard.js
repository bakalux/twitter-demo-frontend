import React from "react";
import styled from "styled-components";

import verifiedIcon from "./icons/Tick.svg";
import locationIcon from "./icons/Icon_ Location.svg";
import linkIcon from "./icons/Icon_ Link.svg";
import joinedIcon from "./icons/Icon_ Joined.svg";

import TweetButton from "./TweetButton";

const ProfileCardWrapper = styled.section`
  display: inline-block;
  margin-left: 2%;
  margin-top: 15%;
`;

const ProfileName = styled.a`
  display: block;
  font-size: 1.5rem;
  color: #14171a;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Username = styled.span`
  display: block;
  font-size: 1.3rem;
  color: #697787;
  margin-bottom: 16px;
`;

const Following = styled.span`
  font-size: 12px;
  margin-left: 8px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #14171a;
`;

const CardListItem = styled.span`
  display: block;
  font-size: 1rem;
  margin-bottom: 16px;
`;

const ProfileLink = styled.a`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #178fd8;
  }
`;

const ProfileCard = props => {
  const {
    profileName,
    username,
    description,
    profileLink,
    joined,
    verified
  } = props;

  return (
    <ProfileCardWrapper>
      <ProfileName>
        {profileName} {verified && <img src={verifiedIcon} alt="" />}
      </ProfileName>
      <Username>
        @{username} <Following>Follows you</Following>
      </Username>
      <Description>{description}</Description>
      <CardListItem>
        <img src={locationIcon} alt="location" /> London, UK
      </CardListItem>
      <CardListItem>
        <img src={linkIcon} alt="link" />{" "}
        <ProfileLink href={`https://${profileLink}`}>{profileLink}</ProfileLink>
      </CardListItem>
      <CardListItem>
        <img src={joinedIcon} alt="joined" /> Joined {joined}
      </CardListItem>
      <TweetButton>Tweet to</TweetButton>
      <TweetButton>Message</TweetButton>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
