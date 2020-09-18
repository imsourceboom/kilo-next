import styled, { css } from 'styled-components';

export const Container = styled.nav`
  font-size: 1.35em;
  padding: 2em 0 1em;
  display: ${({ pageY }) => (pageY >= 55 ? 'none' : 'block')};

  ${({ firstPath }) => {
    if (firstPath == 'purchase') {
      return css`
        .purchase-btn {
          opacity: 1;
        }
        .withdraw-btn {
          opacity: 0.4;
        }
      `;
    }
    if (firstPath == 'withdraw') {
      return css`
        .purchase-btn {
          opacity: 0.4;
        }
        .withdraw-btn {
          opacity: 1;
        }
      `;
    }
  }}

  ${({ secondPath }) => {
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
  }}

  .filter {
    text-align: center;

    &.one {
      margin-bottom: 1.2em;
    }

    &.two {
      span {
        font-size: 0.9em;
      }
    }

    & > span {
      &:first-child {
        margin-right: 1.3em;
      }

      i {
        margin-right: 0.2em;
      }
    }
  }

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;
