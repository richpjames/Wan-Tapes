import React, { Component } from "react";
import styled from "styled-components";
import { releases } from "../../data/releases.json";
import BackgroundWrapper from "../single-release/ReleaseWrap";

const Release = styled.section`
  width: 20%;
  border: 1px red solid;
`;

const ReleasesWrapper = styled.section`
  display: flex;
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
        colors
      }) => {
        return (
          <Release key={releaseDate}>
            <BackgroundWrapper
              colors={colors}
              height={"200vh"}
              title={title}
              artist={artist}
              tracks={tracks}
              baseUrl={baseUrl}
              photos={photos}
              buyCode={buyCode}
            />
            {/* <Container primary />
            <TitleText title={title} artist={artist} />
            <AudioPlayer tracks={tracks} baseUrl={baseUrl} />
            <Ribbon colors={colors} />
            <SecondContainerWrap>
              <Container primary />
              <Photos photos={photos} baseUrl={baseUrl} />
            </SecondContainerWrap>
            <BuyButton buyCode={buyCode} /> */}
          </Release>
        );
      }
    );
    return <ReleasesWrapper>{releaseRoll}</ReleasesWrapper>;
  }
  componentDidMount = () => {
    this.setState({ releases: releases, isLoading: false });
  };
}
