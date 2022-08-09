import React, { useEffect, useState } from 'react';

import { MenuList, MenuListItem, MenuListItemLink } from './LeftMenuStyled';

const LeftMenu = () => {
  const [topCategories, setTopCategories] = useState([]);

  // DB와 연동 필요
  const loadTopCategories = async () => {
    setTimeout(() => {
      setTopCategories(['강의', '로드맵', '멘토링', '커뮤니티', '인프런']);
    }, 100);
  };

  useEffect(() => {
    (async () => {
      await loadTopCategories();
    })();
  });

  return (
    <>
      <MenuList>
        {topCategories &&
          topCategories.map((item, idx) => {
            return (
              <MenuListItem key={idx}>
                <MenuListItemLink href="#">{item}</MenuListItemLink>
              </MenuListItem>
            );
          })}
      </MenuList>
    </>
  );
};

export default LeftMenu;
