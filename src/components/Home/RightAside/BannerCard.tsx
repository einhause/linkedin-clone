import styled from 'styled-components';

function BannerCard() {
  return (
    <Container>
      <img
        src='https://images.unsplash.com/photo-1585288766827-c62e98d70191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        alt='Banner'
      />
    </Container>
  );
}

export default BannerCard;

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

  img {
    width: 100%;
    height: 100%;
  }
`;
