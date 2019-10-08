import React from "react";

import { Container, Search, User } from "./header.style";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/39173228?v=4"
        alt="Usuário"
      />
      Elmi Rabelo
    </User>
  </Container>
);

export default Header;
