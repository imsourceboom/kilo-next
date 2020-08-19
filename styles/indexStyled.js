import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 16px;

  .container {
    min-width: 320px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .intro {
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

  @media (min-width: 768px) {
    .intro {
      margin-top: 120px;
      font-size: 2em;

      p {
        text-align: center;

        br {
          display: none;
        }
      }
    }
  }
`;
