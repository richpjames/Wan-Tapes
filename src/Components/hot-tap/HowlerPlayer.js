import React, { Component } from "react";
import styled from "styled-components";
import { Howl, Howler } from "howler";
import ReactHowler from "react-howler";

const TracksWrapper = styled.div``;
const SingleTrackWrapper = styled.div``;

export default class HowlerPlayer extends Component {
 
  render() {
    const baseUrl = "https://www.wantapes.com/trax/";
    const tracks = [
      { title: "Lane Creeper", link: "A1-Lane-Creeper.mp3" },
      { title: "Gooseberry", link: "A2-Gooseberry.mp3" },
      {
        title: "Almost Definitely Nothing",
        link: "B1-Almost-Definitely-Nothing.mp3"
      }
    ];

    return (
      <TracksWrapper>
        {tracks.map(track => {
          console.log(track);
          return <ReactHowler key={track.title} src={`${baseUrl}${track.link}`} preload={true}  html5={true}
          ref={(ref)=> (this.player = ref)}
          />;
          <button onClick={() => {}}/>
        })}
        {/* <SingleTrackWrapper>
          <ReactHowler src={`${baseUrl}${a1}`} />
        </SingleTrackWrapper>
        <SingleTrackWrapper>
          <ReactHowler src={`${baseUrl}${a2}`} />
        </SingleTrackWrapper>
        <SingleTrackWrapper>
          <ReactHowler src={`${baseUrl}${b1}`} />
        </SingleTrackWrapper> */}
      </TracksWrapper>
    );
  }
}
