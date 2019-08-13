import React, { Component } from "react";
import styled from "styled-components";
import IndividualTrack from "./IndividualTrack";
import StopButton from "./StopButton";

const AudioPlayerWrap = styled.section``;

const TimeStopWrapper = styled.div`
  width: 15%;
  margin-left: auto;
  margin-right: auto;
`;

const Tracks = styled.ul`
  text-align: left;
  padding-left: 2%;
  font-size: 0.95em;
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

    const trackList = tracks.map(({ id, glyph, title, uri, length }, i) => {
      const linebreakBool = this.lineBreakAdder(tracks, i);
      return (
        <div key={id}>
          {linebreakBool ? <br /> : null}
          <IndividualTrack
            glyph={glyph}
            title={title}
            uri={uri}
            length={length}
            selectedTrack={selectedTrack}
            setStateWithTrack={this.setStateWithTrack}
          />
        </div>
      );
    });
    return (
      <AudioPlayerWrap className="audioPlayerWrap">
        <Tracks className="Tracks">{trackList}</Tracks>
        <TimeStopWrapper>
          <StopButton setPlayState={this.setStateWithTrack} />
          <TimerWrapper className="timerWrapper">
            {this.timeCheck(currentTime)}
          </TimerWrapper>
        </TimeStopWrapper>
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
  lineBreakAdder = (tracks, i) => {
    let indexMinus1 = i - 1;
    let previousTrackSideId = tracks[indexMinus1]
      ? tracks[indexMinus1].id[0]
      : tracks[i].id[0];
    let currentTrackSideId = tracks[i].id[0];
    if (previousTrackSideId !== currentTrackSideId) return true;
    else return false;
  };
}
