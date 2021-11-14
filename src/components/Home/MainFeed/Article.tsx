import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CommonCard from '../../Global/Home/CommonCard';

function Article(): JSX.Element {
  return (
    <Container>
      <SharedActor>
        <StyledLink to='/home'>
          <img src='/images/user.svg' alt='user' />
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Date</span>
          </div>
        </StyledLink>
        <button>
          <img src='/images/ellipsis.svg' alt='more' />
        </button>
      </SharedActor>
      <Description></Description>
    </Container>
  );
}

export default Article;

const Container = styled(CommonCard)`
  padding: 0;
  margin: 0 0 0.5rem;
  overflow: visible;
`;

const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 0.75rem 1rem 0;
  padding-right: 2.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    right: 0.75rem;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 0.75rem;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;

  img {
    width: 3rem;
    height: 3rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 0.5rem;
    overflow: hidden;

    span {
      text-align: left;
      &:first-child {
        font-size: 0.875rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n + 1) {
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
