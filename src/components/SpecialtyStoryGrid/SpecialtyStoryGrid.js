import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import { QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStoriesWrapper>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </SportsStoriesWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'markets-section'
    'sports-section';
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'markets-section sports-section';
    grid-template-columns:
      50% 50%;
    gap: 0px;
  }
`;

const MarketsSection = styled.section`
  grid-area: markets-section;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  grid-area: sports-section;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const SportsStoriesWrapper = styled.div`
  overflow-x: auto;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    grid-auto-flow: column;
    grid-template-columns:
      repeat(auto-fill, minmax(215px, 1fr));
    grid-auto-columns: minmax(215px,1fr);
  }
`;

export default SpecialtyStoryGrid;
