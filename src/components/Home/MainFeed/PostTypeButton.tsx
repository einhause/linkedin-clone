import styled from 'styled-components';

interface PostTypeButtonProps {
  imgUrl: string;
  spanText: string;
}

function PostTypeButton(props: PostTypeButtonProps): JSX.Element {
  const { imgUrl, spanText } = props;
  return (
    <Container>
      <button>
        <img src={imgUrl} alt={spanText} />
        <span>{spanText}</span>
      </button>
    </Container>
  );
}

export default PostTypeButton;

const Container = styled.div`
  button {
    cursor: pointer;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875rem;
    line-height: 1.5;
    min-height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 0 1rem;
    border-radius: 0.5rem;
    transition: background-color 0.15s ease-in-out;

    img {
      margin: 0 0.25rem 0 -0.125rem;
    }

    span {
      color: rgba(0, 0, 0, 0.4);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
