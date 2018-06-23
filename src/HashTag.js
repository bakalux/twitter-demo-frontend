import StyledLink from "./StyledLink";
import React from "react";

const HashTag = props => {
  return (
    <StyledLink to={`/search?q=${props.children}`}>props.children</StyledLink>
  );
};

export default HashTag;
