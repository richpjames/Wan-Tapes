import React, { Component } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div``;
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
    player: "stopped",
    currentTime: null,
    duration: null,
    tracks: [
      {
        id: "A1",
        title: "Lane Creeper",
        length: 5.39,
        uri: "https://www.wantapes.com/trax/A1-Lane-Creeper.mp3"
      },
      {
        id: "A2",
        title: "Gooseberry",
        length: 4.47,
        uri: "https://www.wantapes.com/trax/A2-Gooseberry.mp3"
      },
      {
        id: "B1",
        title: "Almost Definitely Nothing",
        length: 12.01,
        uri: "https://www.wantapes.com/trax/B1-Almost-Definitely-Nothing.mp3"
      }
    ]
  };

  render() {
    const { tracks, player } = this.state;
    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);
    const tracklist = tracks.map(track => {
      return (
        <li
          key={track.id}
          onClick={() => this.setState({ selectedTrack: track.title })}
        >
          {track.title}
        </li>
      );
    });
    return (
      <>
        <ul>{tracklist}</ul>
        <ButtonWrapper>
          {player === "paused" && (
            <button onClick={() => this.setState({ player: "playing" })}>
              Play
            </button>
          )}
          {player === "playing" && (
            <button onClick={() => this.setState({ player: "paused" })}>
              Pause
            </button>
          )}
          {player === "playing" || player === "paused" ? (
            <button onClick={() => this.setState({ player: "stopped" })}>
              Stop
            </button>
          ) : (
            ""
          )}
        </ButtonWrapper>

        {player === "playing" || player === "paused" ? (
          <TimerWrapper>
            {currentTime} / {duration}
          </TimerWrapper>
        ) : (
          ""
        )}

        <audio ref={ref => (this.player = ref)} />
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedTrack } = this.state;
    const laneCreeperLink = this.state.tracks[0].uri;
    const gooseberryLink = this.state.tracks[1].uri;
    const almostDefLink = this.state.tracks[2].uri;

    if (selectedTrack !== prevState.selectedTrack) {
      let trackToPlay;

      switch (selectedTrack) {
        case "Lane Creeper":
          trackToPlay = laneCreeperLink;
          break;
        case "Gooseberry":
          trackToPlay = gooseberryLink;
          break;
        case "Almost Definitely Nothing":
          trackToPlay = almostDefLink;
          break;
        default:
          break;
      }

      if (trackToPlay) {
        this.player.src = trackToPlay;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      console.log("state change");
      if (this.state.player === "paused") {
        console.log("pausing");
        this.player.pause();
      } else if (this.state.player === "stopped") {
        console.log("stopped");
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
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
}
