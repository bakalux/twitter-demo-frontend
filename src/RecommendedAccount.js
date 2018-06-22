import React from "react";
import styled from "styled-components";

import TweetButton from "./TweetButton";

import verifiedIcon from "./icons/icon-verified.svg";
import deleteIcon from "./icons/icon-delete.svg";

const RecommendedAccountWrapper = styled.section`
  display: block;
  border-bottom: solid 1px #e1e8ed;
  padding: 4% 2%;
  position: relative;
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
const AccountName = styled.span`
  margin-top: 4px;
  font-weight: bold;
  display: inline-block;
  text-align: left;
  padding: 10px 10px;
  color: black;
`;
const AccountUsername = styled.span`
  color: #697787;
`;
const ButtonWrapper = styled.section`
  display: block;
  padding: 2%;
`;

const DeleteImage = styled.img`
  position: absolute;
  right: 10px;
  width: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const RecommendedAccount = props => {
  const { accountImage, accountName, accountUsername, verified } = props;

  return (
    <RecommendedAccountWrapper>
      <AccountImage src={`${process.env.PUBLIC_URL}/img/${accountImage}`} />
      <AccountInfo>
        <DeleteImage src={deleteIcon} alt="del" />

        <AccountName>
          {accountName} {verified && <img src={verifiedIcon} alt="verified" />}
        </AccountName>
        <AccountUsername>@{accountUsername}</AccountUsername>

        <ButtonWrapper>
          <TweetButton follow wide>
            Follow
          </TweetButton>
        </ButtonWrapper>
      </AccountInfo>
    </RecommendedAccountWrapper>
  );
};

export default RecommendedAccount;
