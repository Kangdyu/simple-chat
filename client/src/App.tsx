import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import ChatRoom from './chat/ChatRoom';
import Lobby from './lobby/Lobby';
import SocketProvider from './socket/SocketProvider';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Nunito', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(128, 248, 174, 1) 0%,
    rgba(223, 244, 148, 1) 90%
  );
`;

function App() {
  return (
    <SocketProvider>
      <GlobalStyle />
      <Container>
        <Lobby />
        {/* <ChatRoom /> */}
      </Container>
    </SocketProvider>
  );
}

export default App;
