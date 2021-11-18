import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAppDispatch, actionCreators } from '../../../state';
import { bindActionCreators } from 'redux';

interface NavItemProps {
  imgSrc: string;
  spanText: string;
  link: string;
  isActive?: boolean;
  isUserItem?: boolean;
  isWorkItem?: boolean;
  isSmallScreenOnly?: boolean;
}

function NavItem(props: NavItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { signOutAPI } = bindActionCreators(actionCreators, dispatch);

  const [showDropDown, setShowDropDown] = useState(false);

  const handleSignOut = () => {
    setShowDropDown(false);
    signOutAPI();
  };

  const {
    imgSrc,
    spanText,
    link,
    isActive,
    isUserItem,
    isWorkItem,
    isSmallScreenOnly,
  } = props;
  return (
    <NavListItem
      className={isActive ? 'active' : ''}
      borderLeft={isWorkItem as boolean}
      isSmallScreen={isSmallScreenOnly as boolean}
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <StyledLink to={link}>
        <img src={imgSrc} alt={spanText} />
        <span>
          {spanText}
          {(isUserItem || isWorkItem) && (
            <img src='/images/down-icon.svg' alt='Down' />
          )}
        </span>

        {/* User Nav Item Only */}
      </StyledLink>

      {isUserItem && showDropDown && (
        <SignOutDropDown>
          <button onClick={() => handleSignOut()}>Sign Out</button>
        </SignOutDropDown>
      )}
    </NavListItem>
  );
}

export default NavItem;

const SignOutDropDown = styled.div`
  position: absolute;
  top: 2.75rem;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 0.9rem;
  transition: all ease-in 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    color: #0a66c2;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 950px) {
    right: 0.75rem;
  }
`;

interface NavListItemProps {
  borderLeft?: boolean;
  isSmallScreen?: boolean;
}

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

  & > img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  @media (max-width: 360px) {
    min-width: 3rem;
    span {
      display: none;
    }
  }
`;

const NavListItem = styled.li<NavListItemProps>`
  display: ${(props) => (props.isSmallScreen ? 'none' : 'flex')};
  @media (max-width: 950px) {
    display: ${(props) => props.isSmallScreen && 'flex'};
  }

  align-items: center;
  justify-content: center;
  border-left: ${(props) =>
    props.borderLeft ? '1px solid rgba(0, 0, 0, .08)' : 'none'};
  position: relative;

  @media (max-width: 950px) {
    ${StyledLink} {
      img {
        width: ${(props) => props.isSmallScreen && '2.5rem'};
        height: ${(props) => props.isSmallScreen && '2.5rem'};
        margin-right: ${(props) => props.isSmallScreen && '2rem'};
      }
      span {
        display: ${(props) => props.isSmallScreen && 'none'};
      }
    }
  }
`;
