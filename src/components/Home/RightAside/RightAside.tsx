import styled from 'styled-components';

import BannerCard from './BannerCard';
import FollowCard from './FollowCard';

function RightAside(): JSX.Element {
  return (
    <Container>
      <FollowCard />
      <BannerCard />
    </Container>
  );
}

export default RightAside;

const Container = styled.aside`
  grid-area: rightaside;
`;
