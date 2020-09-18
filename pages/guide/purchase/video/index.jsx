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
              <video src="/guide/purchase/purchase.mp4" muted controls></video>
            </div>
          </div>
        </article>
      </LayoutGuide>
    </Layout>
  );
};

export default GuideVideo;
