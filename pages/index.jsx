import React from 'react';

import Layout from 'components/Layout';
import Meta from 'components/Meta';

import Home from '../sections/Home';

const Index = () => {
  return (
    <>
      <Meta
        title="KiloX"
        description="킬로엑스는 프리톤 블록체인의 올인원 봇 입니다. 사용하기 간편한 거래소이고 빠르고 안전한 지갑이기도 합니다. 앞으로 탐색기 등 여러 유용한 기능이 더해질 예정입니다."
      />

      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default Index;
