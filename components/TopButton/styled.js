import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 999999;
  display: ${({ pageY }) => (pageY > 55 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background-color: ${({ theme }) => theme.topButton.backgroundColor};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.topButton.shadow};

  svg {
    stroke: ${({ theme }) => theme.topButton.stroke};
  }
`;
