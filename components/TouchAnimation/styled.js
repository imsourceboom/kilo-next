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

export const Container = styled.div`
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
