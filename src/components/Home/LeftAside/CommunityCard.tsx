import styled from 'styled-components';

import { Link } from 'react-router-dom';

function CommunityCard() {
  return (
    <Container>
      <StyledLink to='/home'>
        <span>Groups</span>
      </StyledLink>
      <StyledLink to='/home'>
        <span>
          Events
          <img src='/images/plus-icon.svg' alt='Events' />
        </span>
      </StyledLink>
      <StyledLink to='/home'>
        <span>Follow Hashtags</span>
      </StyledLink>
      <StyledLink to='/home'>
        <span>Discover More</span>
      </StyledLink>
    </Container>
  );
}

export default CommunityCard;

const Container = styled.div`
  text-align: left;
  overflow: hidden;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0 0;
  background-color: #fff;
  border-radius: 0.625rem;
  transition: box-shadow 83ms;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;

  &:hover {
    color: #0a66c2;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:last-child {
    color: rgba(0, 0, 0, 0.6);
    border-top: 1px solid #d6cec2;
    padding: 0.75rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
