import styled from 'styled-components';

import { Height } from '../styled';

export const Container = styled.footer`
  height: ${Height}px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .copyright-wrap {
    padding: 0 16px;
    font-size: 0.85em;
    letter-spacing: 0.085em;
    color: rgb(94, 110, 119);
  }
`;
