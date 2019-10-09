import React from "react";

import { Container, Header, SongList } from "./playlist.style";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="http://pm1.narvii.com/6985/43df72a5b8e94a837e55abbf099a1f839faa7146r1-850-850v2_uhq.jpg"
        alt="As melhores de Blackpink"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>As melhores de Blackpink</h1>
        <p>15 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Let's Kill This Love</td>
          <td>Blackpink</td>
          <td>Let's Kill This Love</td>
          <td>3:19</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Let's Kill This Love</td>
          <td>Blackpink</td>
          <td>Let's Kill This Love</td>
          <td>3:19</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Let's Kill This Love</td>
          <td>Blackpink</td>
          <td>Let's Kill This Love</td>
          <td>3:19</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Let's Kill This Love</td>
          <td>Blackpink</td>
          <td>Let's Kill This Love</td>
          <td>3:19</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Let's Kill This Love</td>
          <td>Blackpink</td>
          <td>Let's Kill This Love</td>
          <td>3:19</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
