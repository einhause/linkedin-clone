import styled from 'styled-components';

function SignInButton(): JSX.Element {
  return <Button>Sign In</Button>;
}

export default SignInButton;

const Button = styled.button`
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
