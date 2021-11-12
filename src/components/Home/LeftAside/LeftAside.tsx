import styled from 'styled-components';

import ArtCard from './ArtCard';
import CommunityCard from './CommunityCard';

function LeftAside(): JSX.Element {
  return (
    <Container>
      <ArtCard />
      <CommunityCard />
    </Container>
  );
}

export default LeftAside;

const Container = styled.aside`
  grid-area: leftaside;
`;
