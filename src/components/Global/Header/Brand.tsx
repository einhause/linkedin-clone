import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <BrandContainer>
      <Link to='/home'>
        <img src='/images/home-logo.svg' alt='Brand' />
      </Link>
    </BrandContainer>
  );
}

export default Brand;

const BrandContainer = styled.span`
  margin-right: 0.5rem;
  font-size: 0rem;
`;
