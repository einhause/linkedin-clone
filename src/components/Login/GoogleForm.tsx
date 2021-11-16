import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { useAppDispatch, actionCreators } from '../../state';

function GoogleForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { signInAPI } = bindActionCreators(actionCreators, dispatch);

  return (
    <Form>
      <GoogleButton onClick={() => signInAPI()}>
        <img src='/images/google.svg' alt='google' />
        <span>Sign in with Google</span>
      </GoogleButton>
    </Form>
  );
}

export default GoogleForm;

const Form = styled.div`
  margin-top: 5.25rem;
  width: 25.5rem;

  @media (max-width: 768px) {
    margin-top: 1.25rem;
  }
`;

const GoogleButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 3.5rem;
  width: 100%;
  border-radius: 1.75rem;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.6);

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
