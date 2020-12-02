import styled, { css } from 'styled-components';

export const Container = styled.nav`
  font-size: 1.35em;
  padding: 2em 0 1em;
  margin-top: 56px;

  button {
    svg {
      width: 7em;
      height: auto;
    }
  }

  ${({ kind }) => {
    if (kind == 'android') {
      return css`
        .google-btn {
          opacity: 1;
        }
        .apple-btn {
          opacity: 0.2;
        }
      `;
    }
    if (kind == 'ios') {
      return css`
        .google-btn {
          opacity: 0.4;
        }
        .apple-btn {
          opacity: 1;
        }
      `;
    }
  }}

  /* ${({ secondPath }) => {
    if (secondPath == 'image') {
      return css`
        .image-btn {
          opacity: 1;
        }
        .video-btn {
          opacity: 0.4;
        }
      `;
    }
    if (secondPath == 'video') {
      return css`
        .image-btn {
          opacity: 0.4;
        }
        .video-btn {
          opacity: 1;
        }
      `;
    }
  }} */

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;

    &.one {
      margin-bottom: 1.2em;
    }

    & > span {
      &:first-child {
        margin-right: 2em;
      }
    }
  }

  @media (min-width: 768px) {
    font-size: 1.5em;

    .filter {
      text-align: center;

      &.one {
        margin-bottom: 0.5em;
      }

      & > span {
        &:first-child {
          margin-right: 3.6em;
        }
      }
    }
  }
`;
