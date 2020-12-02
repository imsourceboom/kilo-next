import styled from 'styled-components';

export const Container = styled.article`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .join-button {
    position: relative;
    width: 220px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: rgb(231, 235, 237); */
    background: rgb(0, 132, 176);
    /* color: rgba(160,160,160,1); */
    color: #dfe6e9;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 23px;
      height: 23px;
      background-color: white;
      border-radius: 50%;
      padding: 5px;
      margin-right: 7px;

      img {
        margin-top: 2px;
      }
    }
  }

  .devicons {
    display: flex;
    align-items: center;

    img {
      width: 24px;
    }

    span {
      margin: 0 20px;
    }

    svg {
      margin-right: 18px;
      width: 24px;

      &:nth-of-type(2) {
        fill: ${({ theme }) => theme.devicon};
        width: 23px;
      }

      &:last-of-type {
        margin-right: 0;
        width: 21px;
      }
    }
  }

  .guide {
    display: flex;
    justify-content: center;
    padding-bottom: 3.8em;
  }

  .app-container {
    display: flex;
    flex-direction: column;
  }

  .app-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .android-button {
    cursor: pointer;

    img {
      width: 3.6em;
      border-radius: 16.4%;
      box-shadow: ${({ theme }) => theme.shadow};
    }
  }

  p {
    margin: 0 1.55em;
  }

  .google-play,
  .app-store {
    img {
      width: 10em;
    }

    svg {
      width: 10em;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      flex-direction: row;
    }

    .join-button {
      margin-right: 35px;
      margin-bottom: 0;
    }

    .guide {
      /* flex: 1; */
    }

    .app-container {
      flex-direction: row;
      justify-content: center;
    }

    .bundle {
      margin: 0 2.5em;
    }

    .android-button {
      img {
        width: 4em;
        border-radius: 16.4%;
      }
    }

    p {
      margin: 0 1.7em;
    }

    .google-play {
      svg {
        width: 10.2em;
      }
    }
  }
`;
