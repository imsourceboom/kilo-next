import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { Cover, Main } from './styled';

import Header from './Header';
import Footer from './Footer';

import AppGuideNavigation from 'components/AppGuideNavigation';
import BotGuideNavigation from 'components/BotGuideNavigation';
import TopButton from 'components/TopButton';

import {
  // pageYAction,
  guideBotPathAction,
  guideBotFirstChildPathAction,
  guideBotSecondChildPathAction,
  guideAppPathAction,
  guideAppKindAction,
  // headerHeightAction,
} from '../../reducers/event';

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    guideBotPath,
    guideBotFirstChildPath,
    guideBotSecondChildPath,
    guideAppPath,
    guideAppKind,
  } = useSelector((state) => state.event);

  const eventCancel = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    const pathname = router.pathname;
    const arr = pathname.split('/');

    if (arr[2] === 'bot') {
      dispatch(guideBotPathAction(true));
      dispatch(guideBotFirstChildPathAction(arr[3]));
      dispatch(guideBotSecondChildPathAction(arr[4]));
    } else {
      dispatch(guideBotPathAction(false));
      dispatch(guideBotFirstChildPathAction(null));
      dispatch(guideBotSecondChildPathAction(null));
    }

    if (arr[2] === 'android' || arr[2] === 'ios') {
      dispatch(guideAppPathAction(true));
      dispatch(guideAppKindAction(arr[2]));
    } else {
      dispatch(guideAppPathAction(false));
      dispatch(guideAppKindAction(null));
    }
  }, []);

  return (
    <Cover href="" onClick={eventCancel}>
      <Header />
      {guideBotPath && (
        <BotGuideNavigation
          firstPath={guideBotFirstChildPath}
          secondPath={guideBotSecondChildPath}
        />
      )}
      {guideAppPath && <AppGuideNavigation kind={guideAppKind} />}
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
      <TopButton />
    </Cover>
  );
};

export default React.memo(Layout);
