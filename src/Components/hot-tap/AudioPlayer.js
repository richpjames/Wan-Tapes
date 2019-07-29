import React, { Component } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div``

export default class AudioPlayer extends Component {
  state = {
    selectedTrack: null,
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
    ],
    player: "stopped"
  };

  render() {
    const { tracks } = this.state;
    const {player} = this.state;
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
          <button onClick={() => this.setState({player: "playing"})}>
            Play
          </button>
        )}
        {player === "playing" && (
          <button onClick={() => this.setState({player: "paused"})}>
            Pause
          </button>
        )}
        {player === "playing" || player === "paused" ? (
          <button onClick={() => this.setState({player: "stopped"})}>
            Stop
          </button>
        ) : (
          ""
        )}
        </ButtonWrapper>
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
        this.setState({ player: "playing" });
      }
    }
  }
}
