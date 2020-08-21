import React from 'react';

import { Wrapper } from './styled';

const Circle = () => {
  return (
    <Wrapper className="circle-wrap">
      <div className="hero-logo-circles">
        <img className="hero-circle" src={require('@/circles/circle0.svg')} />
        <img
          className="hero-logo-circle1 hero-circle"
          src={require('@/circles/circle1.svg')}
        />
        <img
          className="hero-logo-circle2 hero-circle"
          src={require('@/circles/circle2.svg')}
        />
        <img
          className="hero-logo-circle3 hero-circle"
          src={require('@/circles/circle3.svg')}
        />
        <img
          className="hero-logo-circle4 hero-circle"
          src={require('@/circles/circle4.svg')}
        />
        <img
          className="hero-logo-circle5 hero-circle"
          src={require('@/circles/circle5.svg')}
        />
        <img
          className="hero-logo-circle6 hero-circle"
          src={require('@/circles/circle6.svg')}
        />
        <img
          className="hero-logo-circle7 hero-circle"
          src={require('@/circles/circle7.svg')}
        />
        <img
          className="hero-logo-circle8 hero-circle"
          src={require('@/circles/circle8.svg')}
        />
        <img
          className="hero-logo-circle9 hero-circle"
          src={require('@/circles/circle9.svg')}
        />
        <img
          className="hero-logo-circle10 hero-circle"
          src={require('@/circles/circle10.svg')}
        />
      </div>
    </Wrapper>
  );
};

export default Circle;
