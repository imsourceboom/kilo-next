import React, { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import DarkMode from 'components/Darkmode';
import GuideNavigation from 'components/GuideNavigation';

import { Container } from './styled';

import throttling from '../../../util/throttling';
import {
  pageYAction,
  guidePathAction,
  guideFirstChildPathAction,
  guideSecondChildPathAction,
  headerHeightAction,
} from '../../../reducers/event';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pageY, guidePath, guideFirstChildPath, guideSecondChildPath } = useSelector(
    state => state.event,
  );

  const headerRef = useRef();

  const handleScroll = useCallback(() => {
    let pageYvalue = window.pageYOffset;
    dispatch(pageYAction(pageYvalue));
  }, [pageY]);

  useEffect(() => {
    let headerElem = headerRef.current;
    dispatch(headerHeightAction(headerElem.offsetHeight));
  }, [guidePath]);

  useEffect(() => {
    window.addEventListener('scroll', throttling(handleScroll, 500));
    return () => window.removeEventListener('scroll', handleScroll);
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
    <Container pageY={pageY} ref={headerRef}>
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
      {guidePath && (
        <GuideNavigation
          pageY={pageY}
          firstPath={guideFirstChildPath}
          secondPath={guideSecondChildPath}
        />
      )}
    </Container>
  );
};

export default React.memo(Header);
