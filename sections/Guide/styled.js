import styled, { keyframes } from 'styled-components';

const touch = keyframes`
    0% {
      opacity: .2;
      transform: scale(1);
    }

    100% {
      opacity: .7;
      transform: scale(.8);
    }
`;

export const TouchBox = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  right: ${({ right }) => `${right}%`};
  bottom: ${({ bottom }) => `${bottom}%`};
  width: 50px;
  height: 50px;
  border: 2px solid #74b9ff;
  border-radius: 50%;
  animation: ${touch} 1s alternate infinite;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  &::before {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 2px solid #74b9ff;
  }

  &::after {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #74b9ff;
  }
`;

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
