import styled from "styled-components";

export default styled.a`
  padding: 10px 25px;
  background: ${props => (props.follow ? "#ffffff" : "#1DA1F2")};
  border-radius: 100px;
  color: ${props => (props.follow ? "#1DA1F2" : "#ffffff")};
  border: solid 1px #1da1f2;
  margin: auto 10px;

  &:hover {
    cursor: pointer;
    background: ${props => (props.follow ? "#f2f3f4" : "#178fd8")};
    color: ;
  }
`;
