import styled from 'styled-components';
import { Link } from 'react-router-dom';

function GlobalNav(): JSX.Element {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <StyledLink to='/'>
            <img src='/images/nav-home.svg' alt='Home' />
            <span>Home</span>
          </StyledLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default GlobalNav;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-direction: column;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  min-height: 2.625rem;
  min-width: 5rem;
  text-decoration: none;
  position: relative;

  @media (max-width: 768px) {
    min-width: 4.5rem;
  }

  &:hover,
  &:active {
    span {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  span {
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
  }
`;
