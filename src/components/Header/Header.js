import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup style={{ '--padding-top': "8px"}}>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup style={{ '--flex-direction': "column", '--align-items': "center", '--gap': "8px" }}>
            <button id="userButton">
              <User size={24} />
            </button>
            <Button id="subscribeButton">
              SUBSCRIBE
            </Button>
            <Link href="/" id="subscribeLink">
              Already a subscriber?
            </Link>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.header`{
    isolation: isolate;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  #subscribeButton {
    display: none;
  }

  #subscribeLink {
    display: none;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 44px 0;
    background: var(--white);
    color: var(--color-gray-900);

    #userButton {
      display: none;
    }

    #subscribeButton {
      display: revert;
    }

    #subscribeLink {
      display: revert;
    }
  }
`;

const Link = styled.a`
  font-family: var(--font-family-serif);
  font-size: 0.875rem;
  font-style: italic;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  flex-direction: var(--flex-direction, rov);
  align-items: var(--align-items, start);
  gap: var(--gap, 24px);

  @media ${QUERIES.desktopAndUp}
  {
    padding-top: var(--padding-top, 0);
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  z-index: 2;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 42px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    margin-top: -146px;
    z-index: 1;
  }
`;

export default Header;
