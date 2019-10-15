import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player.ducks";

//Styleds Components
import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./player.style";

//Icones e Imagens
import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({
  player: { currentSong, status },
  play,
  pause,
  next,
  prev
}) => (
  <Container>
    {!!currentSong && (
      <Sound
        url={currentSong.file}
        playStatus={status}
        onFinishedPlaying={next}
      />
    )}

    <Current>
      {!!currentSong && (
        <Fragment>
          <img src={currentSong.thumbnail} alt={`${currentSong.title} cover`} />
          <div>
            <span>{currentSong.title}</span>
            <small>{currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle button" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward button" />
        </button>

        {!!currentSong && status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause button" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="Play button" />
          </button>
        )}

        <button onClick={next}>
          <img src={ForwardIcon} alt="Forward button" />
        </button>
        <button onClick={prev}>
          <img src={RepeatIcon} alt="Repeat button" />
        </button>
      </Controls>

      <Time>
        <span>1:11</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>3:29</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired,
  pause: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
