import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const TopSection = () => {
  return (
    <>
      <section class="inflab-integrated">
        <header>
          <div class="inflab-integrated__container">
            <ul class="inflab-integrated__service">
              <li>
                <a class="active" href="/">
                  <Logo width="20" height="20" />
                  교육
                </a>
              </li>
              <li>
                <a class="e-gtm-rallit-link" href="https://www.rallit.com">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 10.7626C3 7.3177 5.76662 4.52502 9.17943 4.52502H12.7955V7.11248H9.17943C7.1823 7.11248 5.56332 8.74672 5.56332 10.7626C5.56332 12.7786 7.1823 14.4128 9.17943 14.4128C11.1765 14.4128 12.7955 12.7786 12.7955 10.7626V7.11248H15.3589V10.7626C15.3589 14.2076 12.5922 17.0003 9.17943 17.0003C5.76662 17.0003 3 14.2076 3 10.7626Z"
                      fill="#858A8D"
                    ></path>
                    <path
                      d="M15.4272 5.91089C16.2235 5.91089 16.8691 5.25927 16.8691 4.45545C16.8691 3.65163 16.2235 3 15.4272 3C14.6309 3 13.9854 3.65163 13.9854 4.45545V5.91089H15.4272Z"
                      fill="#858A8D"
                    ></path>
                  </svg>
                  채용
                </a>
              </li>
            </ul>

            <ul class="inflab-integrated__links-right">
              <li>
                <a href="/open-knowledge">지식공유 참여</a>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </>
  );
};

export default TopSection;
