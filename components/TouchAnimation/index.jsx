import React from 'react';

import { Container } from './styled';

const TouchAnimation = ({ top, right, bottom, left }) => {
  return <Container top={top} right={right} bottom={bottom} left={left} />;
};

export default TouchAnimation;
