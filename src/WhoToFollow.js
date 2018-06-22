import React from "react";
import styled from "styled-components";
import TitleLink from "./TitleLink";
import TweetButton from "./TweetButton";

import verifiedIcon from "./icons/icon-verified.svg";

import peopleIcon from "./icons/icon-people.svg";

const WhoToFollowWrapper = styled.section`
  background-color: #fff;
  padding: 2% 2%;
`;
const Naming = styled.span`
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 10px 10px;
  color: black;
`;

const RecommendedAccount = styled.section`
  display: block;
  border-bottom: solid 1px #e1e8ed;
  padding: 4% 2%;
`;

const AccountImage = styled.img`
  display: inline-block;
  width: 15%;
  height: auto;
  padding: 2% 2%;
`;

const AccountInfo = styled.section`
  display: inline-block;
  vertical-align: top;
`;

const AccountName = Naming.extend``;
const AccountUsername = styled.span`
  color: #697787;
`;
const ButtonWrapper = styled.section`
  display: block;
  padding: 2%;
`;

const WhoToFollow = () => {
  return (
    <WhoToFollowWrapper>
      <Naming>Who to follow</Naming>&bull; <TitleLink>Refresh</TitleLink>&bull;{" "}
      <TitleLink>View All</TitleLink>
      <RecommendedAccount>
        <AccountImage
          src={process.env.PUBLIC_URL + "/img/avatar-follow-1.png"}
        />
        <AccountInfo>
          <AccountName>AppleInsider <img src={verifiedIcon} alt="verified"/></AccountName>
          <AccountUsername>@appleinsider</AccountUsername>
          <ButtonWrapper>
            <TweetButton follow wide>
              Follow
            </TweetButton>
          </ButtonWrapper>
        </AccountInfo>
      </RecommendedAccount>
      <RecommendedAccount>
        <AccountImage
          src={process.env.PUBLIC_URL + "/img/avatar-follow-1.png"}
        />
        <AccountInfo>
          <AccountName>AppleInsider </AccountName>
          <AccountUsername>@appleinsider</AccountUsername>
          <ButtonWrapper>
            <TweetButton follow wide>
              Follow
            </TweetButton>
          </ButtonWrapper>
        </AccountInfo>
      </RecommendedAccount>
      <RecommendedAccount>
        <AccountImage
          src={process.env.PUBLIC_URL + "/img/avatar-follow-1.png"}
        />
        <AccountInfo>
          <AccountName>AppleInsider </AccountName>
          <AccountUsername>@appleinsider</AccountUsername>
          <ButtonWrapper>
            <TweetButton follow wide>
              Follow
            </TweetButton>
          </ButtonWrapper>
        </AccountInfo>
      </RecommendedAccount>
      <TitleLink>
        <img src={peopleIcon} alt="people" /> Find people you know
      </TitleLink>
    </WhoToFollowWrapper>
  );
};

export default WhoToFollow;
