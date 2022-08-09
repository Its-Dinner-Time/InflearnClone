import React from 'react';
import { Svgs } from '../../constants';
import {
  Section, //
  Header,
  Container,
  ServiceList,
  ServiceListItem,
  ServiceListItemLink,
} from './Styled';

const TopSection = () => {
  return (
    <>
      <Section>
        <Header>
          <Container>
            <ServiceList>
              <ServiceListItem>
                <ServiceListItemLink $active="active" $after="after" href="/">
                  <Svgs.Logo className="mr-1" width="20" height="20" />
                  교육
                </ServiceListItemLink>
              </ServiceListItem>

              <ServiceListItem>
                <ServiceListItemLink href={import.meta.env.VITE_REDIRECT_RALLIT}>
                  <Svgs.SubLogo className="mr-1" width="20" height="20" />
                  채용
                </ServiceListItemLink>
              </ServiceListItem>
            </ServiceList>

            <ul className="text-[#3e4042]">
              <li>
                <a href="/open-knowledge">지식공유 참여</a>
              </li>
            </ul>
          </Container>
        </Header>
      </Section>
    </>
  );
};

export default TopSection;
