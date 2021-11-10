import styled from 'styled-components';

function Hero() {
  return (
    <HeroContainer>
      <h1>Welcome to your professional community</h1>
      <img src='/images/login-hero.svg' alt='linkedin-hero' />
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 3.5rem;
    color: #2977c9;
    font-weight: 200;
    line-height: 4.8rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.25rem;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 44rem;
    height: 42rem;
    position: absolute;
    bottom: -0.1rem;
    right: -9.5rem;

    @media (max-width: 768px) {
      top: 14.5rem;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
