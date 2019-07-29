import React, { Component } from "react";

export default class AudioPlayer extends Component {
  state = {
    selectedTrack: null,
    tracks: [
      { id: "A1", title: "Lane Creeper", length: 5.39, uri: "https://www.wantapes.com/trax/A1-Lane-Creeper.mp3" },
      { id: "A2", title: "Gooseberry", length: 4.47, uri: "https://www.wantapes.com/trax/A2-Gooseberry.mp3" },
      { id: "B1", title: "Almost Definitely Nothing", length: 12.01, uri: "https://www.wantapes.com/trax/B1-Almost-Definitely-Nothing.mp3" }
    ]
  };
  render() {
    const { tracks } = this.state;
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
      <div>
        <ul>{tracklist}</ul>
        <audio ref={ref => this.player = ref} />
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.selectedTrack !== prevState.selectedTrack){
      
    }
  }
}
