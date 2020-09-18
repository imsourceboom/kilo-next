import styled from 'styled-components';

export const Section = styled.section`
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

    ul.images-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    li.image-bundle {
      margin-bottom: 50px;
    }

    figure.image-cover {
      position: relative;
    }

    img {
      display: block;
      width: 93%;
      max-width: 381.062px;
      border-radius: 10px;
      margin: 0 auto;
      box-shadow: ${({ theme }) => theme.shadow};
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
