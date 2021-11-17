import styled from 'styled-components';
import NavItem from './NavItem';

import { useAppSelector } from '../../../state';

function GlobalNav(): JSX.Element {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Nav>
      <NavList>
        <NavItem
          imgSrc='/images/nav-home.svg'
          link='/home'
          spanText='Home'
          isActive
        />
        <NavItem
          imgSrc='/images/nav-network.svg'
          link='/home'
          spanText='My Network'
        />
        <NavItem imgSrc='/images/nav-jobs.svg' link='/home' spanText='Jobs' />
        <NavItem
          imgSrc='/images/nav-messaging.svg'
          link='/home'
          spanText='Messaging'
        />
        <NavItem
          imgSrc='/images/nav-notifications.svg'
          link='/home'
          spanText='Notifications'
        />
        <NavItem
          imgSrc={user?.photoURL ? user.photoURL : '/images/user.svg'}
          link='/home'
          spanText='Me'
          isUserItem
        />
        <NavItem
          imgSrc='/images/nav-work.svg'
          link='/home'
          spanText='Work'
          isWorkItem
        />
      </NavList>
    </Nav>
  );
}

export default GlobalNav;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  flex-basis: 1;

  @media (max-width: 950px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    padding: 1rem 0 0.35rem 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  @media (max-width: 950px) {
    justify-content: space-evenly;
    & :nth-child(6),
    & :nth-child(7) {
      display: none;
    }
  }

  .active {
    span::after {
      content: '';
      transform: scaleX(1);
      border-bottom: 0.125rem solid white;
      bottom: -0.35rem;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
