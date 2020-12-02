import React from 'react';

import Layout from 'components/Layout';
import LayoutGuide from 'components/LayoutGuide';

import TouchAnimation from 'components/TouchAnimation';

import Meta from 'components/Meta';

const GuideImage = () => {
  return (
    <>
      <Meta
        title="Kilo - TON 출금하기 이미지 가이드"
        description="프리톤 블록체인의 올인원 봇 킬로엑스의 TON 출금하기 이미지 가이드입니다."
      />

      <Layout>
        <LayoutGuide>
          <article className="withdraw">
            <div className="wrapper">
              <h1 className="title">
                <i>🔑</i> TON 출금하기
              </h1>
              <div className="images-list-box">
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>1. 내 지갑</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation bottom="1" right="7" />
                    <img src={require('@/guide/bot/withdraw/main.jpg')} alt="" />
                  </figure>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>2. 출금하기</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation bottom="5" right="25" />
                    <img src={require('@/guide/bot/withdraw/mywallet.jpg')} alt="" />
                  </figure>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>3. 입금 주소 입력</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation bottom="5" right="5" />
                    <img src={require('@/guide/bot/withdraw/addressinput.jpg')} alt="" />
                  </figure>
                  <p className="order-description">
                    메시지 입력란에 받으시는 분의 주소를 입력하신 후 <br />
                    보내기 버튼을 클릭하세요
                  </p>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>4. 출금 금액 입력</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation bottom="10" right="5" />
                    <img src={require('@/guide/bot/withdraw/amount.jpg')} alt="" />
                  </figure>
                  <p className="order-description">
                    메시지 입력란에 보내시려는 금액을 입력하신 후 <br />
                    보내기 버튼을 클릭하세요
                    <br />
                    <br />
                    <span>
                      ❗️ <b>최대 10,000 </b>개까지 보내실 수 있습니다
                    </span>
                  </p>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>5. 출금 신청 확인</h3>
                  </div>
                  <figure className="image-cover">
                    <TouchAnimation bottom="5" right="25" />
                    <img src={require('@/guide/bot/withdraw/confirm.jpg')} alt="" />
                  </figure>
                </div>
                <div className="image-bundle">
                  <div className="sequence">
                    <h3>6. TON 출금 완료</h3>
                  </div>
                  <figure className="image-cover">
                    <img src={require('@/guide/bot/withdraw/complete.jpg')} alt="" />
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

export default GuideImage;
