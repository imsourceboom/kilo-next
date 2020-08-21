import React from 'react';

import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Circle from 'components/Circle';

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
            <article className="preview">
              <Circle />
              <picture>
                <source srcSet={require('@/preview.jpg?webp')} type="image/webp" />
                <source srcSet={require('@/preview.jpg')} type="image/jpeg" />
                <img src={require('@/preview.jpg')} alt="" />
              </picture>
            </article>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Home;
