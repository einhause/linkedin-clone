import styled from 'styled-components';

import Article from './Article';
import ShareBox from './ShareBox';
import PostModal from '../../Global/Modal/PostModal';

import { useAppSelector } from '../../../state';

function MainFeed(): JSX.Element {
  const { modalIsOpen } = useAppSelector((state) => state.modal);

  return (
    <Container>
      <ShareBox />
      <Article />
      {modalIsOpen && <PostModal />}
    </Container>
  );
}

export default MainFeed;

const Container = styled.main`
  grid-area: mainfeed;
`;
