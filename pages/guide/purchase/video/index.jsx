import React from 'react';

import Layout from 'components/Layout';
import LayoutGuide from 'components/LayoutGuide';

const GuideVideo = () => {
  return (
    <Layout>
      <LayoutGuide>
        <article className="purchase">
          <div className="wrapper">
            <h1 className="title">
              <i>💎</i> TON 구매하기
            </h1>
            <div className="video-box">
              <video
                muted
                controls
                preload="metadata"
                poster={require('@/guide/purchase/poster.jpg')}>
                <source type="video/mp4" src="/guide/purchase/purchase.mp4" />
              </video>
            </div>
          </div>
        </article>
      </LayoutGuide>
    </Layout>
  );
};

export default GuideVideo;
