import React from 'react';

import { Container } from './styled';

const LayoutGuide = ({ children }) => {
  return (
    <Container>
      <div className="container">{children}</div>
    </Container>
  );
};

export default LayoutGuide;
