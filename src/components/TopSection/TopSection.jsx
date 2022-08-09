import React from 'react';
import { Svgs } from '../../constants';
import {
  Section, //
  Header,
  Container,
  ServiceList,
  ServiceListItem,
  ServiceListItemLink,
  InfoList,
  InfoListItem,
  InfoListItemLink,
} from './TopSectionStyled';

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

            <InfoList>
              <InfoListItem>
                <InfoListItemLink href="/open-knowledge">지식공유 참여</InfoListItemLink>
              </InfoListItem>
            </InfoList>
          </Container>
        </Header>
      </Section>
    </>
  );
};

export default TopSection;
