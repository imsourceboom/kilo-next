import styled from 'styled-components';

const maxWidth = 1200;
export const Section = styled.section`
  padding: 0 16px;

  .container {
    min-width: 320px;
    margin: 0 auto;
  }

  article.intro {
    margin-top: 104px;
    font-weight: bold;
    font-size: 1.5em;

    p {
      margin-bottom: 11px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  article.preview {
    /* max-width: ${maxWidth}px; */
    position: relative;
    margin-top: 100px;
    width: 100%;

    picture {
      img {
        display: block;
        max-height: 812px;
        border-radius: 10px;
        margin: 0 auto;
        box-shadow: ${({ theme }) => theme.shadow};
      }
    }
  }

  @media (min-width: 768px) {
    article.intro {
      margin-top: 120px;
      font-size: 2em;

      p {
        text-align: center;

        br {
          display: none;
        }
      }
    }
    article.preview {
      overflow:hidden;
    }
  }
`;
