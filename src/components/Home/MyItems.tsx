import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MyItems(): JSX.Element {
  return (
    <Container>
      <StyledLink to='/home'>
        <span>
          <img src='/images/item-icon.svg' alt='MyItems' />
          My Items
        </span>
      </StyledLink>
    </Container>
  );
}

export default MyItems;

const Container = styled.div`
  border-color: rgba(0, 0, 0, 0.8);
  padding: 0.75rem;
  display: block;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const StyledLink = styled(Link)`
  text-align: left;
  font-size: 0.75rem;
  text-decoration: none;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;

    img {
      margin-right: 0.5rem;
    }
  }
`;
