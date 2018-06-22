import React from "react";
import styled from "styled-components";

import pinnedIcon from "./icons/icon-pinned.svg";
import commentIcon from "./icons/icon-comments.svg";
import retweetIcon from "./icons/icon-retweet.svg";
import likedIcon from "./icons/icon-liked.svg";
import notLikedIcon from "./icons/icon-not-liked.svg";
import envelopeIcon from "./icons/icon-envelope.svg";

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
  max-width: 9%;

  &:hover {
    cursor: pointer;
  }
`;

const TweetContent = styled.section`
  display: inline-block;
  padding: 10px 10px;
  width: 89%;
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

  &:hover {
    cursor: pointer;
  }
`;

const TweetLike = TweetFooterItem.extend`
  color: ${props => (props.liked ? "red" : "inherit")};
`;

const TweetComment = TweetFooterItem.extend``;
const TweetRetweet = TweetFooterItem.extend``;
const TweetEnvelope = TweetFooterItem.extend``;

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
          <TweetUsername>@{username} &bull;</TweetUsername>
          <TweetDate> {date}</TweetDate>
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
          <TweetComment>
            <img src={commentIcon} alt="comment" />
            {comments}
          </TweetComment>
          <TweetRetweet>
            <img src={retweetIcon} alt="retweet" /> {retweets}
          </TweetRetweet>
          <TweetLike liked={liked}>
            <img src={liked ? likedIcon : notLikedIcon} alt="like" />
            {likesCount}
          </TweetLike>
          <TweetEnvelope>
            <img src={envelopeIcon} alt="envelope" />
          </TweetEnvelope>
        </TweetFooter>
      </TweetContent>
    </TweetWrapper>
  );
};

export default Tweet;
