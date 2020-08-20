import React, { useRef } from 'react';

import Layout from 'components/Layout';
import Meta from 'components/Meta';

import { Section } from '../styles/indexStyled';

const Home = () => {
  const target = useRef();

  const prevent = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Meta title="Kilo" description="BlockChain" />

      <Layout>
        <Section>
          <div className="container">
            <a href="" ref={target} onClick={prevent} className="intro">
              <p>
                킬로엑스는 프리톤 블록체인의 <br /> 올인원 봇입니다
              </p>
              <p>
                사용하기 간편한 거래소이고 <br /> 빠르고 안전한 지갑이기도 합니다
              </p>
              <p>
                앞으로 탐색기 등 여러 유용한 기능이 <br /> 더해질 예정입니다
              </p>
            </a>
          </div>
        </Section>
      </Layout>
    </div>
  );
};

export default Home;
