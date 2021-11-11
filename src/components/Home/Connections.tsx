import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Connections(): JSX.Element {
  return (
    <Container>
      <StyledLink to='/home'>
        <div>
          <span>Connections</span>
          <span>Grow your network</span>
        </div>
        <img src='/images/widget-icon.svg' alt='Connections' />
      </StyledLink>
    </Container>
  );
}

export default Connections;

const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.75rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 0.75rem;
      line-height: 1.333;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:last-child {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  img {
    color: rgba(0, 0, 0, 1);
  }
`;
