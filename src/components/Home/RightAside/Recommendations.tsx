import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Recommendations(): JSX.Element {
  return (
    <Container>
      <StyledLink to='/home'>
        View all recommendations
        <img src='/images/right-icon.svg' alt='Recommendations' />
      </StyledLink>
    </Container>
  );
}

export default Recommendations;

const Container = styled.div`
  font-size: 0.875rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0a66c2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
