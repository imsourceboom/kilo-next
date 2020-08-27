import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content="" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/opengraph.jpg" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Meta;
