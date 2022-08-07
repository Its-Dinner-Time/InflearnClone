import React from 'react';
import { Svgs } from '../../constants';

const TopSection = () => {
  return (
    <>
      <section className="inflab-integrated">
        <header>
          <div className="inflab-integrated__container">
            <ul className="inflab-integrated__service">
              <li>
                <a className="active" href="/">
                  <Svgs.Logo width="20" height="20" />
                  교육
                </a>
              </li>
              <li>
                <a className="e-gtm-rallit-link" href="https://www.rallit.com">
                  <Svgs.SubLogo width="20" height="20" />
                  채용
                </a>
              </li>
            </ul>

            <ul className="inflab-integrated__links-right">
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
