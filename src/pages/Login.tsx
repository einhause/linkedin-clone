import styled from 'styled-components';

import LoginNav from '../components/Login/LoginNav';
import Hero from '../components/Login/Hero';
import GoogleForm from '../components/Login/GoogleForm';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector, actionCreators, useAppDispatch } from '../state';
import { bindActionCreators } from 'redux';

function Login(): JSX.Element {
  const { getUserAuth } = bindActionCreators(actionCreators, useAppDispatch());
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    getUserAuth();
    if (user) navigate('/home');
  }, [user]);

  return (
    <Container>
      <LoginNav />
      <Section>
        <Hero />
        <GoogleForm />
      </Section>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  padding: 0;
`;
const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 44rem;
  padding-top: 2.5rem;
  padding-bottom: 8.75rem;
  padding: 3.75rem 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 70rem;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    justify-content: center;
  }
`;
