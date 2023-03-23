import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <GridWrapper id="grid-wrapper">
          <Abstract>{abstract}</Abstract>
        </GridWrapper>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  /* TODO: Figure out why I had to use "tabletAndUp" here instead of just "tabletOnly" */
  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'image'
      'heading'
      'abstract';
    grid-template-columns: 100%;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-areas:
    'image heading'
    'image abstract';
    grid-template-columns: 120px 1fr;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;

  @media ${QUERIES.tabletOnly} {
    padding-top: 8px;
  }
`;

const GridWrapper = styled.div`
  /* You can also "align-self: start" on Abstract instead of using this wrapper */
  grid-area: abstract;
`;

const Abstract = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  overflow-wrap: break-word;
  hyphens: auto;
`;

export default SecondaryStory;
