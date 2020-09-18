import React from 'react';
import Link from 'next/link';

import { Container } from './styled';

const GuideNavigation = ({ firstPath, secondPath, pageY }) => {
  return (
    <Container pageY={pageY} firstPath={firstPath} secondPath={secondPath}>
      {console.log(secondPath)}
      {console.log(firstPath)}
      <div className="guide-wrapper">
        <div className="filter one">
          <span className="purchase-btn">
            <Link href="/guide/purchase/image">
              <span className="pointer">
                <i>💎</i> TON 구매하기
              </span>
            </Link>
          </span>
          <span className="withdraw-btn">
            <Link href="/guide/withdraw/image">
              <span className="pointer">
                <i>🔑</i> TON 출금하기
              </span>
            </Link>
          </span>
        </div>
        <div className="filter two">
          <span className="image-btn">
            <Link href={`/guide/${firstPath}/image`}>
              <span className="pointer">이미지로 보기</span>
            </Link>
          </span>
          <span className="video-btn">
            <Link href={`/guide/${firstPath}/video`}>
              <span className="pointer">동영상으로 보기</span>
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(GuideNavigation);
