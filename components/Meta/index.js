import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import { hrefAction } from '../../reducers/event';

const Meta = ({ title, description }) => {
  const dispatch = useDispatch();
  const { href } = useSelector(state => state.event);

  useEffect(() => {
    dispatch(hrefAction(window.location.href));
  }, [href]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={href} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/opengraph.jpg" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Meta;
