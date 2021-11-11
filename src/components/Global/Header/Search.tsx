import styled from 'styled-components';

function Search(): JSX.Element {
  return (
    <Container>
      <InputContainer>
        <input type='text' placeholder='Search' />
      </InputContainer>
      <SearchIcon>
        <img src='/images/search-icon.svg' alt='Search' />
      </SearchIcon>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  opacity: 1;
  flex: 1;
  position: relative;
`;

const InputContainer = styled.div`
  max-width: 17.5rem;
  
  input {
    border: none;
    border-color: #dce6f1
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 0.125rem;
    color: rgba(0, 0, 0, 0.9);
    width: 13.625rem;
    padding: 0 0.5rem 0 2.5rem;
    line-height: 1.75;
    font-weight: 400;
    font-size: 0.875rem;
    height: 2.125rem;
    vertical-align: text-top;
  }
`;

const SearchIcon = styled.div`
  width: 2.5rem;
  position: absolute;
  z-index: 1;
  top: 0.625rem;
  left: 0.125rem;
  border-radius: 0 0.125rem 0.125rem 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
