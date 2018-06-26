import React from "react";
import styled from "styled-components";

import StyledLink from "./StyledLink";

import followersIcon from "./icons/icon-followers.svg";

const FollowersWrapper = styled.section`
  display: inline-block;
  margin-left: 2%;
  margin-top: 15%;
`;

const ImagesWrapper = styled.div`
  display: block;
`;

const FollowerAvatar = styled.img`
  display: inline-block;
  padding: 2px 2px;

  &:hover {
    cursor: pointer;
  }
`;

const Followers = () => {
  return (
    <FollowersWrapper>
      <StyledLink to="/followers_you_know">
        <img src={followersIcon} alt="follower" /> 6 Followers you know
      </StyledLink>
      <ImagesWrapper>
        <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-1.png"} />
        <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-2.png"} />
        <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-3.png"} />
        <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-4.png"} />
        <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-5.png"} />
        <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-6.png"} />
      </ImagesWrapper>
    </FollowersWrapper>
  );
};

export default Followers;
