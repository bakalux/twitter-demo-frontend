import React from "react";
import styled from "styled-components";

const StatisticsWrapper = styled.div`
  display: inline-block;
  margin-left: 24%;
  text-align: center;
  font-weight: bold;
  margin-right: 9%;
`;

const StatLink = styled.a`
  padding: 10px 25px;
  display: inline-block;
  border-bottom: ${props => (props.active ? "solid 4px #1DA1F2" : "none")};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-bottom: solid 4px #1da1f2;
  }
`;

const LinkLabel = styled.span`
  display: block;
`;

const LinkValue = styled.span`
  margin-top: 7px;
  display: block;
  font-size: 15px;
  color: ${props => (props.active ? "#1DA1F2" : "inherit")};
`;

const Statistics = props => {
  const { tweets, following, followers, likes, lists } = props;
  return (
    <StatisticsWrapper>
      <StatLink active>
        <LinkLabel>Tweets</LinkLabel>
        <LinkValue active>{tweets}</LinkValue>
      </StatLink>
      <StatLink>
        <LinkLabel>Following</LinkLabel>
        <LinkValue>{following}</LinkValue>
      </StatLink>
      <StatLink>
        <LinkLabel>Followers</LinkLabel>
        <LinkValue>{followers}</LinkValue>
      </StatLink>
      <StatLink>
        <LinkLabel>Likes</LinkLabel>
        <LinkValue>{likes}</LinkValue>
      </StatLink>
      <StatLink>
        <LinkLabel>Lists</LinkLabel>
        <LinkValue>{lists}</LinkValue>
      </StatLink>
    </StatisticsWrapper>
  );
};

export default Statistics;
