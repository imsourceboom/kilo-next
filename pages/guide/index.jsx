import React from 'react';

import Layout from 'components/Layout';
import Meta from 'components/Meta';

import Section from 'sections/Guide';

const Guide = () => {
  return (
    <>
      <Meta title="Kilo - Guide" />

      <Layout>
        <Section />
      </Layout>
    </>
  );
};

export default Guide;
