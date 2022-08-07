import React from 'react';
import { Svgs } from '../../constants';

import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';

const Navbar = () => {
  return (
    <>
      <header className="flex-center-center py-3 shadow-md px-4">
        <nav className="max-w-[1200px] w-full flex">
          {/* brand logo */}
          <div className="flex-center-center pr-2">
            <a href="/">
              <Svgs.FullLogo width="110" />
            </a>
          </div>

          {/* menu */}
          <div className="flex justify-between w-full">
            {/* left menu */}
            <LeftMenu />

            {/* right menu */}
            <RightMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
