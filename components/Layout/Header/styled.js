import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  /* height: ${Height}px; */
  border-bottom: ${({ pageY, theme }) => pageY > 55 && theme.border};
  backdrop-filter: blur(4px);

  /* ${({ pageY }) => {
    if (pageY > 0) {
      return css`
        border-bottom: ${({ theme }) => theme.border};
      `;
    }
  }} */

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    & {
      background-color: ${({ theme }) => theme.back};
    }
  }

  .container {
    height: 100%;
    padding: 16px 0;
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
