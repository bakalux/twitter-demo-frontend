import React from "react";
import styled from "styled-components";

import followersIcon from "./icons/icon-followers.svg";

const FollowersWrapper = styled.section`
  display: inline-block;
  margin-left: 2%;
  margin-top: 15%;
`;

const FollowersTitle = styled.a`
  display: block;
  color: #1da1f2;
  padding: 1% 1%;
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
      <FollowersTitle>
        <img src={followersIcon} alt="follower" /> 6 Followers you know
      </FollowersTitle>
      <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-1.png"} />
      <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-2.png"} />
      <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-3.png"} />
      <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-4.png"} />
      <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-5.png"} />
      <FollowerAvatar src={process.env.PUBLIC_URL + "/img/follower-6.png"} />
    </FollowersWrapper>
  );
};

export default Followers;
