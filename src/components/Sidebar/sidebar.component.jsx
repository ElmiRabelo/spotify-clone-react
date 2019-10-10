import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Redux e Redux Saga
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistActions } from "../../store/ducks/playlists.ducks";

//Styled Components
import { Container, NewPlaylist, Nav } from "./sidebar.style";
import Loading from "../Loading/loading.component";
//Icones e Imagens
import addPlaylistIcon from "../../assets/images/add_playlist.svg";

// Sidebar Component
class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="#">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="#">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#">Músicas</a>
            </li>
            <li>
              <a href="#">Álbums</a>
            </li>
            <li>
              <a href="#">Artistas</a>
            </li>
            <li>
              <a href="#">Estações</a>
            </li>
            <li>
              <a href="#">Arquivos Locais</a>
            </li>
            <li>
              <a href="#">Vídeos</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
          </Nav>
          <Nav main>
            <li>
              <span>PLAYLISTS</span>
            </li>
            {this.props.playlists.loading ? (
              <Loading />
            ) : (
              this.props.playlists.data.map(playlist => (
                <li key={playlist.id}>
                  <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                </li>
              ))
            )}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={addPlaylistIcon} alt="Adicionar playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch);

const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
