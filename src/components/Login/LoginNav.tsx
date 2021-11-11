import styled from 'styled-components';
import Brand from './Brand';
import JoinButton from './JoinButton';
import SignInButton from './SignInButton';

function LoginNav(): JSX.Element {
  return (
    <Nav>
      <Brand />
      <ButtonContainer>
        <JoinButton />
        <SignInButton />
      </ButtonContainer>
    </Nav>
  );
}

export default LoginNav;

const Nav = styled.nav`
  max-width: 70rem;
  margin: auto;
  padding: 0.75rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
`;

const ButtonContainer = styled.div``;
