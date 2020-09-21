import styled, { css } from 'styled-components';

export const Container = styled.section`
  .container {
    padding: 30px 0;

    article > .wrapper {
      margin: 0 auto;
    }

    .title {
      padding: 16px;
      margin-bottom: 30px;
    }

    i {
      margin-right: 10px;
    }

    .images-list-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .image-bundle {
      margin-bottom: 70px;

      &::last-child {
        margin-bottom: 0;
      }
    }

    .sequence {
      padding: 0 1em;
      margin-bottom: 1.25em;

      h3 {
        margin-bottom: 0.4em;
      }
    }

    p.order-description {
      /* padding: 0 0.5em; */
      margin: 0 auto;
      font-size: 0.95em;
      max-width: 350px;
    }

    figure.image-cover {
      position: relative;
      margin-bottom: 1.3em;
    }

    img {
      display: block;
      width: 93%;
      max-width: 381.062px;
      border-radius: 10px;
      margin: 0 auto;
      box-shadow: ${({ theme }) => theme.shadow};
    }

    .video-box {
      width: 92vw;
      max-width: 381.062px;
      margin: 0 auto;

      video {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      padding: 70px 0;

      .title {
        text-align: center;
        margin-bottom: 50px;
      }

      ul.images-list {
      }

      li.image-bundle {
        /* max-width: 350px; */
        /* display: inline-block; */
        /* margin: 0 30px 50px 0; */
      }
    }
  }
`;
