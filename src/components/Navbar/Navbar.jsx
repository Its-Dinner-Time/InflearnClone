import React from 'react';
import { Svgs } from '../../constants';

import { Header, Nav, BrandLogo, BrandLogoLink, MenuContainer } from './NavebarStyled';

import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';

const Navbar = () => {
  return (
    <>
      <Header>
        <Nav>
          {/* brand logo */}
          <BrandLogo>
            <BrandLogoLink href="/">
              <Svgs.FullLogo width="110" />
            </BrandLogoLink>
          </BrandLogo>

          {/* menu */}
          <MenuContainer>
            {/* left menu */}
            <LeftMenu />

            {/* right menu */}
            <RightMenu />
          </MenuContainer>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
