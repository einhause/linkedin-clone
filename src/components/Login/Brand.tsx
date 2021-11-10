import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <BrandContainer>
      <Link to='/'>
        <img src='/images/login-logo.svg' alt='Login' />
      </Link>
    </BrandContainer>
  );
}

export default Brand;

const BrandContainer = styled.div`
  width: 8.5rem;
  height: 2.2rem;

  @media (max-width: 768px) {
    padding: 0 0.65rem;
  }
`;
