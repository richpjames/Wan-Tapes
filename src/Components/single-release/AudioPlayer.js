import React, { Component } from "react";
import styled from "styled-components";
import IndividualTrack from "./IndividualTrack";
import MusicControlButton from "./StopButton";

const ButtonsWrapper = styled.div``;
const AudioPlayerWrap = styled.section`
  
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
    duration: 0
  };

  render() {
    const { selectedTrack } = this.state;
    const { tracks } = this.props;
    const currentTime = getTime(this.state.currentTime);

    const trackList = tracks.map(track => {
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
    return (
      <AudioPlayerWrap className="audioPlayerWrap">
        <Tracks>
          <ul>{trackList}</ul>
        </Tracks>
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
      duration
    } = this.state;
    const { tracks } = this.props;
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
        trackLink: tracks[1].uri
      });
    }
    if (selectedTrack === "Gooseberry" && currentTime === duration - 1) {
      this.setState({
        player: "Play",
        selectedTrack: "Almost Definitely Nothing",
        trackLink: tracks[2].uri
      });
    }
  }

  componentDidMount() {
    this.setState({});
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
