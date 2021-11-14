import styled from 'styled-components';
import ShareBox from './ShareBox';

function MainFeed(): JSX.Element {
  return (
    <Container>
      <ShareBox />
    </Container>
  );
}

export default MainFeed;

const Container = styled.main`
  grid-area: mainfeed;
`;
