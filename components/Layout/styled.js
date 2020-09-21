import styled, { css } from 'styled-components';

export const Height = 56;

export const Cover = styled.a`
  display: block;
  cursor: auto;

  @media not all and (min-resolution: 0.001dpcm),
    (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    cursor: default;
  }
`;

export const Main = styled.main`
  /* min-height: calc(100vh - ${Height}px) */
  min-height: 100vh;
  /* padding-top: ${({ headerHeight }) => `${headerHeight}px`}; */
`;
