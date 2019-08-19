import React, { Component } from "react";
import styled from "styled-components";
import { releases } from "../../data/releases.json";
import ReleaseWrap from "../single-release/ReleaseWrap";
import Banner from "../home/Banner";
import Timeline from "./Timeline";

const Release = styled.section`
  margin-left: 10vw;
  min-width: 30vw;
  padding: 0 5vw;
`;

const ReleasesWrapper = styled.section`
  display: flex;
`;

export default class ReleasesHome extends Component {
  state = {
    isLoading: true,
    error: false,
    releases: [],
    detail: false
  };
  render() {
    const { releases, detail } = this.state;
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
              showDetail={this.showDetail}
              detail={detail}
            />
          </Release>
        );
      }
    );
    return (
      <>
        <Banner />
        <ReleasesWrapper className="ReleasesWrapper">
          {releaseRoll}
        </ReleasesWrapper>
        <Timeline />
      </>
    );
  }

  showDetail = () => {
    const { detail } = this.state;
    if (detail === false) {
      this.setState({ detail: true });
    } else {
      this.setState({
        detail: false
      });
    }
  };
  componentDidMount = () => {
    this.setState({ releases: releases, isLoading: false });
  };
}
