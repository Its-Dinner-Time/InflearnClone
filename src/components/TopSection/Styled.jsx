import tw from 'tailwind-styled-components';

export const Section = tw.section`
  border 
  border-solid 
  border-[#f1f3f5] 
  h-[40px] 
  text-[14px] 
  px-4
  flex-center-center
`;

export const Header = tw.header`
  max-w-[1200px]
  w-full
`;

export const Container = tw.div`
  flex 
  justify-between
`;

export const ServiceList = tw.ul`
  flex-center-center
`;

export const ServiceListItem = tw.li`
  flex-center-center
`;

const ServiceListItemLinkActive = (p) =>
  p.$active === 'active' &&
  `font-bold 
  text-[#1b1c1d]`;

const ServiceListItemLinkAfter = (p) =>
  p.$after === 'after' &&
  `after:mx-2 
  after:w-px 
  after:h-4 
  after:bg-[#d5dbe2]`;

export const ServiceListItemLink = tw.a`
  flex-center-center 
  text-[#858a8d]
  ${ServiceListItemLinkActive}
  ${ServiceListItemLinkAfter}
`;
