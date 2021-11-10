import styled from 'styled-components';

function JoinButton() {
  return <Button>Join Now</Button>;
}

export default JoinButton;

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 0.75rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
