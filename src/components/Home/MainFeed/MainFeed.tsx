import styled from 'styled-components';

import Article from './Article';
import ShareBox from './ShareBox';
import PostModal from '../../Global/Modal/PostModal';

import { useAppSelector } from '../../../state';

function MainFeed(): JSX.Element {
  const {
    article: { loading: articleIsUploading },
    modal: { modalIsOpen },
  } = useAppSelector((state) => state);

  return (
    <Container>
      <ShareBox />
      {articleIsUploading && <LoadingContainer />}
      <Article />
      {modalIsOpen && <PostModal />}
    </Container>
  );
}

export default MainFeed;

const Container = styled.main`
  grid-area: mainfeed;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-sizing: border-box;
    border: 0.25rem solid rgba(0, 0, 0, 0.08);
    border-left: 0.25rem solid #0a66c2;
    border-right: 0.25rem solid #0a66c2;
    animation: spin 1s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
