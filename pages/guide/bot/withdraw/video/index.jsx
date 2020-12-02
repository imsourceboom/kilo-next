import React from 'react';

import Layout from 'components/Layout';
import LayoutGuide from 'components/LayoutGuide';

import Meta from 'components/Meta';

const GuideVideo = () => {
  return (
    <>
      <Meta
        title="Kilox - TON 출금하기 동영상 가이드"
        description="프리톤 블록체인의 올인원 봇 킬로엑스의 TON 출금하기 동영상 가이드입니다."
      />

      <Layout>
        <LayoutGuide>
          <article className="purchase">
            <div className="wrapper">
              <h1 className="title">
                <i>🔑</i> TON 출금하기
              </h1>
              <div className="video-box">
                <video
                  muted
                  controls
                  preload="metadata"
                  poster={require('@/guide/bot/poster.jpg')}>
                  <source
                    type="video/mp4"
                    src={require('@/guide/bot/withdraw/withdraw.mp4')}
                  />
                </video>
              </div>
              {/* <div className="ready-box">
                <h2>준비 중입니다...</h2>
              </div> */}
            </div>
          </article>
        </LayoutGuide>
      </Layout>
    </>
  );
};

export default GuideVideo;
