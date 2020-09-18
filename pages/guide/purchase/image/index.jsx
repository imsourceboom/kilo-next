import React from 'react';

import Layout from 'components/Layout';
import LayoutGuide from 'components/LayoutGuide';

import TouchAnimation from 'components/TouchAnimation';

const GuideImage = () => {
  return (
    <Layout>
      <LayoutGuide>
        <article className="purchase">
          <div className="wrapper">
            <h1 className="title">
              <i>💎</i> TON 구매하기
            </h1>
            <ul className="images-list">
              <li className="image-bundle">
                <figure className="image-cover">
                  <TouchAnimation bottom="7" right="20" />
                  <img src={require('@/guide/purchase/main.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <TouchAnimation bottom="10" left="50" />
                  <img src={require('@/guide/purchase/menu.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <TouchAnimation bottom="7" right="20" />
                  <img src={require('@/guide/purchase/confirm.jpg')} alt="" />
                </figure>
              </li>
              <li className="image-bundle">
                <figure className="image-cover">
                  <TouchAnimation bottom="13" right="30" />
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
      </LayoutGuide>
    </Layout>
  );
};

export default GuideImage;
