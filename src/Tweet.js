import React from "react";
import styled from "styled-components";

import pinnedIcon from "./icons/Icon_ Pinned.svg";
import commentIcon from "./icons/Icon_ Comments.svg";
import retweetIcon from "./icons/Icon_ Retweet.svg";
import likedIcon from "./icons/Icon_  Liked.svg";
import notLikedIcon from "./icons/Icon_  notLiked.svg";
import envelopeIcon from "./icons/Icon_ Envelope.svg";

const TweetWrapper = styled.section`
  display: block;
  margin-top: 10px;
  border-bottom: solid 1px #e1e8ed;
`;

const Pinned = styled.span`
  color: #707e88;
  display: block;
  margin-left: 8%;
  margin-bottom: 1%;
`;

const TweetAvatar = styled.img`
  width: 50px;
  display: inline-block;
  vertical-align: top;

  &:hover {
    cursor: pointer;
  }
`;

const TweetContent = styled.section`
  display: inline-block;
  padding: 10px 10px;
  width: 80%;
`;

const TweetInfo = styled.span`
  font-size: 1rem;
`;

const TweetProfileName = styled.span`
  font-weight: bold;
  color: black;
`;

const TweetUsername = styled.span``;

const TweetDate = styled.span``;

const TweetText = styled.span`
  display: block;
  color: black;
  font-size: 1.5rem;
  margin-bottom: 1%;
  line-height: 1.9rem;
`;

const TweetImg = styled.img`
  display: block;
  max-width: 100%;
  margin-top: 5px;
`;

const TweetFooter = styled.span`
  padding: 5px 5px;
  display: block;
`;

const TweetFooterItem = styled.span`
  display: inline-block;
  margin-right: 10%;
  color: ${props => (props.liked ? "red" : "inherit")};

  &:hover {
    cursor: pointer;
  }
`;

const TweetArticle = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ArticleImage = styled.img`
  display: inline-block;
  vertical-align: top;
  height: 100%;
`;

const ArticleContent = styled.a`
  padding: 10px 10px;
  display: inline-block;
`;

const ArticleTitle = styled.h3`
  color: black;
  font-weight: bold;
  margin: 5px 0;
`;

const ArticleDescription = styled.p`
  margin: 5px 0;
  display: block;
  font-size: 0.9rem;
  color: black;
`;

const ArticleLink = styled.a`
  display: block;
  color: #707e88;
  font-size: 0.8rem;
`;

const Tweet = props => {
  const {
    pinned,
    avatar,
    profileName,
    username,
    date,
    text,
    img,
    hasArticle,
    articleImage,
    articleTitle,
    articleDescription,
    articleLink,
    comments,
    retweets,
    likesCount,
    liked
  } = props;
  return (
    <TweetWrapper>
      {pinned && (
        <Pinned>
          <img src={pinnedIcon} alt="Pinned" /> Pinned Tweet
        </Pinned>
      )}
      <TweetAvatar src={process.env.PUBLIC_URL + `/img/${avatar}`} />
      <TweetContent>
        <TweetInfo>
          <TweetProfileName>{profileName} </TweetProfileName>
          <TweetUsername>@{username} </TweetUsername>
          <TweetDate>{date}</TweetDate>
        </TweetInfo>
        <TweetText>
          {text}
          {img && (
            <TweetImg src={process.env.PUBLIC_URL + `/img/${img}`} alt="Img" />
          )}
        </TweetText>

        {hasArticle && (
          <TweetArticle>
            <ArticleImage
              src={process.env.PUBLIC_URL + `/img/${articleImage}`}
            />
            <ArticleContent>
              <ArticleTitle>{articleTitle}</ArticleTitle>
              <ArticleDescription>{articleDescription}</ArticleDescription>
              <ArticleLink>{articleLink}</ArticleLink>
            </ArticleContent>
          </TweetArticle>
        )}
        <TweetFooter>
          <TweetFooterItem>
            <img src={commentIcon} alt="comment" />
            {comments}
          </TweetFooterItem>
          <TweetFooterItem>
            <img src={retweetIcon} alt="retweet" /> {retweets}
          </TweetFooterItem>
          <TweetFooterItem liked={liked}>
            <img src={liked ? likedIcon : notLikedIcon} alt="like" />
            {likesCount}
          </TweetFooterItem>
          <TweetFooterItem>
            <img src={envelopeIcon} alt="envelope" />
          </TweetFooterItem>
        </TweetFooter>
      </TweetContent>
    </TweetWrapper>
  );
};

export default Tweet;
