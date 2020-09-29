import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import wrapper from '../store/configureStore';

import Favicons from 'components/Favicons';

import { GlobalStyled } from '../styles';
import { lightTheme, darkTheme } from '../styles/theme';
import { darkModeAction } from '../reducers/event';

const Kilo = ({ Component, pageProps, router }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.event);

  const detectDarkMode = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(darkModeAction(true));
    } else {
      dispatch(darkModeAction(false));
    }
  };

  useEffect(() => {
    detectDarkMode();
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <title>Kilo</title>
        <Favicons />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <GlobalStyled />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(Kilo);
