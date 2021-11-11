import { Link } from 'react-router-dom';
import styled from 'styled-components';

function UpworkBanner(): JSX.Element {
  return (
    <Section>
      <StyledLink to='/'>
        <h5>Hiring in a hurry?&nbsp;</h5>
      </StyledLink>
      <p>
        Find talented pros in record time with Upwork and keep business moving.
      </p>
    </Section>
  );
}

export default UpworkBanner;

const Section = styled.section`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  min-height: 3.125rem;
  padding: 1rem 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  p {
    font-size: 0.875rem;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0.625rem;
  }
`;

const StyledLink = styled(Link)`
  h5 {
    color: #0a66c2;
    font-size: 0.875rem;
    font-weight: 700;
  }
`;
