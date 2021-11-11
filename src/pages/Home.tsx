import styled from 'styled-components';

import Header from '../components/Global/Header/Header';

function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Container>Home</Container>
    </>
  );
}

export default Home;

const Container = styled.div``;
