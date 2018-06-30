import styled from 'styled-components';

export default styled.a`
  padding: ${({ wide }) => (wide ? '7px 25px' : '10px 25px')};
  background: ${({ follow }) => (follow ? '#ffffff' : '#1DA1F2')};
  border-radius: 100px;
  color: ${({ follow }) => (follow ? '#1DA1F2' : '#ffffff')};
  border: solid 1px #1da1f2;
  margin: auto 10px;

  &:hover {
    cursor: pointer;
    background: ${({ follow }) => (follow ? '#f2f3f4' : '#178fd8')};
  }
`;
