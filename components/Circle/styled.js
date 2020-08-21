import styled, { keyframes } from 'styled-components';

const circle = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: center;
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(2);
  z-index: -1;
  width: 300px;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-logo-circles {
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-user-select: none;
    user-select: none;
  }

  .hero-circle {
    position: absolute;
  }

  .hero-logo-circle1 {
    animation: ${circle} 25s forwards linear infinite;
  }
  .hero-logo-circle2 {
    animation: ${circle} 30s forwards linear infinite;
  }
  .hero-logo-circle3 {
    animation: ${circle} 32s forwards linear infinite;
  }
  .hero-logo-circle4 {
    animation: ${circle} 41s forwards linear infinite;
  }
  .hero-logo-circle5 {
    animation: ${circle} 52s forwards linear infinite;
  }
  .hero-logo-circle6 {
    animation: ${circle} 65s forwards linear infinite;
  }
  .hero-logo-circle7 {
    animation: ${circle} 80s forwards linear infinite;
  }
  .hero-logo-circle8 {
    animation: ${circle} 97s forwards linear infinite;
  }
  .hero-logo-circle9 {
    animation: ${circle} 116 forwards linear infinite;
  }
  .hero-logo-circle10 {
    animation: ${circle} 138s forwards linear infinite;
  }

  @media (min-width: 768px) {
    transform: translate3d(-50%, -50%, 0) scale(2.5);
  }
`;
