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
              <i>🔑</i> TON 출금하기
            </h1>
            <div className="video-box">
              <video src="/purchase-guide.mp4"></video>
            </div>
          </div>
        </article>
      </LayoutGuide>
    </Layout>
  );
};

export default GuideVideo;
