import React from 'react';
import Link from 'next/link';

import { Container } from './styled';

const BotGuideNavigation = ({ firstPath, secondPath, pageY }) => {
  return (
    <Container pageY={pageY} firstPath={firstPath} secondPath={secondPath}>
      <div className="guide-wrapper">
        <div className="filter one">
          <span className="purchase-btn">
            <Link href="/guide/bot/purchase/image">
              <button type="button">
                <i>💎</i> TON 구매하기
              </button>
            </Link>
          </span>
          <span className="withdraw-btn">
            <Link href="/guide/bot/withdraw/image">
              <button type="button">
                <i>🔑</i> TON 출금하기
              </button>
            </Link>
          </span>
        </div>
        <div className="filter two">
          <span className="image-btn">
            <Link href={`/guide/bot/${firstPath}/image`}>
              <button type="button">이미지로 보기</button>
            </Link>
          </span>
          <span className="video-btn">
            <Link href={`/guide/bot/${firstPath}/video`}>
              <button type="button">동영상으로 보기</button>
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(BotGuideNavigation);
