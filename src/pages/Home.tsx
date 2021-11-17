import styled from 'styled-components';

import Header from '../components/Global/Header/Header';
import UpworkBanner from '../components/Home/UpworkBanner';
import LeftAside from '../components/Home/LeftAside/LeftAside';
import MainFeed from '../components/Home/MainFeed/MainFeed';
import RightAside from '../components/Home/RightAside/RightAside';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, actionCreators } from '../state';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';

function Home(): JSX.Element {
  const { getUserAuth } = bindActionCreators(actionCreators, useAppDispatch());
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    getUserAuth();
    if (!user) navigate('/');
  }, [user]);

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
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
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
