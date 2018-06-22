import React from "react";
import styled from "styled-components";

import verifiedIcon from "./icons/icon-verified.svg";
import locationIcon from "./icons/icon-location.svg";
import linkIcon from "./icons/icon-link.svg";
import joinedIcon from "./icons/icon-joined.svg";

import TweetButton from "./TweetButton";

const ProfileCardWrapper = styled.section`
  display: inline-block;
  margin-left: 2%;
  margin-top: 15%;
`;

const ProfileName = styled.h3`
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

const LocationWrapper = CardListItem.extend``;
const ProfileLinkWrapper = CardListItem.extend``;
const JoinedWrapper = CardListItem.extend``;

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
    verified,
    following
  } = props;

  return (
    <ProfileCardWrapper>
      <ProfileName>
        {profileName} {verified && <img src={verifiedIcon} alt="" />}
      </ProfileName>
      <Username>
        @{username} {following && <Following>Follows you</Following>}
      </Username>
      <Description>{description}</Description>
      <LocationWrapper>
        <img src={locationIcon} alt="location" /> London, UK
      </LocationWrapper>
      <ProfileLinkWrapper>
        <img src={linkIcon} alt="link" />{" "}
        <ProfileLink href={`https://${profileLink}`}>{profileLink}</ProfileLink>
      </ProfileLinkWrapper>
      <JoinedWrapper>
        <img src={joinedIcon} alt="joined" /> Joined {joined}
      </JoinedWrapper>
      <TweetButton>Tweet to</TweetButton>
      <TweetButton>Message</TweetButton>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
