import React, { useCallback } from 'react';
import Link from 'next/link';

import GooglePlay from 'components/SVG/GooglePlay';
import AppStore from 'components/SVG/AppStore';

import { Container } from './styled';

const UseButton = () => {
  const newTabTelegramBot = useCallback(() => {
    window.open('https://t.me/kiloxbot', '_blank');
  }, []);

  const newTabAndroid = useCallback(() => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.kilox.app&hl=ko',
      '_blank',
    );
  }, []);

  const newTabiOS = useCallback(() => {
    window.open('https://apps.apple.com/us/app/kilox-wallet/id1535086604', '_blank');
    // window.open('https://apps.apple.com/kr/app/testflight/id899247664', '_blank');
  }, []);

  return (
    <Container>
      <div className="wrapper">
        <div onClick={newTabTelegramBot} className="join-button">
          {/* 곧 출시됩니다... */}
          <span className="icon">
            <img src={require('@/favicons/favicon-32x32.png')} alt="" />
          </span>
          킬로엑스 봇
        </div>
        <div className="devicons">
          <img src={require('@/telegram.svg')} alt="" />
          <span>in</span>
          <svg viewBox="0 0 128 128">
            <path
              fill="#A4C439"
              d="M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736c.001 4.064 3.288 7.344 7.342 7.343 4.056 0 7.342-3.28 7.338-7.342v-30.741c-.002-4.049-3.291-7.339-7.346-7.337m59.193-27.602l5.123-9.355c.273-.489.094-1.111-.401-1.388-.5-.265-1.117-.085-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005l-5.181-9.429c-.269-.497-.889-.677-1.378-.406-.498.269-.681.892-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427m-31.256 14.457c-1.521-.003-2.763-1.241-2.763-2.771 0-1.523 1.238-2.775 2.766-2.774 1.533-.001 2.773 1.251 2.775 2.774 0 1.528-1.243 2.77-2.778 2.771m30.106-.005c-1.528.002-2.772-1.237-2.772-2.771.006-1.52 1.242-2.772 2.773-2.778 1.521.005 2.768 1.258 2.767 2.779.003 1.53-1.24 2.771-2.768 2.77m-47.853 14.537l.011 47.635c-.003 4.333 3.502 7.831 7.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004c4.32.002 7.834-3.5 7.836-7.834l-.009-47.635-65.624.011zm83.134 5.943c-.001-4.055-3.286-7.341-7.341-7.339-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738c-.001 4.058 3.283 7.338 7.339 7.339 4.054-.001 7.337-3.281 7.338-7.343l-.005-30.737z"></path>
          </svg>
          <svg viewBox="0 0 128 128">
            <path
              // fill="#ffffff"
              d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
          </svg>
          <svg viewBox="0 0 128 128">
            <path
              fill="#00ADEF"
              d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zM58.467 67.389l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"></path>
          </svg>
        </div>
      </div>
      <div className="guide">
        <Link href="/guide/bot/purchase/image">
          <button type="button">킬로엑스 사용법 →</button>
        </Link>
      </div>
      <div className="app-container">
        <div className="bundle">
          <div className="app-wrapper">
            <div onClick={newTabAndroid} className="android-button">
              <img
                src={
                  'https://play-lh.googleusercontent.com/1siCbYovOktLBtxL86r0u7LLksSuYBMhJeBOZvdCFdBNWu3mx_BL3B-V1ckfhHTuHA=s180-rw'
                }
                alt=""
              />
            </div>
            <p>for</p>

            <div className="google-play">
              <GooglePlay />
            </div>
          </div>
          <div className="guide">
            <Link href="/guide/android/install">
              <button type="button">안드로이드 킬로엑스 앱 설치방법 →</button>
            </Link>
          </div>
        </div>
        <div className="bundle">
          <div className="app-wrapper">
            <div onClick={newTabiOS} className="android-button">
              <img
                src={
                  'https://play-lh.googleusercontent.com/1siCbYovOktLBtxL86r0u7LLksSuYBMhJeBOZvdCFdBNWu3mx_BL3B-V1ckfhHTuHA=s180-rw'
                }
                alt=""
              />
            </div>
            <p>for</p>

            <div className="app-store">
              <AppStore />
            </div>
          </div>
          <div className="guide">
            <Link href="/guide/ios/install">
              <button type="button">iOS 킬로엑스 앱 설치방법 →</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(UseButton);
