import styled from 'styled-components';

import FeedList from './FeedList';
import Recommendations from './Recommendations';

function FollowCard(): JSX.Element {
  return (
    <Container>
      <Title>
        <h2>Add to your feed</h2>
        <img src='/images/feed-icon.svg' alt='Feed' />
      </Title>
      <FeedList />
      <Recommendations />
    </Container>
  );
}

export default FollowCard;

const Container = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 0.625rem;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 0.75rem;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: initial;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
