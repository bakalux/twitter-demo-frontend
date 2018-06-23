import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StatisticsWrapper = styled.div`
  display: inline-block;
  margin-left: 19%;
  text-align: center;
  font-weight: bold;
  margin-right: 19%;
`;

const LinkLabel = styled.span`
  text-decoration: none;
  display: block;
`;

const LinkValue = styled.span`
  margin-top: 7px;
  display: block;
  font-size: 15px;
  color: ${props => (props.active ? "#1DA1F2" : "inherit")};
`;

const StatLink = styled(NavLink)`
  padding: 10px 25px;
  display: inline-block;
  border-bottom: ${props => (props.active ? "solid 4px #1DA1F2" : "none")};
  font-size: 1rem;
  font-weight: bold;
  font-family: "Helvetica", sans-serif;
  color: #7f8287;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-bottom: solid 4px #1da1f2;
  }

  &:hover ${LinkValue} {
    color: #1da1f2;
  }

  &.active {
    border-bottom: solid 4px #1da1f2;
  }
  &.active ${LinkValue} {
    color: #1da1f2;
  }
`;

const Statistics = props => {
  const { tweets, following, followers, likes, lists } = props;
  return (
    <StatisticsWrapper>
      <StatLink to="/EveryInteract" active>
        <LinkLabel>Tweets</LinkLabel>
        <LinkValue active>{tweets}</LinkValue>
      </StatLink>
      <StatLink to="EveryInteract/following">
        <LinkLabel>Following</LinkLabel>
        <LinkValue>{following}</LinkValue>
      </StatLink>
      <StatLink to="EveryInteract/followers">
        <LinkLabel>Followers</LinkLabel>
        <LinkValue>{followers}</LinkValue>
      </StatLink>
      <StatLink to="EveryInteract/likes">
        <LinkLabel>Likes</LinkLabel>
        <LinkValue>{likes}</LinkValue>
      </StatLink>
      <StatLink to="EveryInteract/lists">
        <LinkLabel>Lists</LinkLabel>
        <LinkValue>{lists}</LinkValue>
      </StatLink>
    </StatisticsWrapper>
  );
};

export default Statistics;
