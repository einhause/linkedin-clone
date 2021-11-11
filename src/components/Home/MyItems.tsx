import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MyItems(): JSX.Element {
  return (
    <Container>
      <StyledLink to='/home'>
        <img src='/images/item-icon.svg' alt='MyItems' />
      </StyledLink>
    </Container>
  );
}

export default MyItems;

const Container = styled.div``;

const StyledLink = styled(Link)``;
