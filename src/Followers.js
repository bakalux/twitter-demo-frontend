import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import followersIcon from './icons/icon-followers.svg';

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

const Followers = ({ followers }) => (
  <FollowersWrapper>
    <StyledLink to="/followers-you-know">
      <img src={followersIcon} alt="follower" />
      {' '}
      {followers.length}
      {' '}
      Followers you know
    </StyledLink>
    <ImagesWrapper>
      {followers.map((follower, i) => (
        <FollowerAvatar
          key={i}
          src={`${process.env.PUBLIC_URL}/img/${follower.src}`}
        />
      ))}
    </ImagesWrapper>
  </FollowersWrapper>
);

export default Followers;
