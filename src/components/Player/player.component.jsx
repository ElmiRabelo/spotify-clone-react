import React from "react";
import Slider from "rc-slider";

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

const Player = () => (
  <Container>
    <Current>
      <img
        src="http://pm1.narvii.com/6985/43df72a5b8e94a837e55abbf099a1f839faa7146r1-850-850v2_uhq.jpg"
        alt="Blackpink cover"
      />
      <div>
        <span>Whistle</span>
        <small>Blackpink</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle button" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward button" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play button" />
        </button>
        <button>
          <img src={PauseIcon} alt="Pause button" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward button" />
        </button>
        <button>
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

export default Player;
