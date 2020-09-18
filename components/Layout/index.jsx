import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { Cover, Main } from './styled';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { headerHeight } = useSelector(state => state.event);

  const eventCancel = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <Cover href="" onClick={eventCancel}>
      <Header />
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
        <Main headerHeight={headerHeight}>{children}</Main>
      </motion.div>
      <Footer />
    </Cover>
  );
};

export default React.memo(Layout);
