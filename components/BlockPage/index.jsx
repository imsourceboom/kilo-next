import React from 'react';

import { Container } from './styled';

const browsers = [
  {
    name: 'Chrome',
    url: 'https://www.google.com/intl/ko_ALL/chrome/',
    image: 'https://www.google.com/chrome/static/images/chrome-logo.svg',
  },
  {
    name: 'Whale',
    url: 'https://whale.naver.com/ko/',
    image: 'https://upload.wikimedia.org/wikipedia/ko/7/7a/Naver_whale_logo.png',
  },
  {
    name: 'Edge',
    url: 'https://www.microsoft.com/ko-kr/edge',
    image: 'https://i.pinimg.com/originals/d5/e4/b2/d5e4b203dd4bce1f7dbe661502e4c93d.png',
  },
  {
    name: 'FireFox',
    url: 'https://www.mozilla.org/ko/firefox/',
    image:
      'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png',
  },
];

const BlockPage = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="notice">
          Kilox 서비스는 Internet Explorer 브라우저에서 원활하게 동작하지 않습니다
        </div>
        <div className="suggest">아래 브라우저들을 이용해주세요</div>
        <div className="other">
          <ul className="box">
            {browsers.map((browser) => (
              <li>
                <a href={browser.url}>
                  <img src={browser.image} alt="" />
                  <div className="name">{browser.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default BlockPage;
