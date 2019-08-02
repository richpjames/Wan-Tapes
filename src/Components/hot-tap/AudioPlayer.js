import React, { Component } from "react";
import styled from "styled-components";
import IndividualTrack from "./IndividualTrack";
import MusicControlButton from "./MusicControlButton";

const ButtonsWrapper = styled.div``;
const AudioPlayerWrap = styled.section`
  position: absolute;
  top: 50%;
  left: 30%;
`;
const Tracks = styled.ul`
  text-align: left;
`;
const TimerWrapper = styled.div``;

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

export default class AudioPlayer extends Component {
  state = {
    selectedTrack: null,
    trackLink: null,
    player: "Stop",
    currentTime: 0,
    duration: 0,
    tracksArr: [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        glyph: "†",
        uri: "https://www.wantapes.com/trax/A1-Lane-Creeper.mp3"
      },
      {
        id: "A2",
        title: "Gooseberry",
        length: 4.47,
        glyph: "†",
        uri: "https://www.wantapes.com/trax/A2-Gooseberry.mp3"
      },
      {
        id: "B1",
        title: "Almost Definitely Nothing",
        length: 12.01,
        glyph: "‡",
        uri: "https://www.wantapes.com/trax/B1-Almost-Definitely-Nothing.mp3"
      }
    ],
    playStates: ["Play", "Stop", "Pause"]
  };

  render() {
    const { tracksArr, playStates, selectedTrack } = this.state;
    const currentTime = getTime(this.state.currentTime);
    const stopAndPause = playStates.slice(1, 3);

    const tracks = tracksArr.map(track => {
      const { id, glyph, title, length, uri } = track;
      return (
        <IndividualTrack
          key={id}
          glyph={glyph}
          title={title}
          uri={uri}
          length={length}
          selectedTrack={selectedTrack}
          setStateWithTrack={this.setStateWithTrack}
        />
      );
    });

    // const playerButtons = stopAndPause.map(playState => {
    //   return (
    //     <MusicControlButton
    //       key={playState}
    //       playState={playState}
    //       setPlayState={this.setStateWithTrack}
    //     />

    return (
      <AudioPlayerWrap className="audioPlayerWrap">
        <Tracks>{tracks}</Tracks>
        <ButtonsWrapper className="buttonsWrapper">
          <MusicControlButton
            playState={"Stop"}
            setPlayState={this.setStateWithTrack}
          />
        </ButtonsWrapper>
        <TimerWrapper className="timerWrapper">
          {this.timeCheck(currentTime)}
        </TimerWrapper>
        <audio ref={ref => (this.player = ref)} />
      </AudioPlayerWrap>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      player,
      trackLink,
      currentTime,
      selectedTrack,
      tracksArr,
      duration
    } = this.state;

    if (player !== prevState.player) {
      if (player === "Pause") {
        this.player.pause();
      } else if (player === "Stop") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (player === "Play" && prevState.player === "Pause") {
        this.player.play();
      }
    }
    if (selectedTrack !== prevState.selectedTrack) {
      if (trackLink) {
        this.player.src = trackLink;
        this.player.play();
        this.setState({ player: "Play", duration: this.player.duration });
      }
    }
    if (selectedTrack === "Lane Creeper" && currentTime === duration - 1) {
      this.setState({
        player: "Play",
        selectedTrack: "Gooseberry",
        trackLink: tracksArr[1].uri
      });
    }
    if (selectedTrack === "Gooseberry" && currentTime === duration - 1) {
      this.setState({
        player: "Play",
        selectedTrack: "Almost Definitely Nothing",
        trackLink: tracksArr[2].uri
      });
    }
  }

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  setStateWithTrack = (playState, title, trackLink) => {
    this.setState({
      selectedTrack: title,
      player: playState,
      trackLink: trackLink
    });
  };

  timeCheck = time => {
    if (time) return time;
    else return "00:00";
  };
}
