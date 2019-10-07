import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/global.style";

//components
import Sidebar from "./components/Sidebar/sidebar.component";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Sidebar />
    </Fragment>
  );
}

export default App;
