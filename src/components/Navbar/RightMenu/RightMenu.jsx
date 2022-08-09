import React from 'react';

import Button from '../../ui/Button';

import { ButtonList, ButtonListItem } from './RightMenuStyled';

const RightMenu = () => {
  return (
    <>
      <ButtonList>
        <ButtonListItem>
          <Button className="mr-3">로그인</Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button isPrimary>회원가입</Button>
        </ButtonListItem>
      </ButtonList>
    </>
  );
};

export default RightMenu;
