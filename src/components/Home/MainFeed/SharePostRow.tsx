import styled from 'styled-components';

import { actionCreators, useAppDispatch, useAppSelector } from '../../../state';
import { bindActionCreators } from 'redux';

function SharePostRow() {
  const dispatch = useAppDispatch();
  const { toggleModal } = bindActionCreators(actionCreators, dispatch);
  const {
    user: { user },
    article: { loading: articleIsUploading },
  } = useAppSelector((state) => state);

  return (
    <Container>
      <img src={user?.photoURL ?? '/images/user.svg'} alt='User' />
      <button onClick={() => toggleModal()} disabled={articleIsUploading}>
        Start a post
      </button>
    </Container>
  );
}

export default SharePostRow;

const Container = styled.div`
  display: flex;
  padding: 0.5rem 1rem 0 1rem;

  img {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  button {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875rem;
    line-height: 1.5;
    min-height: 3rem;
    font-weight: 600;
    margin: 0.25rem 0;
    flex: 1;
    border-radius: 2.25rem;
    padding-left: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: white;
    text-align: left;
    transition: background-color 0.15s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
