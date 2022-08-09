import React from 'react';

import Button from '../../ui/Button';

import { ButtonList, ButtonListItem } from './RightMenuStyled';

const RightMenu = () => {
  const LoginClickHandler = (e) => {};

  const SignUpClickHandler = (e) => {};

  return (
    <>
      <ButtonList>
        <ButtonListItem>
          <Button className="mr-3" onClick={LoginClickHandler}>
            로그인
          </Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button isPrimary onClick={SignUpClickHandler}>
            회원가입
          </Button>
        </ButtonListItem>
      </ButtonList>
    </>
  );
};

export default RightMenu;
