import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: #1da1f2;
  padding: 1% 1%;
  margin-top: 2%;

  &:hover {
    cursor: pointer;
  }
`;
