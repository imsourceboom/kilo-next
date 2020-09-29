import React, { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import DarkMode from 'components/Darkmode';

import { Container } from './styled';

import throttling from '../../../util/throttling';
import { pageYAction } from '../../../reducers/event';

const Header = () => {
  const dispatch = useDispatch();
  const { pageY } = useSelector(state => state.event);

  const headerRef = useRef();

  const handleScroll = useCallback(() => {
    let pageYvalue = window.pageYOffset;
    dispatch(pageYAction(pageYvalue));
  }, [pageY]);

  useEffect(() => {
    window.addEventListener('scroll', throttling(handleScroll, 500));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container pageY={pageY} ref={headerRef}>
      <div className="container">
        <Link href="/">
          <button type="button">
            <figure className="logo">
              <img src={require('@/favicons/android-icon-48x48.png')} alt="Logo" />
            </figure>
          </button>
        </Link>
        <DarkMode />
      </div>
    </Container>
  );
};

export default React.memo(Header);
