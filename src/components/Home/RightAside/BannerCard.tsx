import styled from 'styled-components';

function BannerCard() {
  return (
    <Container>
      <img
        src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
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
