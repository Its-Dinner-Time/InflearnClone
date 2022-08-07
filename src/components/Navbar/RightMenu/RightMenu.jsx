import React from 'react';

const RightMenu = () => {
  return (
    <>
      <ul className="flex-center-center">
        <li>
          <button className="button mr-3">로그인</button>
        </li>
        <li>
          <button className="button primary">회원가입</button>
        </li>
      </ul>
    </>
  );
};

export default RightMenu;
