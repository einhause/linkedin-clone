import styled from 'styled-components';

import { Link } from 'react-router-dom';

function FeedList(): JSX.Element {
  return (
    <Container>
      <li>
        <Link to='/home'>
          <Avatar />
        </Link>
        <div>
          <span>#LinkedIn</span>
          <button>Follow</button>
        </div>
      </li>
      <li>
        <Link to='/home'>
          <Avatar />
        </Link>
        <div>
          <span>#Motivations</span>
          <button>Follow</button>
        </div>
      </li>
    </Container>
  );
}

const Container = styled.ul`
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    margin: 0.75rem 0;
    position: relative;
    font-size: 0.875rem;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.9375rem;
      box-sizing: border-box;
      font-weight: 600;
      max-height: 2rem;
      max-width: 30rem;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
`;

export default FeedList;
