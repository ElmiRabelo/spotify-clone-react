import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/global.style";

//components
import Sidebar from "./components/Sidebar/sidebar.component";
import Player from "./components/Player/player.component";
import Header from "./components/Header/header.component";

//Styled components
import { Wrapper, Container, Content } from "./styles/components.style";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
