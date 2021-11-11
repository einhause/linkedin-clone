import styled from 'styled-components';

import ArtCard from './ArtCard';
import Connections from './Connections';
import MyItems from './MyItems';

function LeftAside(): JSX.Element {
  return (
    <Container>
      <ArtCard />
      <Connections />
      <MyItems />
    </Container>
  );
}

export default LeftAside;

const Container = styled.aside`
  grid-area: leftaside;
`;
