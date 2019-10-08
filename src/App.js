import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/global.style";

//components
import Sidebar from "./components/Sidebar/sidebar.component";
import Player from "./components/Player/player.component";

import { Wrapper, Container } from "./styles/components.style";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
