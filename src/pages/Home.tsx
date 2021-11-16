import styled from 'styled-components';

import Header from '../components/Global/Header/Header';
import UpworkBanner from '../components/Home/UpworkBanner';
import LeftAside from '../components/Home/LeftAside/LeftAside';
import MainFeed from '../components/Home/MainFeed/MainFeed';
import RightAside from '../components/Home/RightAside/RightAside';

import { useEffect } from 'react';
import { useAppSelector } from '../state';
import { useNavigate } from 'react-router';

function Home(): JSX.Element {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  });

  return (
    <>
      <Header />
      <Container>
        <UpworkBanner />
        <Layout>
          <LeftAside />
          <MainFeed />
          <RightAside />
        </Layout>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  padding-top: 3.25rem;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftaside mainfeed rightaside';
  grid-template-rows: auto;
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(18.75rem, 7fr);
  column-gap: 1.6rem;
  row-gap: 1.6rem;
  margin: 1.6rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 0.625rem;
  }
`;
