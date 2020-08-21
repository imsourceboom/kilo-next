import styled from 'styled-components';

const Height = 56;

export const Cover = styled.a`
  display: block;
  cursor: auto;

  @media not all and (min-resolution: 0.001dpcm) {
    cursor: default;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: ${Height}px;
  border-bottom: ${({ pageY }) => pageY > 0 && '1px solid rgba(245, 245, 245, .1)'};
  backdrop-filter: blur(4px);

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 24px;
    height: 24px;
    margin: 0 16px;
  }
`;

export const Main = styled.main`
  /* min-height: calc(100vh - ${Height}px) */
  min-height: 100vh;
  padding-top: ${Height}px;
`;

export const Footer = styled.footer`
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
