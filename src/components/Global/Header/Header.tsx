import styled from 'styled-components';

import Brand from './Brand';
import Search from './Search';
import GlobalNav from './GlobalNav';

function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <Brand />
        <Search />
        <GlobalNav />
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  background-color: white;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 1.5rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 70rem;
`;
