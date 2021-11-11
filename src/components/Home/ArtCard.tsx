import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Connections from './Connections';
import MyItems from './MyItems';

function ArtCard(): JSX.Element {
  return (
    <Container>
      <UserInfo>
        <CardBackground />

        <StyledLink to='/home'>
          <Photo />
          <Greeting>Welcome, there!</Greeting>
        </StyledLink>
        <StyledLink to='/home'>
          <AddPhotoText>Add a photo</AddPhotoText>
        </StyledLink>
      </UserInfo>

      <Connections />

      <MyItems />
    </Container>
  );
}

export default ArtCard;

const Container = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 0.625rem;
  transition: box-shadow 83ms;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  position: relative;
`;

const UserInfo = styled.div`
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.15);
  padding: 0.75rem 0.75rem 1rem;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 28rem;
  height: 3.4rem;
  margin: -0.75rem -0.75rem 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url('/images/photo.svg');
  width: 4.5rem;
  height: 4.5rem;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  margin: -2.25rem auto 0.75rem;
  border-radius: 50%;
`;

const Greeting = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.p`
  color: #0a66c2;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
`;
