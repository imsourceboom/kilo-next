import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { Cover, Main } from './styled';

import Header from './Header';
import Footer from './Footer';

import GuideNavigation from 'components/GuideNavigation';

import {
  // pageYAction,
  guidePathAction,
  guideFirstChildPathAction,
  guideSecondChildPathAction,
  // headerHeightAction,
} from '../../reducers/event';

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { guidePath, guideFirstChildPath, guideSecondChildPath } = useSelector(
    state => state.event,
  );

  const eventCancel = useCallback(e => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    const pathname = router.pathname;
    const arr = pathname.split('/');

    if (arr[1] === 'guide') {
      dispatch(guidePathAction(true));
      dispatch(guideFirstChildPathAction(arr[2]));
      dispatch(guideSecondChildPathAction(arr[3]));
    } else {
      dispatch(guidePathAction(false));
      dispatch(guideFirstChildPathAction(null));
      dispatch(guideSecondChildPathAction(null));
    }
  }, []);

  return (
    <Cover href="" onClick={eventCancel}>
      <Header />
      {/* <h1>Test</h1> */}
      {guidePath && (
        <GuideNavigation
          firstPath={guideFirstChildPath}
          secondPath={guideSecondChildPath}
        />
      )}
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
      <Footer />
    </Cover>
  );
};

export default React.memo(Layout);
