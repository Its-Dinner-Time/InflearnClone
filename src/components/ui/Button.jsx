import React from 'react';
import tw from 'tailwind-styled-components';

const IsPrimary = (p) =>
  p.$isPrimary === 'isPrimary' &&
  `bg-[#ff7867]
  text-[#fff]
  hover:bg-[#ff6451]
  `;

const Styled = tw.button`
  border
  border-solid
  border-[#dbdbdb]
  bg-[#fff]
  text-[#363636]
  cursor-pointer
  px-1
  py-2
  rounded

  ${IsPrimary}
`;

const Button = ({ children, isPrimary, ...props }) => {
  return (
    <Styled $isPrimary={isPrimary && 'isPrimary'} className={props.className ?? ''} onClick={props.onClick ?? null}>
      {children}
    </Styled>
  );
};

export default Button;
