import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: black;

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notice {
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 20px;
  }

  .suggest {
    text-align: center;
  }

  .other {
    margin-top: 70px;
  }

  ul {
    li {
      width: 25%;
      float: left;
      text-align: center;
      opacity: 0.7;
      -webkit-transition: 0.3s;
      -ms-transition: 0.3s;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }

      img {
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-bottom: 10px;
      }
    }
  }
`;
