import React from 'react';

import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Circle from 'components/Circle';
import UseButton from 'components/UseButton';

import { Section } from '../styles/indexStyled';

const Home = () => {
  return (
    <>
      <Meta title="Kilo" description="BlockChain" />

      <Layout>
        <Section>
          <div className="container">
            <article className="intro">
              <p>
                킬로엑스는 프리톤 블록체인의 <br /> 올인원 봇입니다
              </p>
              <p>
                사용하기 간편한 거래소이고 <br /> 빠르고 안전한 지갑이기도 합니다
              </p>
              <p>
                앞으로 탐색기 등 여러 유용한 기능이 <br /> 더해질 예정입니다
              </p>
            </article>
            <UseButton />
            <article className="preview">
              <Circle />
              <picture>
                <source srcSet={require('@/preview.jpg?webp')} type="image/webp" />
                <source srcSet={require('@/preview.jpg')} type="image/jpeg" />
                <img src={require('@/preview.jpg')} alt="" />
              </picture>
            </article>
            <article className="description">
              <h1 className="kilox-is">킬로엑스는</h1>
              <div className="wrapper">
                <div className="box">
                  <h2 className="title">
                    <i>👝</i>지갑입니다
                  </h2>
                  <p className="about">
                    세련되고 직관적인 인터페이스로 코인을 관리하세요. 저장하고, 전송하고
                    블록체인 운영에 참여하는 데 사용하세요. 이 모든 것이 몇 번의 탭으로
                    가능합니다.
                  </p>
                </div>
                <div className="box">
                  <h2 className="title">
                    <i>🏦</i>거래소입니다
                  </h2>
                  <p className="about">
                    아주 간편하게 코인을 구매할 수 있습니다. 거래되고 있는 코인 중 가장
                    낮은 가격의 코인을 봇이 자동으로 감지하여 구매할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="middle-comment">
                올인원 봇 킬로엑스를 사용해보세요 - <br />
                암호화폐 지갑, 거래소, 채팅, 보안
              </div>
              <div className="wrapper">
                <div className="box">
                  <h2 className="title">
                    <i>💬</i>채팅입니다
                  </h2>
                  <p className="about">
                    텔레그램 그 자체입니다. 친구들과 메세지를 주고 받으며 코인을 주고 받을
                    수 있습니다.
                  </p>
                </div>
                <div className="box">
                  <h2 className="title">
                    <i>👮‍♂️</i>안전합니다
                  </h2>
                  <p className="about">
                    텔레그램 보안 시스템 안에서 서비스를 이용합니다. 텔레그램은 메이저급
                    메세지 애플리케이션 중에서 보안이 가장 뛰어나기로 정평이 나 있습니다.
                  </p>
                </div>
              </div>
            </article>
            <article className="something">
              <div className="wrapper">
                <div className="more">
                  <h1>
                    <i>🔍</i>탐색기
                  </h1>
                </div>
                <div className="more">
                  <h1>
                    <i>🔒</i>
                    스테이킹
                  </h1>
                </div>
              </div>
            </article>
            <article className="suggest">
              <p>
                한층 진화된 킬로엑스로 <br className="tablet" />톤 블록체인 생태계에{' '}
                <br /> 참여해 보세요
              </p>
            </article>
            <UseButton />
            <article className="contact">
              <p>
                <i>✉️</i>
                kilox_cs@gmail.com
              </p>
            </article>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Home;
