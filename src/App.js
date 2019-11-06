import React from "react";
import { GlobalStyle } from "./styles/global.style";

import "./config/reactotronConfig";

//components
import Sidebar from "./components/Sidebar/sidebar.component";
import Player from "./components/Player/player.component";
import Header from "./components/Header/header.component";
import Routes from "./routes/routes";
import ErrorBox from "./components/ErrorBox/error-box.component";
//Styled components
import { Wrapper, Container, Content } from "./styles/components.style";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    );
  }
}

export default App;
