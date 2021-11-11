import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavItemProps {
  imgSrc: string;
  spanText: string;
  link: string;
  isActive?: boolean;
  isDropDown?: boolean;
  borderLeft?: boolean;
}

function NavItem(props: NavItemProps): JSX.Element {
  const { imgSrc, spanText, link, isActive, isDropDown, borderLeft } = props;
  return (
    <NavListItem className={isActive ? 'active' : ''} borderLeft={borderLeft}>
      <StyledLink to={link}>
        <img src={imgSrc} alt={spanText} />
        <span>
          {spanText}
          {isDropDown && <img src='/images/down-icon.svg' alt='Down' />}
        </span>
      </StyledLink>
    </NavListItem>
  );
}

export default NavItem;

interface NavListItemProps {
  borderLeft?: boolean;
}
const NavListItem = styled.li<NavListItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: ${(props) =>
    props.borderLeft ? '1px solid rgba(0, 0, 0, .08)' : 'none'};
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

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
`;
