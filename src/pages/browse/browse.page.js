import React from "react";

import { Container, Title, List, Playlist } from "./browse.style";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlist/1">
        <img
          src="http://pm1.narvii.com/6985/43df72a5b8e94a837e55abbf099a1f839faa7146r1-850-850v2_uhq.jpg"
          alt="As melhores de Blackpink"
        />
        <strong>As Melhores de Blackpink</strong>
        <p>Curta as melhores músicas de Blackpink, que são todas elas.</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="http://pm1.narvii.com/6985/43df72a5b8e94a837e55abbf099a1f839faa7146r1-850-850v2_uhq.jpg"
          alt="As melhores de Blackpink"
        />
        <strong>As Melhores de Blackpink</strong>
        <p>Curta as melhores músicas de Blackpink, que são todas elas.</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="http://pm1.narvii.com/6985/43df72a5b8e94a837e55abbf099a1f839faa7146r1-850-850v2_uhq.jpg"
          alt="As melhores de Blackpink"
        />
        <strong>As Melhores de Blackpink</strong>
        <p>Curta as melhores músicas de Blackpink, que são todas elas.</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="http://pm1.narvii.com/6985/43df72a5b8e94a837e55abbf099a1f839faa7146r1-850-850v2_uhq.jpg"
          alt="As melhores de Blackpink"
        />
        <strong>As Melhores de Blackpink</strong>
        <p>Curta as melhores músicas de Blackpink, que são todas elas.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
