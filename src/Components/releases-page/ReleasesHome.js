import React, { Component } from "react";
import styled from "styled-components";
import { releases } from "../../data/releases.json";
import ReleaseWrap from "../single-release/ReleaseWrap";
import Timeline from "../home/Timeline";

const Release = styled.section`
  margin-left: 10vw;
  min-width: 30vw;
`;

const ReleasesWrapper = styled.section`
  display: flex;
  border: 2px purple solid;
`;

export default class ReleasesHome extends Component {
  state = {
    isLoading: true,
    error: false,
    releases: []
  };
  render() {
    const { releases } = this.state;
    const releaseRoll = releases.map(
      ({
        title,
        artist,
        releaseDate,
        tracks,
        buyCode,
        photos,
        baseUrl,
        colors,
        coverArt
      }) => {
        return (
          <Release className="Release" key={releaseDate}>
            <ReleaseWrap
              colors={colors}
              height={"100vh"}
              title={title}
              artist={artist}
              tracks={tracks}
              baseUrl={baseUrl}
              photos={photos}
              buyCode={buyCode}
              coverArt={coverArt}
            />
          </Release>
        );
      }
    );
    return (
      <ReleasesWrapper className="ReleasesWrapper">
        {releaseRoll}
      </ReleasesWrapper>
    );
  }
  componentDidMount = () => {
    this.setState({ releases: releases, isLoading: false });
  };
}
