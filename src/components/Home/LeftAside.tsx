import styled from 'styled-components';

import ArtCard from './ArtCard';

function LeftAside(): JSX.Element {
  return (
    <Container>
      <ArtCard />
    </Container>
  );
}

export default LeftAside;

const Container = styled.aside`
  grid-area: leftaside;
`;
