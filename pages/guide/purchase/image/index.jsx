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
            <div className="images-list-box">
              <div className="image-bundle">
                <div className="sequence">
                  <h3>1. TON 매수</h3>
                </div>
                <figure className="image-cover">
                  <TouchAnimation bottom="7" right="20" />
                  <img src={require('@/guide/purchase/main.jpg')} alt="" />
                </figure>
              </div>
              <div className="image-bundle">
                <div className="sequence">
                  <h3>2. 수량 선택</h3>
                </div>
                <figure className="image-cover">
                  <TouchAnimation bottom="10" left="50" />
                  <img src={require('@/guide/purchase/menu.jpg')} alt="" />
                </figure>
                <p className="order-description">
                  정해진 수량 버튼 대신에 메시지 입력란에 원하는 수량 입력 후 메시지
                  보내기를 하면 입력한 수량만큼 선택할 수 있습니다
                </p>
              </div>
              <div className="image-bundle">
                <div className="sequence">
                  <h3>3. 수량 및 예상 결제 금액 확인</h3>
                </div>
                <figure className="image-cover">
                  <TouchAnimation bottom="7" right="20" />
                  <img src={require('@/guide/purchase/confirm.jpg')} alt="" />
                </figure>
              </div>
              <div className="image-bundle">
                <div className="sequence">
                  <h3>4. 결제</h3>
                </div>
                <figure className="image-cover">
                  <TouchAnimation bottom="13" right="30" />
                  <img src={require('@/guide/purchase/payment.jpg')} alt="" />
                </figure>
                <p className="order-description">
                  결제 버튼 대신에 이용하시는 거래소를 통해 비트코인 입금 주소로 송금하실
                  수 있습니다
                </p>
              </div>
              <div className="image-bundle">
                <div className="sequence">
                  <h3>5. TON 매수 완료</h3>
                </div>
                <figure className="image-cover">
                  <img src={require('@/guide/purchase/result.jpg')} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </article>
      </LayoutGuide>
    </Layout>
  );
};

export default GuideImage;
