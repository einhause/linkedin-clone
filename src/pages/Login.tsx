import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      {/* Login Navbar */}
      <LoginNav>
        {/* LinkedIn Logo */}
        <BrandContainer>
          <Link to='/'>
            <img src='/images/login-logo.svg' alt='Login' />
          </Link>
        </BrandContainer>
        {/* Container for both buttons below */}
        <ButtonContainer>
          {/* Join Now Button */}
          <JoinButton>Join Now</JoinButton>
          {/* Sign In Button */}
          <SignInButton>Sign In</SignInButton>
        </ButtonContainer>
      </LoginNav>
      <Section>section</Section>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  padding: 0;
`;

const LoginNav = styled.nav`
  max-width: 70rem;
  margin: auto;
  padding: 0.75rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
`;

const BrandContainer = styled.div`
  width: 8.5rem;
  height: 2.2rem;

  @media (max-width: 768px) {
    padding: 0 0.65rem;
  }
`;

const ButtonContainer = styled.div``;

const JoinButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 0.75rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignInButton = styled.button`
  cursor: pointer;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 1.5rem;
  transition-duration: 167ms;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2.5rem;
  padding: 0.25rem 1.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 44rem;
  padding-top: 2.5rem;
  padding-bottom: 8.75rem;
  padding: 3.75rem 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 70rem;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
