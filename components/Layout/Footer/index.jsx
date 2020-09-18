import React from 'react';

import { Container } from './styled';

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <ul className="policy-wrap"></ul>
        <div className="copyright-wrap">2020 © Kilo</div>
      </div>
    </Container>
  );
};

export default React.memo(Footer);
