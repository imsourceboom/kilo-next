import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { Cover, Header, Main, Footer } from './styled';

import DarkMode from 'components/Darkmode';

import throttling from '../../util/throttling';
import { pageYAction } from '../../reducers/event';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { pageY } = useSelector(state => state.event);

  const eventCancel = e => {
    e.preventDefault();
  };

  const handleScroll = () => {
    let pageYvalue = window.pageYOffset;
    dispatch(pageYAction(pageYvalue));
  };

  useEffect(() => {
    window.addEventListener('scroll', throttling(handleScroll));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Cover href="" onClick={eventCancel}>
      <Header pageY={pageY}>
        <div className="container">
          <Link href="/">
            <span className="pointer">
              <figure className="logo">
                <img src={require('@/favicons/android-icon-48x48.png')} alt="Logo" />
              </figure>
            </span>
          </Link>
          <DarkMode />
        </div>
      </Header>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            // transition: {
            //   duration: 0.7,
            // },
          },
          pageExit: {
            filter: `blur(3px)`,
            opacity: 0,
          },
        }}>
        <Main>{children}</Main>
      </motion.div>
      <Footer>
        <div className="container">
          <ul className="policy-wrap"></ul>
          <div className="copyright-wrap">2020 © Kilo</div>
        </div>
      </Footer>
    </Cover>
  );
};

export default Layout;
