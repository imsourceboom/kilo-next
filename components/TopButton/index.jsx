import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styled';

const TopButton = () => {
  const { pageY } = useSelector(state => state.event);

  const pageTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container onClick={pageTop} pageY={pageY}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </Container>
  );
};

export default React.memo(TopButton);
