import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import { QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory className="secondaryStory" key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList style={{'--tablet-flex-direction': "row"}}>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory className="opinionStory" key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 1fr 276px;
    gap: 0px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 42% 33% 25%;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 0 16px 16px 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding: 16px 0;
    border-bottom: solid 1px var(--color-gray-300);
  }

  & a:first-child {
    padding-top: 0;
  }

  & a:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  @media ${QUERIES.tabletOnly} {  
    flex-direction: var(--tablet-flex-direction, column);

    .opinionStory {
      padding: 0 16px;
      border: none;
      width: 100%;
    }

    & .opinionStory:first-child {
      padding-left: 0;
    }
  
    & .opinionStory:last-child {
      padding-right: 0;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
  }

  @media ${QUERIES.desktopAndUp} {
    margin-top: 0px;
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
  }

  @media ${QUERIES.desktopAndUp} {
    margin: 16px 0 0 16px;
    padding-top: 16px;
    border-top: solid 1px var(--color-gray-300);
  }
`;

export default MainStoryGrid;
