import styled from 'styled-components';

import CommonCard from '../../Global/Home/CommonCard';
import PostTypeButton from './PostTypeButton';
import SharePostRow from './SharePostRow';

function ShareBox(): JSX.Element {
  return (
    <Container>
      <SharePostRow />

      <PostTypeButtonContainer>
        {/* Post type row */}
        <PostTypeButton imgUrl='/images/photo-icon.svg' spanText='Photo' />
        <PostTypeButton imgUrl='/images/video-icon.svg' spanText='Video' />
        <PostTypeButton imgUrl='/images/event-icon.svg' spanText='Event' />
        <PostTypeButton
          imgUrl='/images/write-article-icon.svg'
          spanText='Write article'
        />
      </PostTypeButtonContainer>
    </Container>
  );
}

export default ShareBox;

const Container = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 0.5rem;
  background-color: #fff;
`;

const PostTypeButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0.25rem;
`;
