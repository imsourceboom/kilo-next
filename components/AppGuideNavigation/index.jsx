import React from 'react';
import Link from 'next/link';

import GooglePlay from 'components/SVG/GooglePlay';
import AppStore from 'components/SVG/AppStore';

import { Container } from './styled';

const AppGuideNavigation = ({ kind }) => {
  return (
    <Container kind={kind}>
      <div className="guide-wrapper">
        <div className="filter one">
          <span className="google-btn">
            <Link href="/guide/android/install">
              <button type="button">
                <GooglePlay />
              </button>
            </Link>
          </span>
          <span className="apple-btn">
            <Link href="/guide/ios/install">
              <button type="button">
                <AppStore />
              </button>
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(AppGuideNavigation);
