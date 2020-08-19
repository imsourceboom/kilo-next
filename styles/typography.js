import { css } from "styled-components";

export default css`
  body {
    font-family: "Spoqa Han Sans", sans-serif;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    word-wrap: break-word;

    @media (min-width: 768px) {
      font-size: 15px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.83em;
  }

  h6 {
    font-size: 0.67em;
  }

  p {
    line-height: 1.6;
  }
`;
