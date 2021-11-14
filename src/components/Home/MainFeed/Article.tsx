import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CommonCard from '../../Global/Home/CommonCard';

function Article(): JSX.Element {
  return (
    <Container>
      <SharedActor>
        <StyledLink to='/home'>
          <UserPostInfo>
            <UserImg src='/images/user.svg' alt='user' />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </UserPostInfo>
        </StyledLink>
        <button>
          <img src='/images/ellipsis.svg' alt='more' />
        </button>
      </SharedActor>
      <Description>Des</Description>
      <SharedImgContainer>
        <StyledLink to='/home'>
          <img src='/images/trees.jpeg' alt='sharedimg' />
        </StyledLink>
      </SharedImgContainer>
      <SocialCounts>
        <li>
          <button>
            <img
              src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
              alt='likes'
            />
            <img
              src='https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8'
              alt='praise'
            />
            <img
              src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
              alt='empathy'
            />
            <span>75</span>
          </button>
        </li>
        <li>
          <CommentLinkContainer>
            <StyledLink to='/home'>2 comments</StyledLink>
          </CommentLinkContainer>
        </li>
      </SocialCounts>
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
    cursor: pointer;
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const UserImg = styled.img``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const UserPostInfo = styled.div`
  margin-right: 0.75rem;
  flex-grow: 1;
  overflow: hidden;
  display: flex;

  ${UserImg} {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
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

const Description = styled.div`
  padding: 0 1rem;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.875rem;
  text-align: left;
`;

const SharedImgContainer = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: block;
  background-color: #f9fafb;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: auto;
  margin: 0 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    font-size: 0.75rem;

    button {
      cursor: pointer;
      display: flex;
    }

    span {
      color: rgba(0, 0, 0, 0.6);
      align-self: center;
      margin-left: 0.25rem;
    }
  }
`;

const CommentLinkContainer = styled.div`
  & > ${StyledLink} {
    color: rgba(0, 0, 0, 0.6);
  }
`;
