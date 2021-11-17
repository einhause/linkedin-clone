import styled from 'styled-components';

import Brand from './Brand';
import Search from './Search';
import GlobalNav from './GlobalNav';
import NavItem from './NavItem';

import { useAppSelector } from '../../../state';

function Header(): JSX.Element {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Container>
      <Content>
        <Brand />
        <Search />
        <GlobalNav />

        {/* Navitem for mobile user signout */}
        <NavItem
          imgSrc={user?.photoURL ? user.photoURL : '/images/user.svg'}
          link='/home'
          spanText='Me'
          isUserItem
          isSmallScreenOnly
        />
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  background-color: white;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0.35rem 1.5rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 65rem;

  @media (max-width: 70rem) {
    margin: 0 2.5rem 0 1rem;
  }

  @media (max-width: 950px) {
    justify-content: space-between;
    margin: 0 1.5rem 0 0;
  }
`;
