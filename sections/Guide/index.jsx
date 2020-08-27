import React from 'react';

import { Section, TouchBox } from './styled';

const Touch = ({ top, right, bottom, left }) => {
  return <TouchBox top={top} right={right} bottom={bottom} left={left} />;
};

const Guide = () => {
  return (
    <Section>
      <div className="container">
        <article className="purchase">
          <div className="wrapper">
            <h1 className="title">
              <i>💎</i> TON 구매하기
            </h1>
            <ul className="images-list">
              <li className="image-bundle">
                <figure className="image-cover">
                  <Touch bottom="7" right="20" />
                  <img src={require('@/guide/purchase/main.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <Touch bottom="10" left="50" />
                  <img src={require('@/guide/purchase/menu.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <Touch bottom="7" right="20" />
                  <img src={require('@/guide/purchase/confirm.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <Touch bottom="13" right="30" />
                  <img src={require('@/guide/purchase/payment.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <img src={require('@/guide/purchase/result.jpg')} alt="" />
                </figure>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
};

export default Guide;
