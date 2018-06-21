import React from "react";
import styled from "styled-components";
import photosIcon from "./icons/icon-videos.svg";

const PhotosWrapper = styled.section`
  display: inline-block;
  margin-left: 2%;
  margin-top: 15%;
`;

const PhotosTitle = styled.a`
  display: block;
  color: #1da1f2;
  padding: 1% 1%;
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

const Photos = () => {
  return (
    <PhotosWrapper>
      <PhotosTitle>
        <img src={photosIcon} alt="photos" /> 522 Photos and videos
      </PhotosTitle>
      <PhotoImage src={process.env.PUBLIC_URL + "/img/photo-1.png"} />
      <PhotoImage src={process.env.PUBLIC_URL + "/img/photo-2.png"} />
      <PhotoImage src={process.env.PUBLIC_URL + "/img/photo-3.png"} />
      <PhotoImage src={process.env.PUBLIC_URL + "/img/photo-4.png"} />
      <PhotoImage src={process.env.PUBLIC_URL + "/img/photo-5.png"} />
      <PhotoImage src={process.env.PUBLIC_URL + "/img/photo-6.png"} />
    </PhotosWrapper>
  );
};

export default Photos;
