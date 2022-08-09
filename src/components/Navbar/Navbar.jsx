import React from 'react';
import { Svgs } from '../../constants';
import tw from 'tailwind-styled-components';

import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';

const Header = tw.header`
  flex-center-center
  px-4
  py-3
  shadow-md 
`;

const Nav = tw.nav`
  max-w-[1200px] 
  w-full 
  flex
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <Nav>
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
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
