import React from 'react';
import styled from 'styled-components';
import photosIcon from './icons/icon-videos.svg';
import TitleLink from './StyledLink';

const PhotosWrapper = styled.section`
  display: inline-block;
  margin-left: 2%;
  margin-top: 15%;
`;

const ImagesWrapper = styled.div`
  display: block;
`;

const PhotoImage = styled.img`
  display: inline-block;
  padding: 2px 2px;
  width: 30%;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Photos = ({ photos }) => (
  <PhotosWrapper>
    <TitleLink to="photos_and_videos">
      <img src={photosIcon} alt="photos" />
      {` ${photos.length} Photos and videos`}
    </TitleLink>
    <ImagesWrapper>
      {photos.map((photo, i) => (
        <PhotoImage
          key={i}
          src={`${process.env.PUBLIC_URL}/img/${photo.src}`}
        />
      ))}
    </ImagesWrapper>
  </PhotosWrapper>
);

export default Photos;
