import styled from 'styled-components';

import Article from './Article';
import ShareBox from './ShareBox';

function MainFeed(): JSX.Element {
  return (
    <Container>
      <ShareBox />
      <Article />
    </Container>
  );
}

export default MainFeed;

const Container = styled.main`
  grid-area: mainfeed;
`;
