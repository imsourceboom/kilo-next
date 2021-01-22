import React from 'react';

import Layout from 'components/Layout';
import LayoutGuide from 'components/LayoutGuide';

import TouchAnimation from 'components/TouchAnimation';

import Meta from 'components/Meta';

const AndroidInstall = () => {
  return (
    <>
      <Meta
        title="KiloX - iOS용 KiloX Wallet 애플리케이션 설치 가이드"
        description="프리톤 블록체인의 올인원 봇 킬로엑스의 iOS용 KiloX Wallet 애플리케이션 설치 이미지 가이드입니다."
      />
      <Layout>
        <LayoutGuide>
          <article className="app">
            <div className="wrapper">
              <h1 className="title">
                <i>설치하기</i>
                {/* <p className="annotation">
                  iOS용 Kilox Wallet 애플리케이션은 현재 테스트 버전입니다
                </p> */}
              </h1>
              <div className="images-list-box">
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>1. 앱스토어 접속</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="12" left="15" />
                    <img src={require('@/guide/ios/install/store.jpg')} alt="" />
                  </figure>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>2. KiloX Wallet 검색</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="17.5" left="60" />
                    <img src={require('@/guide/ios/install/home.jpg')} alt="" />
                  </figure>
                  <p className="order-description">
                    앱스토어 검색창에 KiloX Wallet를 검색하세요
                  </p>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>3. KiloX Wallet 선택</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="17" right="29" />
                    <img src={require('@/guide/ios/install/search.jpg')} alt="" />
                  </figure>
                  <p className="order-description">
                    검색 결과로 나온 KiloX Wallet를 선택하세요
                  </p>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>4. 설치</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation top="21.5" right="37" />
                    <img src={require('@/guide/ios/install/install.jpg')} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </article>
        </LayoutGuide>
      </Layout>
    </>
  );
};

export default AndroidInstall;
