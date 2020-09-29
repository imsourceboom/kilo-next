import styled from 'styled-components';

const maxWidth = 1200;
export const Section = styled.section`
  .container {
    min-width: 320px;
    margin: 0 auto;
  }

  article.intro {
    margin-top: 104px;
    padding: 0 16px;
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
    padding: 10px 0;
    overflow: hidden;

    picture {
      img {
        position: relative;
        z-index: 10;
        width: 93%;
        max-width: 381.062px;
        display: block;
        border-radius: 10px;
        margin: 0 auto;
        box-shadow: ${({ theme }) => theme.shadow};
      }
    }
  }

  article.description {
    position: relative;
    margin: 100px 0;
    padding: 260px 16px;
    background: ${({ theme }) => theme.descriptionBack};
    background: linear-gradient(to bottom right, black, rgb(0, 132, 176));
    color: #dfe6e9;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 160px;
      left: 0;
    }

    &::before {
      top: 0;
      background: ${({ theme }) => theme.gradientOpacityTop};
    }
    &::after {
      bottom: 0;
      background: ${({ theme }) => theme.gradientOpacityBottom};
    }

    i {
      margin-right: 10px;
    }

    .kilox-is {
      font-size: 40px;
      padding-bottom: 2em;
    }

    .kilox-is,
    .wrapper,
    .middle-comment {
      margin: 0 auto;
      max-width: 650px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    .middle-comment {
      padding: 80px 0;
      font-size: 40px;
      line-height: 1.3;
    }

    .box {
      width: 100%;

      &:first-child {
        margin-bottom: 64px;
      }
    }

    .title {
      font-size: 20px;
      margin-bottom: 15px;
    }

    .about {
      font-size: 15px;
    }
  }

  article.something {
    position: relative;
    margin: 0 0 150px;
    padding: 50px 0;

    &::before {
      content: 'SOMETHING MORE';
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(6px);
      font-size: 50px;
      font-weight: bolder;
      text-align: center;
      transition: 0.4s;
    }

    /* &:hover {
      &::before {
        opacity: 0;
      }
    } */

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* max-width: 700px; */
      margin: 0 auto;

      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        & {
          display: none;
        }
      }
    }

    .more {
      width: 95%;
      max-width: 400px;
      padding: 100px 0;
      text-align: center;

      i {
        margin-right: 13px;
      }
    }
  }

  article.suggest {
    font-size: 32px;
    padding: 0 16px;
  }

  article.contact {
    padding: 150px 16px 150px;
    font-size: 20px;
    font-weight: lighter;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 0.5em;
      width: 260px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    span {
      display: inline-block;

      &.name {
        width: 135px;
        text-align: right;
        margin-right: 0.5em;
      }
    }

    button.bot_link {
      color: #0088cc;
    }

    i {
      margin-right: 10px;
    }
  }

  @media (max-width: 767px) and (orientation: landscape) {
    article.intro p,
    article.suggest {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    article.intro {
      margin-top: 120px;
      font-size: 2em;

      p {
        text-align: center;
        white-space: nowrap;

        br {
          display: none;
        }
      }
    }

    article.description {
      .kilox-is {
        font-size: 40px;
        text-align: center;
      }

      .box {
        width: 45%;

        &:first-child {
          margin-right: 10%;
          margin-bottom: 0;
        }
      }

      .middle-comment {
        font-size: 48px;
        text-align: center;
        white-space: nowrap;
        line-height: 1.5;
        padding: 80px 0;
      }
    }

    article.suggest {
      font-size: 48px;
      text-align: center;

      br {
        &:not(.tablet) {
          display: none;
        }
      }
    }

    article.contact {
      padding: 180px 0;
      font-size: 24px;

      p {
        width: 300px;
      }

      span {
        display: inline-block;

        &.name {
          width: 155px;
        }
      }

      i {
        margin-right: 12px;
      }
    }
  }
`;
